import React from "react";

const Input = ({ type, className, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`pl-3  w-full border-none bg-stone-300/10 py-2 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
