import React from "react";
import FetchTable from "../../container/FetchModal";
import PopUpStyle from "./PopUp.styled";

const PopUp = ({
  show,
  children,
  handleCross,
  ReplaceIndex,
  setTableData,
  tableData,
}) => {
  return (
    <PopUpStyle show={show}>
      {show ? (
        <FetchTable
          show={show}
          tableData={tableData}
          setTableData={setTableData}
          ReplaceIndex={ReplaceIndex}
          handleCross={handleCross}
        />
      ) : null}
    </PopUpStyle>
  );
};
export default PopUp;
