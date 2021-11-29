import React from "react";
import LogoSvg from "assets/svg/logo";
import { Link } from "gatsby";

export default function Header() {
  return (
    <section className="bg-black">
      <div className="text-white font-primary text-md py-px text-right border-b-2 border-headerBorder border-solid md:p-3 hidden md:block h-58">
        <div className="container mx-auto lg:max-w-5xl">
          <span>support@tomedes.com</span>
          <span className="px-2">|</span>
          <span>US: +1 985 239 0142</span>
          <span className="px-2">|</span>
          <span>UK: +44 1615 096140</span>
          <span className="px-2">|</span>
          <span>EN</span>
          <button className="border-solid border-border border py-2 px-6 ml-6 hover:bg-orange">
            Sign In
          </button>
        </div>
      </div>
      <div className="container mx-auto lg:max-w-6xl">
        <div className="lg:flex lg:flex-row lg:items-center lg:p-6 lg:justify-between hidden">
          <div className="flex flex-row content-center items-center">
            <Link to="/">
              <LogoSvg />
            </Link>
            <ul className="uppercase text-white text-sm flex flex-row content-center items-center mx-4 font-primary">
              <li className="px-4 cursor-pointer">What We Do</li>
              <li className="px-4 cursor-pointer">Industries</li>
              <li className="px-4 cursor-pointer">About</li>
              <Link to="/contactus/" className="px-4 cursor-pointer">
                Contact Us
              </Link>
              <Link to="/locations/" className="px-4 cursor-pointer">
                Locations
              </Link>
            </ul>
          </div>
          <a
            href="/"
            className="uppercase rounded-full py-2 bg-orange text-white text-sm cursor-pointer px-6 font-opensans"
          >
            Translate Now
          </a>
        </div>

        <div className="flex flex-row items-center md:py-6 md:px-10 justify-between py-4 px-6 lg:hidden">
          <LogoSvg />
          <div>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white my-2"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
