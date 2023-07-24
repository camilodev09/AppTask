import React from "react";
import {  FaGlobe ,FaGithub} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        "Step by step until building the imposible". <br /> Programming has no
        limits!
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/camilodev09"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaGithub />
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
