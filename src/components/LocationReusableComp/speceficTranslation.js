import React from "react";

export default function SpeceficTranslation({backgroundCol , FirstWhite , headColor , ColorHead , SecondWhite , Content , bottomContent , getStarted , moreContent , lastLine}) {
  return (
    <>
      <section className={`${backgroundCol ? backgroundCol :"bg-darkBlue "} py-16`}>
        <div className="max-w-6xl mx-auto  mlap:px-6 ">
          <div className="lap:grid lap:grid-cols-1  ">
            <div className="lap:pr-12 mb-7">
              <h2 className="text-4xl text-gray inline-block md:pr-72 font-bold font-secondary leading-relaxed mb-4 lg:mb-0 ">
                {FirstWhite}{" "}
                <span className={`${headColor}`}>{ColorHead} </span>
                {SecondWhite}
              </h2>
            </div>

            <div className="">
              <p className="text-darkMist text-base leading-8 font-opensans">
                {Content}
              </p>
              {bottomContent ? <p className="text-darkMist text-base mt-6 leading-8 font-opensans">
                {bottomContent}
              </p> : null}
              {moreContent ? <p className="text-darkMist text-base mt-6 leading-8 font-opensans">
                {moreContent}
              </p> : null}
              {lastLine ? <p className="text-darkMist text-base mt-6 leading-8 font-opensans">
                {lastLine}
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
