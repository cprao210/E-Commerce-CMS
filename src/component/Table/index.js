import React from "react";
import ParentRow from "../ParentRow";
import { TableStyled } from "./Table.style";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { addProductInput } from "../../utils/productsTable";

const Table = ({ handleEdit, tableData, setTableData }) => {
  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = tableData;
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setTableData(tempData);
  };
  return (
    <TableStyled>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div
              className=""
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tableData.map((d, i) => (
                <Draggable key={i} draggableId={i.toString()} index={i}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <ParentRow
                        valueInput={d.handle}
                        indexValue={i}
                        handleEdit={handleEdit}
                        d={d}
                        data={d.variants}
                        tableData={tableData}
                        setTableData={setTableData}
                      >
                        <img
                          {...provided.dragHandleProps}
                          src={process.env.PUBLIC_URL + "assets/icons/dots.svg"}
                          style={{ marginLeft: "54px" }}
                          className="dots"
                          alt="dots"
                        />
                      </ParentRow>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
              <div className="addMorebtnBox">
                <div
                  className="addMorebtn"
                  onClick={() => {
                    const newArr = [...tableData];
                    addProductInput(newArr);
                    setTableData(newArr);
                  }}
                >
                  Add Product
                </div>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </TableStyled>
  );
};

export default Table;
