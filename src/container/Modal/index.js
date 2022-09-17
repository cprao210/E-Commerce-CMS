import React, { useState } from "react";
import PopUp from "../../common-components/PopUp";
import BackDrop from "../../component/BackDrop";
import Table from "../../component/Table";
import { ModalStyled } from "./Modal.style";

const Modal = () => {
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState([
    {
      title: "",
      handle: "",
      variants: [],
      id: new Date().getTime(),
    },
  ]);
  const [ReplaceIndex, setReplaceIndex] = useState(0);
  console.log(tableData);
  const handleCross = () => {
    setShow(false);
  };

  const handleEdit = (index) => {
    setShow(true);
    setReplaceIndex(index);
  };

  return (
    <ModalStyled>
      <div className="modalHeading">Add Products </div>
      <div className="tableHead">
        <p className="product">Product </p>
        <p className="Discount">Discount </p>
      </div>
      <div className="table">
        <Table
          tableData={tableData}
          setTableData={setTableData}
          handleEdit={handleEdit}
        />
      </div>
      <PopUp
        show={show}
        tableData={tableData}
        ReplaceIndex={ReplaceIndex}
        setTableData={setTableData}
        handleCross={handleCross}
      />

      <BackDrop onHideModelClick={() => setShow(false)} show={show} />
    </ModalStyled>
  );
};

export default Modal;
