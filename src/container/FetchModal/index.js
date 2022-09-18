import React, { useState } from "react";
import { FetchTableStyled } from "./FetchTable.styled";

import ScrollModal from "../../component/ScrollModal";
import { addProducts, productCount } from "../../utils/fetchProducts";
const FetchTable = ({ setTableData, handleCross, tableData, ReplaceIndex }) => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNo, setPageNo] = useState(0);
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
          {productCount(fetchProducts)}
          &nbsp; Product selected
        </p>
        <span>
          <div className="clcBtn" onClick={() => handleCross()}>
            Cancel
          </div>
          <div
            className="addBtn"
            onClick={() => {
              const newState = [...tableData];

              addProducts(fetchProducts, newState, ReplaceIndex);
              setTableData(newState);
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
