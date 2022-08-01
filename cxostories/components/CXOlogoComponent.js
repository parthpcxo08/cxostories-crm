import React from "react";
import logo from "../images/story-logo.png";
const CXOlogoComponent = () => {
  return (
    <div>
      <img
        style={{
          height: 15,
          width: 100,
          objectFit: "contain",
          transform: "scale(3.5)",
        }}
        alt="CXOstories logo"
        src={logo}
      />
    </div>
  );
};
export default CXOlogoComponent;
