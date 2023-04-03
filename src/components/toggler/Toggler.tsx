"use client";
import Link from 'next/link';

import "./toggler.scss";

const Toggler = () => {
  const darkModeHandler = () => {
    document.querySelector("html")?.classList.toggle("dark");
  }

  return (
    <div className='toggler'>
      <div className="toggler__content">
        <h3 className="toggler__content__title">Customize your view</h3>
        <p className="toggler__content__text">
          Menage your font size, color and background. these settings 
          effect all the Twitter account on this browser.
        </p>
        <button className='btn btn-blue xl:w-48' onClick={darkModeHandler}>
          <i className="fa-solid fa-cloud-moon block xl:hidden text-lg"></i>
          <span className="hidden xl:block font-bold">Toggle Dark Mode</span>
        </button>
      </div>
    </div>
  )
}

export default Toggler