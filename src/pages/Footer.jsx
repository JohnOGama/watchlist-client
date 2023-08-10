import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto text-white mt-10 border-t-2 border-stone-600 w-full text-sm mb-4">
      <div className="flex flex-col justify-center items-center mt-4">
        <h1>Made by John Ogama</h1>
        <div className="flex gap-2 mt-2">
          <a href="https://github.com/JohnOGama" target="blank">
            <AiFillGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/johnogama/" target="blank">
            <AiFillLinkedin size={20} />
          </a>
          <a href="https://www.facebook.com/CreatorVayne/" target="blank">
            <AiFillFacebook size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
