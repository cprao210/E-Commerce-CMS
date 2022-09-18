import styled from "styled-components";

export const DiscountModalStyled = styled.div`
  .discountDiv {
    width: 70px;
    height: 32px;
    padding: 5px 14px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: ${(props) => (props.child ? "30px" : 0)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    cursor: pointer;
  }
  .cross {
    height: 12px;
    width: 12px;
    margin-left: 12px;
    cursor: pointer;
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
`;
