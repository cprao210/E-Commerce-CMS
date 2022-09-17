import React from "react";
import { BackDropStyled } from "./BackDrop.styled";

const BackDrop = (props) =>
  props.show ? (
    <BackDropStyled onClick={props.onHideModelClick}></BackDropStyled>
  ) : null;

export default BackDrop;
