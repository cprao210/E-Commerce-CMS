import React from "react";
import { ChildRowStyled } from "./ChildRow.styled";

const ChildRow = ({
  child,
  handleEdit,
  children,
  valueInput,
  ind,
  index,
  setTableData,
  tableData,
}) => {
  return (
    <ChildRowStyled child={child}>
      <div className="Childrow">
        {children}

        <div className="Childwrap">
          <input
            className="ChildproductDiv"
            placeholder="Select Product"
            value={
              valueInput.length > 22
                ? valueInput.slice(0, 22) + "..."
                : valueInput
            }
            readOnly
          />
        </div>

        <input className="ChilddiscountDiv" placeholder="20" />
        <select name="" className="ChilddiscountType ChilddiscountDiv" id="">
          <option value="">% Off</option>
          <option value="">Flat</option>
        </select>
        {tableData[ind].variants.length > 1 ? (
          <img
            src={process.env.PUBLIC_URL + "assets/icons/cross.svg"}
            className="Childcross"
            alt="cross"
            onClick={() => {
              const newState = [...tableData];
              newState[ind].variants.splice(index, 1);
              setTableData([...newState]);
            }}
          />
        ) : null}
      </div>
    </ChildRowStyled>
  );
};

export default ChildRow;
