import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import InfiniteScroll from "react-infinite-scroll-component";

import { FormControlLabel } from "@mui/material";
import { getProducts } from "../../services/products";
import Spinner from "../../common-components/Spinner";
import { ScrollModalStyled } from "./ScrollModal.styled";
import {
  handleChecked,
  handleIndeterminate,
  handleProductClick,
  handleVarientClick,
} from "../../utils/fetchProducts";
const ScrollModal = ({
  searchValue,
  pageNo,
  setPageNo,
  setFetchProducts,
  setMoreData,
  fetchProducts,
  moreData,
}) => {
  useEffect(() => {
    getProducts(searchValue, pageNo).then((data) => {
      if (data == null) {
        setFetchProducts([]);
        setMoreData(false);
      } else {
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
    <ScrollModalStyled className="">
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
                <label className="container mainDataDiv ">
                  <FormControlLabel
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                    control={
                      <Checkbox
                        checked={handleChecked(d)}
                        indeterminate={handleIndeterminate(d)}
                        onClick={(e) => {
                          handleProductClick(fetchProducts, parentIndex, d);
                          setFetchProducts([...fetchProducts]);
                        }}
                      />
                    }
                  />
                  <img src={d.image.src} className="fetchImg" alt="img" />
                  <p>{d.handle}</p>
                </label>
                {d.variants.map((variants, i) => (
                  <label key={i} className="containerChild mainDataDiv ">
                    <span>
                      <Checkbox
                        value={i}
                        sx={{
                          width: "24px",
                          height: "24px",
                        }}
                        checked={variants.isSelected ? true : false}
                        onClick={(e) => {
                          handleVarientClick(fetchProducts, parentIndex, e);
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
                ))}
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </ScrollModalStyled>
  );
};

export default ScrollModal;
