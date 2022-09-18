import styled from "styled-components";

export const TableStyled = styled.div`
  td {
    cursor: pointer;
  }
  .childrens {
    margin-top: 44px;
    margin-bottom: 8px;
    margin-left: 78px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .d {
    display: flex;
    align-items: center;
  }
  .marginBtm {
    margin-bottom: 22px;
  }
  .addMorebtnBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    margin-top: 22px;
  }
  .addMorebtn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 48px;
    width: 194px;
    border: 2px solid #008060;
    border-radius: 4px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #008060;
    box-sizing: border-box;
  }
`;
