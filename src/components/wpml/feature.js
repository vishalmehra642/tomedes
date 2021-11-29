import React from "react";
import { featureData } from "components/wpml/config";
function Feature() {
  return (
    <div className="flex items-center justify-center bg-darkBlue py-16 text-white">
      <div className="grid grid-cols-1 max-w-screen-2xl ">
        <div className="w-full m-auto relative ">
          <img
            src="https://skins.tomedes.com/frontend/images/wpml/WPML_Features_1.svg"
            alt=""
            className="block m-auto"
          />
          <h1 className="absolute md:text-7xl text-3xl w-full m-auto font-bold leading-snug text-white text-center top-4">
            <span className="text-orange">WPML</span> FEATURES
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-8/12 m-auto">
          {featureData
            ? featureData?.map(
                ({ heading, subheading, para, imageClass }, index) => (
                  <div
                    className="md:my-8 my-4 lg:px-10 md:px-14 px-10 py-10"
                    key={index}
                  >
                    <div className={imageClass}>&nbsp;</div>
                    <h1 className="text-2xl  my-6">
                      <span className="text-orange font-semibold">
                        {" "}
                        {heading}{" "}
                      </span>
                      {subheading}
                    </h1>
                    <p className="text-lightwhite xl:pr-14 md:pr-8 sm:pr-10 leading-7">
                      {para}
                    </p>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </div>
  );
}

export default Feature;
