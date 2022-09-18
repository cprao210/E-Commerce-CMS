import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  max-width: 528px;
  height: 100%;
  border-radius: 4px;
  margin: 28px 254px 0;
  box-sizing: border-box;

  .modalHeading {
    margin: 40px 0 32px 70px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Text/Default */

    color: #202223;
    box-sizing: border-box;
  }
  .tableHead {
    display: flex;
    margin: 0 0 0px 110px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
  .product {
    margin-right: 170px;
  }
  .table {
    margin: 0 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
