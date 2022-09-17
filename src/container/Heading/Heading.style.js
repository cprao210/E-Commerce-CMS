import styled from "styled-components";

export const HeadingStyled = styled.div`
  display: flex;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid #d1d1d1;
  padding: 8px 20px;
  align-items: center;
  box-sizing: border-box;
  .monkLogo {
    width: 30px;
    height: 30px;
    margin-right: 18px;
    box-sizing: border-box;
  }
  .heading {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #7e8185;
    box-sizing: border-box;
  }
`;
