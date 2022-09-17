import styled from "styled-components";

export const FetchTableStyled = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid;
  box-sizing: border-box;
  .tableHeading {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 24px 6px 28px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
  }
  .searchBar {
    width: 600px;
    height: 32px;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    margin: 8px 34px 8px 28px;
    padding: 4px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }
  .searchDiv {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .crossBtn {
    font-size: 18px;
  }
  .fetchData {
    height: 266px;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .mainDataDiv {
    height: 60px;
    width: 644px;

    padding: 12px 28px;
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
  }
  .containerChild {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 6px 6px 40px;
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
  span {
    display: flex;
    align-items: center;
  }

  .footer {
    height: 48px;
    margin: 0 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
  }
  .fetchImg {
    width: 36px;
    height: 36px;
    margin: 0 14px 0;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .clcBtn {
    display: flex;
    align-items: center;
    width: 104px;
    height: 32px;
    padding: 6px 28px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
  }
  .addBtn {
    display: flex;
    align-items: center;
    width: 72px;
    height: 32px;
    padding: 6px 22px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    margin-left: 10px;
    cursor: pointer;

    color: #ffffff;
    background: #008060;
    border: 2px solid #008060;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;
