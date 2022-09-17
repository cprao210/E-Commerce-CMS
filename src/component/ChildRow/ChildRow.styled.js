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
  .Childnumbering {
    margin-right: 8px;
  }
  .Childtoggle {
    width: 424px;
    position: relative;
  }
  .ChildtoggleValue {
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;

    text-decoration-line: underline;
    position: absolute;
    right: 0;
    color: #006eff;
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
  .Childpen {
    margin-right: 12px;
    width: 14px;
    height: 14px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .ChilddiscountDiv {
    width: 70px;
    height: 32px;
    padding: 5px 14px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .Childcross {
    height: 12px;
    width: 12px;
    margin-left: 12px;
  }
  .ChilddiscountType {
    width: 96px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: 2px;
    outline: none;
    border-radius: 30px;

    & :focus {
      outline: none;
    }
  }
  .ChilddiscountBtn {
    width: 166px;
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
    color: #ffffff;
    box-sizing: border-box;
  }
`;
