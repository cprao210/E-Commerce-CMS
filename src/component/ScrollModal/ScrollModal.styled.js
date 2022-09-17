import styled from "styled-components";

export const ScrollModalStyled = styled.div`
  .fetchData {
    height: 266px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .mainDataDiv {
    height: 60px;
    width: 644px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
  }
  .container {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    padding: 12px 28px;
  }
  .containerChild {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 28px 16px 70px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .infinite-scroll-component {
    overflow-x: hidden;
  }
  .variants {
    margin-left: 22px;
  }
  .inventory {
    margin-right: 36px;
  }
`;
