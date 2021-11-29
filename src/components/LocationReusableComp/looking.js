import React from "react";
import { Link } from "gatsby";
export default function LookingTranslator({translationAt , detail , location , countryName, backgroundCol, picture}) {
  return (
    <>
      <section className={`${backgroundCol ? backgroundCol : "bg-midBlue"} py-16`}>
        <div className="max-w-6xl mx-auto mlap:px-6">
          <div className="lap:grid lap:grid-cols-2">
            <div className="">
              <h2 className="text-gray text-4xl font-semibold font-secondary leading-normal mb-3">
                <span className="text-orange">Looking</span> {translationAt}
              </h2>
              <p className="text-darkMist font-secondary text-base leading-loose">
               {detail}
              </p>
              <Link
                to="/blog"
                className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
              >
                contact us
              </Link>
            </div>
            <div>
              {/* <div className="w-2/3  float-right"> */}
              <div className="lap:pl-48">
                <img
                  src={picture}
                  alt="atlanta"
                />
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 mmd:gap-16 mt-24">
            <div className="">
              <h4 className="text-2xl font-secondary text-gray font-semibold">
                {" "}
                <span className="text-orange">{location}</span> Translation Office
              </h4>

              <div className="border-t border-gray mt-8 md:mb-20 mtab:mb-10  border-opacity-25">
                <p className="text-darkMist text-base leading-loose pt-5">
                  Tomedes Ltd.
                  <br /> <span className="uppercase">{location}, {countryName}</span>
                </p>
              </div>
            </div>
            <div className=" lap:pl-48">
              <h4 className="text-2xl font-secondary text-gray font-semibold">
                {" "}
                <span className="text-orange">Contact </span> Us Anytime
              </h4>
              <div className="border-t border-gray mt-8 md:mb-20 mtab:mb-0 border-opacity-25">
                <p className="text-darkMist text-base leading-loose pt-5">
                  +1 985 239 0142
                  <br /> support@tomedes.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
