import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="app">
      <div className="margin"></div>
      <div className="container">{children}</div>
      <div className="margin"></div>
    </div>
  );
};

export default Wrapper;
