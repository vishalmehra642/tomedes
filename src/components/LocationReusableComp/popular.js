import React from "react";
import { Link } from "gatsby";
export default function Popular({
  languageCount,
  details,
  footerTitle,
  footerDetails,
  location,
  data,
  backgroundCol,
  bottomHeading,
  bottomDetails,
  bottomBorderText,
}) {
  return (
    <>
      <section
        className={`${backgroundCol ? backgroundCol : "bg-midBlue"} py-20`}
      >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-center text-gray w-8/12 mx-auto text-4xl font-semibold leading-normal pt-2 mb-3 slap:w-full mlg:w-9/12 slap:px-6 font-secondary ">
            {languageCount}
          </h2>
          <p className="text-center text-darkMist text-base font-secondary md:w-10/12 mtab:px-6 mx-auto pt-5">
            {details}
          </p>
          <div className="border-t border-gray my-8  border-opacity-25 mmd:mx-20 mlg:mx-20 mtab:mx-6  "></div>
          <h3 className="text-2xl text-center font-secondary text-gray mt-10 mb-20 font-semibold mx-6">
            {bottomHeading} {location}
          </h3>
          {bottomDetails ? (
            <p className="text-center text-darkMist text-base font-opensans md:w-10/12 mtab:px-6 mx-auto pt-5 px-2 md:px-24 mb-20 leading-relaxed">
              {bottomDetails}
            </p>
          ) : null}
          <div className=" mt-3 lap:grid grid-cols-2 lap:gap-4">
            {data
              ? data.map(({ heading, detail, link, secondHeading }, index) => (
                  <div
                    className="lap:px-20 pb-10 lap:pb-36 slap:px-6"
                    key={index}
                  >
                    <h3 className="text-orange text-2xl font-secondary font-bold mb-3">
                      {heading}{" "}
                      {secondHeading ? (
                        <span className="text-white">{secondHeading}</span>
                      ) : null}
                    </h3>
                    <p className="text-darkMist font-secondary text-base leading-7 mb-3 lap:pr-4">
                      {detail}
                    </p>
                    <Link
                      to={link}
                      className="text-gray underline  leading-7 hover:text-orange text-lg font-opensans"
                    >
                      GET STARTED
                    </Link>
                  </div>
                ))
              : null}
          </div>
          {bottomBorderText ? (
            <div className="div">
              <div className="border-t border-gray my-8  border-opacity-25  mlg:mx-20 slap:mx-6  "></div>
              <h3 className="text-2xl text-center font-secondary text-gray mt-10 mb-2 font-semibold mx-6">
                {footerTitle ? footerTitle : "Didn’t See Your Language?"}
              </h3>
              <p className="text-center text-darkMist text-base font-opensans mb-12 md:w-10/12 mtab:px-6 mx-auto pt-5">
                {footerDetails
                  ? footerDetails
                  : "If your language isn’t on the list, not to worry--there are over 120 languages to choose from. You’re assured of other languages such as German, Hindi, and Italian. Here’s the list for more options. We are not only known for our popular languages, but also support rare languages."}
              </p>
              <Link
                to="/language-translation-service"
                className="text-gray underline  leading-7 hover:text-orange text-lg text-center block mx-auto mb-7 font-opensans"
              >
                GET STARTED
              </Link>{" "}
              {bottomBorderText}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
