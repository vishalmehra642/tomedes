import React from "react";
import { Link } from "gatsby";

export default function CommonUse({
  title,
  para,
  data,
  backgroundCol,
  bottomBorderText,
  BBH,
  BBC,
}) {
  return (
    <>
      <section
        className={`${backgroundCol ? backgroundCol : "bg-darkBlue"} pt-20`}
      >
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-center text-gray w-7/12 mx-auto  text-4xl font-semibold leading-normal pt-2 mb-3 slap:w-full mlg:w-9/12 slap:px-6 font-secondary">
            {title}
          </h2>
          <p className="text-center text-darkMist text-base font-opensans md:w-9/12 mtab:px-6 mx-auto pt-5">
            {para}
          </p>
          <div className="border-t border-gray mt-8 mb-20 border-opacity-25 mmd:mx-20 mlg:mx-20 mtab:mx-6  "></div>
          {bottomBorderText ? (
            <div className="div">
              <h3 className="text-2xl text-center font-secondary text-gray mt-10 mb-2 font-semibold mx-6">
                {BBH}
              </h3>
              <p className="text-center text-darkMist text-base font-opensans mb-12 md:w-10/12 mtab:px-6 mx-auto pt-5">
                {BBC}
              </p>
              {bottomBorderText}
            </div>
          ) : null}
          <div className="lap:grid grid-cols-2 lap:gap-4">
            {data
              ? data.map(({ title, detail, link, subTitle }) => (
                  <div className="lap:px-20 pb-10 lap:pb-28 slap:px-6">
                    <h3 className="text-orange text-2xl font-secondary font-bold mb-3">
                      {title}{" "}
                      <span className="text-white">
                        {subTitle ? subTitle : null}
                      </span>
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
        </div>
      </section>
    </>
  );
}
