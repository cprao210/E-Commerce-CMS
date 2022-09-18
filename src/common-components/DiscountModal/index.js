import React from "react";
import { DiscountModalStyled } from "./DiscountModal.styled";

const DiscountModal = ({
  tableData,
  indexValue,
  setTableData,
  crossToggle,
  ind,
  child,
}) => {
  return (
    <DiscountModalStyled child={child}>
      <input
        className="discountDiv"
        placeholder="0"
        type="number"
        onWheel={(event) => event.currentTarget.blur()}
      />
      <select name="" className="discountType discountDiv" id="">
        <option value="">% Off</option>
        <option value="">Flat</option>
      </select>

      {crossToggle > 1 && (
        <img
          src={process.env.PUBLIC_URL + "assets/icons/cross.svg"}
          className="cross"
          alt="cross"
          onClick={() => {
            const newState = [...tableData];
            child
              ? newState[ind].variants.splice(indexValue, 1)
              : newState.splice(indexValue, 1);

            setTableData(newState);
          }}
        />
      )}
    </DiscountModalStyled>
  );
};

export default DiscountModal;
