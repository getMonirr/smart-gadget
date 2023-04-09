import React from "react";

const GButton = ({ children, className, handleOnClick, disabled }) => {
  return (
    <button
      onClick={handleOnClick}
      type="button"
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GButton;
