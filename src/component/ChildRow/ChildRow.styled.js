import styled from "styled-components";

export const ChildRowStyled = styled.div`
  margin-bottom: 22px;
  .Childrow {
    display: flex;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    justify-content: flex-end;
  }

  input {
    cursor: pointer;
  }
  input:focus {
    outline: none;
  }
  .Childdots {
    margin-right: 12px;
  }

  .ChildproductDiv {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    width: 100%;
    border-radius: 30px;
    height: 32px;
    align-items: center;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.8);

    box-sizing: border-box;
  }
  .Childwrap {
    position: relative;
    align-items: center;
    width: 184px;
    display: flex;
    margin-right: 12px;
  }
`;
