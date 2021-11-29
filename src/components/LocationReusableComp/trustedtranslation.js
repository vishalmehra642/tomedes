import React from "react";

export default function TrustedTranslation({backgroundCol , FirstWhite , headColor , ColorHead , SecondWhite , Content , bottomContent , getStarted, lastHeadColor, ThirdBlue}) {
  return (
    <>
      <section className={`${backgroundCol ? backgroundCol :"bg-darkBlue "} py-16`}>
        <div className="max-w-6xl mx-auto  mlap:px-6 ">
          <div className="lap:grid lap:grid-cols-2  ">
            <div className="lap:pr-12">
              <h2 className="text-4xl text-gray font-bold font-secondary leading-relaxed mb-4 lg:mb-0 ">
                {FirstWhite}{" "}
                <span className={`${headColor} `}>{ColorHead} </span>
                {SecondWhite} <span className={`${lastHeadColor}`}>{ThirdBlue} </span> 
              </h2>
            </div>

            <div className="">
              <p className="text-darkMist text-base leading-8 font-opensans">
                {Content}
              </p>
              {bottomContent ? <p className="text-darkMist text-base mt-6 leading-8 font-opensans">
                {bottomContent}
              </p> : null}
              
              {getStarted ? <div className="btn text-white max-w-max hover:text-orange pt-8">
                <a href="/">GET STARTED</a>
                <div className="border-b bg-white"></div> {getStarted}
              </div> : null }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
