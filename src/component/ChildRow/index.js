import React from "react";
import DiscountModal from "../../common-components/DiscountModal";
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

        <DiscountModal
          setTableData={setTableData}
          indexValue={index}
          tableData={tableData}
          ind={ind}
          crossToggle={tableData[ind].variants.length}
          child={true}
        />
      </div>
    </ChildRowStyled>
  );
};

export default ChildRow;
