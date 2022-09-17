import React from "react";

const Spinner = () => {
  return (
    <div className="text-center" style={{ textAlign: "center" }}>
      <img
        src={process.env.PUBLIC_URL + "assets/icons/spinner.jpg"}
        style={{ height: "40px", width: "40px" }}
        alt=""
      />
    </div>
  );
};

export default Spinner;
