import React from "react";

const ToggleBtn = ({ showHide, setshowHide }) => {
  return (
    <div
      className="toggle"
      onClick={() => {
        if (showHide) {
          setshowHide(false);
        } else {
          setshowHide(true);
        }
      }}
    >
      {!showHide ? (
        <p className="toggleValue">
          Hide variants{" "}
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/UpArrow.svg"}
            alt="upArrow"
          />
        </p>
      ) : (
        <p className="toggleValue">
          Show variants{" "}
          <img
            src={process.env.PUBLIC_URL + "/assets/icons/DownArrow.svg"}
            alt="upArrow"
          />
        </p>
      )}
    </div>
  );
};

export default ToggleBtn;
