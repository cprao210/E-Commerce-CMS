import styled from "styled-components";

const PopUpStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: ${(props) => (props.show ? "414px" : "0px")};

  position: fixed;
  left: 0;
  top: 0;
  margin: 100px 388px;
  width: 664px;
  z-index: 200;
  background: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
`;

export default PopUpStyle;
