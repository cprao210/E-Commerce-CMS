import React, { useState } from "react";
import ChildRow from "../ChildRow";
import { ParentRowStyled } from "./ParentRow.styled";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import DiscountModal from "../../common-components/DiscountModal";
import ToggleBtn from "../../common-components/ToggleBtn";

const ParentRow = ({
  handleEdit,
  valueInput,
  indexValue,
  d,
  data,
  tableData,
  setTableData,
  children,
}) => {
  const [showDiscownt, setShowDiscownt] = useState(false);
  const [showHide, setshowHide] = useState(false);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = data;
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    const newState = [...tableData];
    newState[indexValue].variants = [...tempData];
    setTableData(newState);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ParentRowStyled toggle={data.length <= 1}>
        <div className="row">
          {children}
          <p className="numbering"> {indexValue + 1}.</p>

          <div className="wrap">
            <input
              className="productDiv"
              placeholder="Select Product"
              value={
                valueInput.length > 22
                  ? valueInput.slice(0, 22) + "..."
                  : valueInput
              }
              readOnly
            />

            <img
              src={process.env.PUBLIC_URL + "assets/icons/pen.svg"}
              className="pen"
              alt="pen"
              onClick={() => handleEdit(indexValue)}
            />
          </div>
          {showDiscownt ? (
            <DiscountModal
              setTableData={setTableData}
              indexValue={indexValue}
              tableData={tableData}
              crossToggle={tableData.length}
              child={false}
            />
          ) : (
            <div
              className="discountBtn"
              onClick={() => {
                setShowDiscownt(true);
              }}
            >
              Add Discount
            </div>
          )}
        </div>
        {data.length > 1 && (
          <ToggleBtn setshowHide={setshowHide} showHide={showHide} />
        )}
        <div className="childs">
          {!showHide && (
            <Droppable droppableId={`droppable${indexValue}`}>
              {(provider) => (
                <div
                  className=""
                  ref={provider.innerRef}
                  {...provider.draggableProps}
                >
                  {data.map((variants, i) => (
                    <Draggable
                      key={`${indexValue}${i}`}
                      draggableId={`${indexValue}${i}`}
                      index={i}
                    >
                      {(provider) => (
                        <div
                          className=""
                          ref={provider.innerRef}
                          {...provider.draggableProps}
                        >
                          <ChildRow
                            valueInput={variants.title}
                            tableData={tableData}
                            setTableData={setTableData}
                            index={i}
                            ind={indexValue}
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL + "assets/icons/dots.svg"
                              }
                              className="Childdots"
                              alt="dots"
                              {...provider.dragHandleProps}
                            />
                          </ChildRow>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provider.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </div>
      </ParentRowStyled>
    </DragDropContext>
  );
};

export default ParentRow;
