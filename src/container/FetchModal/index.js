import React, { useEffect, useState } from "react";
import { FetchTableStyled } from "./FetchTable.styled";
import Checkbox from "@mui/material/Checkbox";
import InfiniteScroll from "react-infinite-scroll-component";
import { getProducts } from "../../services/products";
import Spinner from "../../common-components/Spinner";
import { FormControlLabel } from "@mui/material";
const FetchTable = ({ setTableData, handleCross, tableData, ReplaceIndex }) => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [moreData, setMoreData] = useState(true);
  useEffect(() => {
    getProducts(searchValue, pageNo).then((data) => {
      if (data == null) {
        setFetchProducts([]);
        setMoreData(false);
      } else {
        // setFetchProducts(data);
        setFetchProducts(
          data.map((d, i) => {
            return {
              ...d,
              variants: d.variants.map((d, i) => {
                return { ...d, isSelected: false };
              }),
            };
          })
        );
        setMoreData(true);
      }
    });
  }, [searchValue]);

  const fetchMoreData = () => {
    setMoreData(true);
    setPageNo((prevCount) => prevCount + 1);

    getProducts(searchValue, pageNo).then((data) => {
      if (data == null) {
        setMoreData(false);
      } else {
        setFetchProducts([...fetchProducts, ...data]);
      }
    });
  };

  return (
    <FetchTableStyled>
      <div className="tableHeading">
        <div className="selectPro">Select Products</div>
        <div className="crossBtn">x</div>
      </div>
      <div className="searchDiv">
        <input
          className="searchBar"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setPageNo(1);
          }}
          placeholder="🔍 Search Product"
        />
      </div>
      <div className="fetchData" id="scrollableDiv">
        <InfiniteScroll
          className="fetchData"
          dataLength={fetchProducts.length}
          next={fetchMoreData}
          hasMore={moreData}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollableTarget="scrollableDiv"
        >
          {fetchProducts.map((d, parentIndex) => {
            return (
              <div key={parentIndex}>
                <div className="mainDataDiv">
                  <label className="container ">
                    <FormControlLabel
                      sx={{
                        width: "24px",
                        height: "24px",
                        color: "#008060",
                        "&.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.":
                          {
                            color: "#008060",
                          },
                        "&.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate":
                          {
                            color: "#008060",
                          },
                      }}
                      control={
                        <Checkbox
                          checked={
                            d.variants.length ===
                            d.variants.filter((d, i) => {
                              return d.isSelected;
                            }).length
                              ? true
                              : false
                          }
                          indeterminate={
                            d.variants.filter((d, i) => {
                              return d.isSelected;
                            }).length > 0 &&
                            d.variants.length !==
                              d.variants.filter((d, i) => {
                                return d.isSelected;
                              }).length
                              ? true
                              : false
                          }
                          onClick={(e) => {
                            if (
                              d.variants.length ===
                              d.variants.filter((d, i) => {
                                return d.isSelected;
                              }).length
                            ) {
                              fetchProducts[parentIndex].variants =
                                d.variants.map((d, i) => {
                                  return { ...d, isSelected: false };
                                });
                            } else {
                              fetchProducts[parentIndex].variants =
                                d.variants.map((d, i) => {
                                  return { ...d, isSelected: true };
                                });
                            }
                            setFetchProducts([...fetchProducts]);
                          }}
                        />
                      }
                    />
                    <img src={d.image.src} className="fetchImg" alt="img" />{" "}
                    <p>{d.handle}</p>
                  </label>
                </div>
                {d.variants.map((variants, i) => (
                  <div key={i} className="mainDataDiv">
                    <label className="containerChild ">
                      <span>
                        <Checkbox
                          value={i}
                          sx={{
                            width: "24px",
                            height: "24px",
                            "&.Mui-checked": {
                              color: "#008060",
                            },
                          }}
                          checked={variants.isSelected ? true : false}
                          onClick={(e) => {
                            if (
                              fetchProducts[parentIndex].variants[
                                e.target.value
                              ].isSelected
                            ) {
                              fetchProducts[parentIndex].variants[
                                e.target.value
                              ].isSelected = false;
                            } else {
                              fetchProducts[parentIndex].variants[
                                e.target.value
                              ].isSelected = true;
                            }
                            setFetchProducts([...fetchProducts]);
                          }}
                        />

                        <p className="variants">{variants.title}</p>
                      </span>
                      <span>
                        <p className="inventory">
                          {variants.inventory_quantity} available
                        </p>
                        <p>₹ {variants.price}</p>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
      <div className="footer">
        <p className="productCount">
          {
            fetchProducts
              .map(
                (d, i) =>
                  d.variants.filter((d1) => {
                    return d1.isSelected;
                  }).length
              )
              .filter((d, i) => {
                return d > 0;
              }).length
          }
          &nbsp; Product selected
        </p>
        <span>
          <div className="clcBtn">Cancel</div>
          <div
            className="addBtn"
            onClick={() => {
              if (tableData.length !== 0) {
                const newState = [...tableData];
                newState.splice(
                  ReplaceIndex,
                  1,
                  ...fetchProducts
                    .map((d, i) => {
                      return {
                        ...d,
                        isSelected: false,
                        variants: d.variants.filter((d1) => {
                          return d1.isSelected;
                        }),
                      };
                    })
                    .filter((d, i) => {
                      return d.variants.length > 0;
                    })
                );
                setTableData(newState);
              } else {
                tableData = [
                  ...fetchProducts
                    .map((d, i) => {
                      return {
                        ...d,
                        isSelected: false,
                        variants: d.variants.filter((d1) => {
                          return d1.isSelected;
                        }),
                      };
                    })
                    .filter((d, i) => {
                      return d.variants.length > 0;
                    }),
                ];
                setTableData(tableData);
              }

              handleCross();
            }}
          >
            Add
          </div>
        </span>
      </div>
    </FetchTableStyled>
  );
};

export default FetchTable;
