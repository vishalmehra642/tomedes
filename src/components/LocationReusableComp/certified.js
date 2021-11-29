import React from "react";

export default function CertifiedLocation({
  fTitle,
  sTitle,
  para,
  backgroundCol,
  tTitle,
  paraB
}) {
  return (
    <>
      <section
        className={`${backgroundCol ? backgroundCol : "bg-midBlue"} py-16`}
      >
        <div className="max-w-6xl mx-auto  mlap:px-6 ">
          <div className="lap:grid lap:grid-cols-2  ">
            <div className="lap:pr-12">
              <h2 className="text-4xl text-gray font-bold font-secondary leading-relaxed mb-4 lg:mb-0 ">
                <span className="text-white">{fTitle}</span>{" "}
                <span className="text-lightBlue">{sTitle}</span>{" "}
                <span className="text-white">{tTitle}</span>
              </h2>
            </div>
            <div className="">
              <p className="text-gray text-base leading-8 font-opensans">
                {para}
              </p>
              <p className="text-gray text-base leading-8 font-opensans">
                {paraB}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
