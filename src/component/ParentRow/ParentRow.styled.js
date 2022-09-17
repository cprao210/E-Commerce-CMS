import styled from "styled-components";

export const ParentRowStyled = styled.div`
  .row {
    display: flex;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    margin: 16px 0 6px 12px;
  }

  input {
    cursor: pointer;
  }
  input:focus {
    outline: none;
  }
  .dots {
    margin-right: 12px;
  }
  .numbering {
    margin-right: 8px;
  }
  .toggle {
    margin-bottom: 22px;
    height: 22px;
    position: relative;
  }
  .toggleValue {
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;

    text-decoration-line: underline;
    position: absolute;
    right: 0;
    color: #006eff;
  }
  .productDiv {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    width: 100%;
    height: 32px;
    align-items: center;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: rgba(0, 0, 0, 0.8);

    box-sizing: border-box;
  }
  .wrap {
    position: relative;
    align-items: center;
    width: 216px;
    display: flex;
    margin-right: 12px;
  }
  .pen {
    margin-right: 12px;
    width: 14px;
    height: 14px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .discountDiv {
    width: 70px;
    height: 32px;
    padding: 5px 14px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .cross {
    height: 12px;
    width: 12px;
    margin-left: 12px;
  }
  .discountType {
    width: 96px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: 2px;
    outline: none;
    & :focus {
      outline: none;
    }
  }
  .childs {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 78px;
    margin-top: ${(props) => (props.toggle ? "20px" : "0px")};
  }
  .discountBtn {
    width: 192px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 24px;
    background: #008060;
    border: 2px solid #008060;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: #ffffff;
    box-sizing: border-box;
  }
`;
