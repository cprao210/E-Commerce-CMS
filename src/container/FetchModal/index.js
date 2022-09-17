import React, { useState } from "react";
import { FetchTableStyled } from "./FetchTable.styled";

import ScrollModal from "../../component/ScrollModal";
const FetchTable = ({ setTableData, handleCross, tableData, ReplaceIndex }) => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [moreData, setMoreData] = useState(true);

  return (
    <FetchTableStyled>
      <div className="tableHeading">
        <div className="selectPro">Select Products</div>
        <div className="crossBtn">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "assets/icons/cross.svg"}
            className="cross"
            alt="cross"
            onClick={() => {
              handleCross();
            }}
          />
        </div>
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
      <div className="">
        <ScrollModal
          searchValue={searchValue}
          setPageNo={setPageNo}
          pageNo={pageNo}
          moreData={moreData}
          fetchProducts={fetchProducts}
          setFetchProducts={setFetchProducts}
          setMoreData={setMoreData}
        />
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
          <div className="clcBtn" onClick={() => handleCross()}>
            Cancel
          </div>
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
