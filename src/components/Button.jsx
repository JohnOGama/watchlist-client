import React from "react";

const Button = ({ className, children, href, onClick }) => {
  return (
    <a
      href={href}
      target="blank"
      onClick={onClick}
      className={`bg-[#FC4F03] w-full py-2 rounded-full my-3 shadow-lg shadow-[#FC4F03]/50  text-center ${className} `}
    >
      {children}
    </a>
  );
};

export default Button;
