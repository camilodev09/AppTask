import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        "Step by step until building the imposible" <br /> Programming has no
        limits!
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/noorjsdivs"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaGithub />
          </span>
        </a>

        <span className="footerIcon">
          <FaGlobe />
        </span>
      </div>
    </div>
  );
};

export default Footer;
