import React from "react";
import { Link } from "gatsby";
export default function PopularGrid({languageCount ,details , location , data ,  titleColor ,backgroundCol  ,bottomHeading , bottomDetails, bottomBorderText}) {
  return (
    <>
      <section className={`${backgroundCol ? backgroundCol : "bg-midBlue"} py-20`}>
        <div className="max-w-6xl mx-auto ">
            <div>
          <h2 className="text-center md:text-left text-gray w-8/12 xl:pl-0 sm:pl-10 md:pr-36 mr-auto text-4xl font-semibold leading-normal pt-2 mb-3 slap:w-full mlg:w-9/12 slap:px-6 font-secondary ">
            {languageCount}{" "}<span className={`${titleColor ? titleColor : "text-orange"}`}>{location}</span>
          </h2>
          {details ? <p className="text-center text-darkMist text-base font-secondary md:w-10/12 mtab:px-6 mx-auto pt-5">
            {details}
          </p> : null}
          
          <div className="border-t border-gray my-8  border-opacity-25 mmd:mx-20 mlg:mx-20 mtab:mx-6  "></div>
          {bottomHeading ?  <h3 className="text-2xl text-center font-secondary text-gray mt-10 mb-20 font-semibold mx-6">
            {bottomHeading}{' '}{location}
          </h3> : null}
         
        {bottomDetails ?  <p className="text-center text-darkMist text-base font-opensans md:w-10/12 mtab:px-6 mx-auto pt-5 px-2 md:px-24 mb-20 leading-relaxed">{bottomDetails}</p> : null} 
          <div className=" mt-3 lap:grid grid-cols-1 lap:gap-4">
            {
              data ? data.map(({heading , detail , link ,secondHeading} , index) => (
                <>
                <div className="lap:px-20 pb-3 lap:pb-16 slap:px-6 grid grid-cols-1 lg:grid-cols-2" key={index}>
                <h3 className={`text-orange text-2xl font-secondary font-bold mb-3`}>
                  {heading}{" "}{secondHeading ? <span className="text-white">{secondHeading}</span> : null}
                </h3>
                <div>
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
              </div>
                <div className="border-t border-gray my-8  border-opacity-25 mmd:mx-20 mlg:mx-20 mtab:mx-6  "></div>
                </>
              )) : null
            }
          </div>
          {bottomBorderText ? <div className="div grid grid-cols-1 lg:grid-cols-2">
          <h3 className="md:text-3xl text-2xl pl-2 md:pl-12 text-center md:text-left font-secondary text-gray mt-10 mb-2 pr-4 md:pr-20 font-semibold mx-6">
          Didn’t see the service you were looking for?
          </h3>
          <div>
          <p className="text-center md:text-left text-darkMist text-base font-opensans mb-12 md:w-10/12 mtab:px-6 pl-5 pt-5">
          If you didn’t see the service you were looking for, we offer a host of translation services for the London area. This includes website, app, and game localisation, marketing translation, and more. Just reach out to us to learn more.
          </p>
          <Link
            to="/language-translation-service"
            className="text-gray underline pl-5  leading-7 hover:text-orange text-lg text-left block mx-auto mb-7 font-opensans"
          >
            GET STARTED
          </Link> {bottomBorderText}
          </div>
          </div> : null }
          </div>
        </div>
      </section>
    </>
  );
}
