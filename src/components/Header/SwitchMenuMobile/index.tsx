"use client"
import MenuMobile from "../MenuMobile";
import { useState } from "react";
import "./style.css";

const SwitchMenuMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label onClick={() => setIsOpen(prev => !prev)} className="hamburger cursor-pointer md:hidden">
        <input
          type="checkbox"
          className="hidden"
          checked={isOpen}
          onChange={() => setIsOpen(prev => !prev)}
        />
        <svg
          viewBox="0 0 32 32"
          className="h-12 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
          <path
            className="line line-top-bottom stroke-darkScheme-primary stroke-white stroke-2 fill-none stroke-round transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path
            className="line stroke-darkScheme-primary stroke-white stroke-2 fill-none stroke-round transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            d="M7 16 27 16"
          ></path>
        </svg>
      </label>

      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />


    </>
  );

};

export default SwitchMenuMobile;
