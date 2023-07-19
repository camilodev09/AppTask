import React from "react";
import {  FaGlobe , } from "react-icons/fa";

import { AiOutlineCodepenCircle } from "react-icons/ai";

import {SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        "Step by step until building the imposible" <br /> Programming has no
        limits!
      </p>
      <div className="flex justify-center gap-2 mt-3">
        {/*
         <a
          href="https://www.upwork.com/freelancers/~01b7ee61ef71b8940b"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <SiUpwork />
          </span>
        </a>
        */}

<a
          href="https://codepen.io/camilodev09"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <AiOutlineCodepenCircle/>
          </span>
        </a>


        <a
          href="https://www.creazone.pe"
          target="_blank"
          rel="noreferrer"
        >
           <span className="footerIcon">
             <FaGlobe />
           </span>
        </a>

      </div>
    </div>
  );
};

export default Footer;
