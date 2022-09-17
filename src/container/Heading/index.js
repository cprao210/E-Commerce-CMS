import React from "react";
import { HeadingStyled } from "./Heading.style";

const Heading = () => {
  return (
    <HeadingStyled>
      <img
        className="monkLogo"
        src={process.env.PUBLIC_URL + "assets/logos/MonkLogo.svg"}
        alt=""
      />
      <div className="heading">Monk Upsell & Cross-sell</div>
    </HeadingStyled>
  );
};

export default Heading;
