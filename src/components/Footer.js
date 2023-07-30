import React from "react";
import {  FaGlobe , FaFacebook, FaTiktok, } from "react-icons/fa";
import {  BsWhatsapp } from "react-icons/bs";



const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        "Step by step until building the imposible". <br /> Programming has no
        limits!
      </p>
      <div className="flex justify-center gap-2 mt-3">
     
            <a href='https://www.facebook.com/profile.php?id=100065758831949' >
            <span className="bannerIcon dark:text-gray-100  text-gray-500">
              <FaFacebook size={30} />
            </span>
            </a>
            
            <a href="https://www.tiktok.com/@creazone.pe">
            <span className="bannerIcon dark:text-gray-100  text-gray-500 ">
              <FaTiktok size={30} />
            </span>
            </a>

             <a href="https://api.whatsapp.com/send?phone=51966301171&text=Deseo%20más%20información.%20Estoy%20interesado.">
            <span className="bannerIcon dark:text-gray-100  text-gray-500">
              <BsWhatsapp size={30} />
            </span>
            </a>

        <a
          href="https://www.creazone.pe"
          target="_blank"
          rel="noreferrer"
        >
           <span className="footerIcon">
             <FaGlobe  size={30} />
           </span>
        </a>

      </div>
    </div>
  );
};

export default Footer;
