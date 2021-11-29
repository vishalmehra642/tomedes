import React from "react";

export default function CaseStudies() {
  return (
    <section className="bg-darkBlue py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary leading-10">
          <span className="text-lightBlue">Case</span> Studies
        </h2>
        <p className="text-lightGray font-opensans text-sm text-center py-4 leading-8 px-10">
          Here are just a few case studies of some of our recent translation
          projects:
        </p>

        <div className="xl:w-93 lg:w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:w-10/12 lg:w-full mx-auto">
            <div className="p-4 ">
              <a
                href="/"
                className="relative h-560 c-card block bg-cardColor overflow-hidden border-solid border border-blackNew-500 font-opensans"
              >
                <div className="relative  overflow-hidden">
                  <img
                    className=" h-full w-full object-cover"
                    src="https://skins.tomedes.com/CustomerLogo/japan-2014616-004_5-5-20_08-19-28.jpeg"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block py-1 leading-none text-blackGray uppercase tracking-wide text-xs">
                    MAY 5, 2020
                  </span>
                  <h2 className="mt-2 mb-2 font-secondary font-medium text-gray text-lg">
                    Professional Business Translation by Tomedes
                  </h2>
                  <p className="text-sm font-opensans text-textgray leading-7">
                    While the COVID-19 pandemic has turned the way we live
                    upside down, not every business has ground to a halt.
                    Indeed, companies in certain sectors have been busier than
                    ever.
                  </p>
                </div>
                <div className="p-4 text-xs absolute bottom-0 text-gray">
                <span className=" mb-1 text-sm text-gray underline  inline-block leading-7 hover:text-orange">
                  LEARN MORE
                  </span>
                </div>
              </a>
            </div>

            <div className="p-4 ">
              <a
                href="/"
                className="relative h-560  c-card block bg-cardColor overflow-hidden border-solid border border-blackNew-500 font-opensans"
              >
                <div className="relative  overflow-hidden">
                  <img
                    className=" h-full w-full object-cover"
                    src="https://skins.tomedes.com/CustomerLogo/French_28-4-20_04-41-14.jpeg"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block py-1 leading-none text-blackGray uppercase tracking-wide text-xs">
                    APR 28, 2020
                  </span>
                  <h2 className="mt-2 mb-2 font-secondary font-medium text-gray text-lg">
                    Professional Website Localization from Tomedes
                  </h2>
                  <p className="text-sm font-opensans text-textgray leading-7">
                    The COVID-19 pandemic has given rise to a huge range of
                    translation and localization requests over the past few
                    weeks.
                  </p>
                </div>
                <div className="p-4 text-xs absolute bottom-0 text-gray">
                <span className=" mb-1 text-sm text-gray underline  inline-block leading-7 hover:text-orange">
                  LEARN MORE
                  </span>
                </div>
              </a>
            </div>

            <div className="p-4 ">
              <a
                href="/"
                className="relative h-560  c-card block bg-cardColor overflow-hidden border-solid border border-blackNew-500 font-opensans"
              >
                <div className="relative  overflow-hidden">
                  <img
                    className=" h-full w-full object-cover"
                    src="https://skins.tomedes.com/CustomerLogo/Medical_2-6-20_09-04-01.jpeg"
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block py-1 leading-none text-blackGray uppercase tracking-wide text-xs">
                    JUN 2, 2020
                  </span>
                  <h2 className="mt-2 mb-2 font-secondary font-medium text-gray text-lg">
                    Professional German Translation by Tomedes
                  </h2>
                  <p className="text-sm font-opensans text-textgray leading-7">
                    The medical translation and interpretation team here at
                    Tomedes has rarely been so busy. Clients around the world
                    are in need of fast, accurate medical translation services
                    as they race to respond to the challenges posed by the
                    COVID-19 pandemic.
                  </p>
                </div>
                <div className="p-4 text-xs absolute bottom-0 text-gray">
                  <span className=" mb-1 text-sm text-gray underline  inline-block leading-7 hover:text-orange">
                  LEARN MORE
                  </span>
                </div>
              </a>
            </div>
          </div>
          <p
            className="text-lightGray font-opensans text-md text-center uppercase underline mt-8 cursor-pointer"
            style={{ textUnderlinePosition: "under" }}
          >
            View All Case Studies
          </p>
        </div>
      </div>
    </section>
  );
}
