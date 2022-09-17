import React from "react";
import ParentRow from "../ParentRow";
import { TableStyled } from "./Table.style";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
      {tableData.length === 0 ? (
        <ParentRow
          child={false}
          indexValue={0}
          handleEdit={handleEdit}
          valueInput={""}
          d={{ isSelected: false }}
          data={tableData}
        >
          <img
            // {...provided.dragHandleProps}
            src={process.env.PUBLIC_URL + "assets/icons/dots.svg"}
            style={{ marginLeft: "54px" }}
            className="dots"
            alt="dots"
          />
        </ParentRow>
      ) : (
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
                        <div className="d">
                          <ParentRow
                            child={false}
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
                              src={
                                process.env.PUBLIC_URL + "assets/icons/dots.svg"
                              }
                              style={{ marginLeft: "54px" }}
                              className="dots"
                              alt="dots"
                            />
                          </ParentRow>
                        </div>
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
                      newArr.push({
                        title: "",
                        handle: "",
                        variants: [],
                        id: new Date().getTime(),
                      });
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
      )}
    </TableStyled>
  );
};

export default Table;
