import React from "react";
import LogoWpml from "assets/images/wpml-logo.png";
function Wpmlwordpress() {
  return (
    <>
      <div className="flex items-center justify-center wpmlarea ">
        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2  xl:w-4/6 w-full m-auto py-16 max-w-screen-2xl">
          <div className="p-6">
            <h1 className="text-4xl font-bold leading-snug mb-8 pb-8 text-white">
              Seamless Wordpress <br />
              Translations with <span className="text-orange">WPML</span>
            </h1>
            <span className="w-11/12  bg-orange h-px block mb-9"></span>
            <p className="leading-relaxed text-lightwhite tracking-wide">
              Fast and reliable professional website translation services with
              WPML. Shopping around for translation providers? Click the link
              below to get a free quote.
            </p>
            <div className="my-10">
              <a
                href="/"
                className="uppercase rounded-full py-2 bg-orange text-gray text-sm cursor-pointer px-6 "
              >
                Translate Now
              </a>
            </div>
          </div>
          <div className="block m-auto ">
            <img src={LogoWpml} alt="" className="sm:p-0 px-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wpmlwordpress;
