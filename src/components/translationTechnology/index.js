import React from "react";
import FirstCardImage from "assets/images/memoq.svg";
import SecondCardImage from "assets/images/sdl_trados.svg";
import ThirdCardImage from "assets/images/madcapsoftware.svg";
import FourthCardImage from "assets/images/poedit.svg";
import FifthCardImage from "assets/images/smartling.svg";
import SixthCardImage from "assets/images/crowdin.svg";
import { BusinessesAndOrganizations } from "components/our-customers/config";

import GetStarted from "components/getStarted";

export default function index() {
  return (
    <>
      <div className="mainContainer text-white font-primary text-2xl">
        {/* --------------------Banner Section Start--------------------   */}

        <div className="bannerImage bg-translation-banner bg-no-repeat h-screen bg-cover bg-center  2xl:-mb-80 xl:-mb-28 -mb-28 -mt-4">
          <div className="flex items-center justify-start">
            <div className=" relative top-24 2xl:top-56 pl-4 lg:ml-0 2xl:ml-536 xl:ml-300 max-w-sceen-2xl laptop:ml-416 fourK:ml-548">
              <div className=" w-full bg-contact-img max-w-max h-4 sm:h-4 md:h-6 lg:h-9">
                <h1 className=" text-xl md:text-5xl lg:text-6xl sm:text-3xl font-medium w-full top-0 inset-x-0 font-riot ">
                  Translation and technology
                </h1>
              </div>
              <div className="blackStrip md:w-full text-xl mx-auto mt-16 ">
                <div className="keyHighlights1 block sm:inline-block bg-black-strip mr-6 sm:mr-0">
                  <img
                    src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                    alt=""
                    className="w-5 inline-block mx-2 "
                  />
                  <span>24/7 Human Support</span>
                </div>
                <div className="keyHighlights1 block sm:inline-block font-primary bg-black-strip mr-6 sm:mr-0">
                  <img
                    src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                    alt=""
                    className="w-5 inline-block mx-2"
                  />
                  <span>1 Year Guarantee</span>
                </div>
                <div className="keyHighlights1 block sm:inline-block font-primary bg-black-strip mr-6 sm:mr-0">
                  <img
                    src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                    alt=""
                    className="w-5 inline-block mx-2"
                  />
                  <span>95,000 Business Customers</span>
                </div>
              </div>
              <div className="mt-2 md:mt-12">
                <div className="grid grid-cols-1 py-6 space-y-6 text-center md:flex md:flex-row md:align-baseline md:items-center md:space-x-6 md:space-y-0 font-opensans">
                  <a
                    href="/"
                    className="uppercase rounded-full py-3 bg-orange text-gray text-sm cursor-pointer w-60  font-semibold font-primary"
                  >
                    Translate Now
                  </a>
                  <a
                    href="/"
                    className="uppercase rounded-full bg-white py-3 text-black text-sm  cursor-pointer w-60 font-semibold font-primary"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------Banner Section End--------------------   */}

        {/* --------------------Text Section Start--------------------   */}

        <div className=" bg-darkestgray text-white font-primary text-2xl py-10">
          <div className="divWidth  flex flex-col flex-wrap justify-center m-auto px-4 w-full xl:w-7/12">
            <div className="top pt-16">
              <div className="blueImageText relative bg-contact-img h-8 sm:h-6 max-w-sm  md:h-8 mb-16 w-full sm:w-6/12 flex m-auto justify-center">
                <h1 className="text-4xl font-medium w-full text-center  py-3 top-0 inset-x-0 ">
                  Our Technology Tools
                </h1>
              </div>

              <p className="font-light pt-8">
                Here at Tomedes, we hand-pick our translators for each project,
                based on their language skills and areas of expertise. Our
                translators utilize a wide range of programs and technologies to
                tailor their work to the client's needs – CAT (computer-assisted
                translation) tools, website and app localization platforms,
                design and DTP software, subtitling tools, and more.
              </p>

              <p className="font-light py-2">
                The combination of tried-and-true translation technologies and
                human expertise and experience allows us to provide
                comprehensive, in-house language solutions, oversee complex
                localization projects, translate from a wide range of media and
                file types, and use APIs to communicate with our clients'
                systems.
              </p>

              <p className="font-light py-2">
                By employing cutting-edge technologies, we are able to cut
                translation costs, shorten delivery times, and enhance
                translation quality.
              </p>
            </div>
          </div>
        </div>
        {/* --------------------Text Section End--------------------   */}

        {/* --------------------Cards Container Start--------------------   */}

        <div className="cardsContainer bg-cardGray font-primary pt-28 px-4">
          <div className=" flex flex-wrap xl:w-7/12 justify-center m-auto">
            <div className="firstRow flex flex-col md:flex-row md:justify-between justify-center m-auto">
              <div className="firstCard md:w-2/5 w-full py-12 md:py-0">
                <div className="Logo1 card border border-black rounded-lg bg-black p-10 h-32 relative">
                  <img
                    src={FirstCardImage}
                    alt=""
                    className="m-auto w-64 inset-x-0 inset-y-10 absolute"
                  />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">MemoQ – Translation</h1>
                  <p className="text-lightwhite text-xl font-light">
                    MemoQ is a common CAT tool used by many professional
                    translators, language service providers, and localization
                    companies worldwide. MemoQ earned its reputation as an
                    industry favorite thanks to a streamlined workflow designed
                    to expedite the translation process.
                  </p>
                </div>
              </div>

              <div className="secondCard md:w-2/5 w-full  py-12 md:py-0">
                <div className="Logo2 card border border-black rounded-lg bg-black p-10 h-32">
                  <img src={SecondCardImage} alt="" className="m-auto w-56" />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">
                    SDL Trados – Translation
                  </h1>
                  <p className="text-lightwhite text-xl font-light">
                    SDL Trados is a leading translation tool that provides a
                    comprehensive suite of utilities for independent
                    translators, translation agencies, corporate translation
                    departments, and academic bodies. SDL Trados guides the user
                    through all stages of the translation process, from
                    big-picture project administration and glossary management
                    to proofreading, editing, and building a Translation Memory.
                  </p>
                </div>
              </div>
            </div>

            <div className="secondRow flex flex-wrap justify-between py-8">
              <div className="thirdCard md:w-2/5 w-full py-12 md:py-0">
                <div className="Logo3 card border border-black rounded-lg bg-black p-10 h-32 relative">
                  <img
                    src={ThirdCardImage}
                    alt=""
                    className="m-auto w-64 absolute inset-x-0 inset-y-10"
                  />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">MadCap – Translation</h1>
                  <p className="text-lightwhite text-xl font-light">
                    MadCap Flare is a professional content editing tool that can
                    export to a wide range of file types and frameworks, such as
                    .docx, HTML5, .pdf, .NET, and others
                  </p>
                </div>
              </div>
              <div className="fourthCard md:w-2/5 w-full py-12 md:py-0">
                <div className="Logo4 card border border-black rounded-lg bg-black relative p-10 h-32">
                  <img
                    src={FourthCardImage}
                    alt=""
                    className="m-auto w-20 absolute inset-x-0 inset-y-10"
                  />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">
                    Poedit – Translation & Localization
                  </h1>
                  <p className="text-lightwhite text-xl font-light">
                    A widely popular tool for translating .po files, used for
                    localizing gettext-based apps and websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="thirdRow flex flex-wrap justify-between py-8">
              <div className="fifthCard md:w-2/5 w-full py-12 md:py-0">
                <div className="Logo5 card border border-black rounded-lg bg-black p-10 h-32">
                  <img src={FifthCardImage} alt="" className="m-auto w-64" />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">
                    Smartling – Translation & Localization
                  </h1>
                  <p className="text-lightwhite text-xl font-light">
                    Smartling is a cloud platform for managing complex
                    localization projects. Smartling enables users to translate
                    websites, apps, and information systems quickly and
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="sixthCard md:w-2/5 w-full py-12 md:py-0">
                <div className="Logo6 card border border-black rounded-lg bg-black p-10 h-32">
                  <img src={SixthCardImage} alt="" className="m-auto w-64" />
                </div>
                <div className="text pt-6">
                  <h1 className="text-white text-2xl">
                    Crowdin – Translation & Localization
                  </h1>
                  <p className="text-lightwhite text-xl font-light">
                    Crowdin is a translation and localization management
                    platform for mobile apps, websites, software, and
                    information systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------Cards Container End--------------------   */}

        {/* --------------------Additional Tool Card Start--------------------   */}

        <div className="mainCont flex flex-col bg-darkestgray py-16 ">
          <div className="blueImageText relative bg-contact-img h-6  md:h-8 mb-16 sm:w-6/12 max-w-sm flex m-auto justify-center ">
            <h1 className="text-4xl font-medium w-full text-center  py-3 top-0 inset-x-0">
              Additional Tools
            </h1>
          </div>

          <div className="flex items-center justify-center w-full lg:w-full xl:w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 ">
              {BusinessesAndOrganizations
                ? BusinessesAndOrganizations?.slice(0, 6).map(
                    ({ url }, index) => (
                      <div
                        className="bg-cardGray w-52 h-56 flex items-center justify-center rounded-lg"
                        key={index}
                      >
                        <img src={url} alt="img" className="w-28 block m-4" />
                      </div>
                    )
                  )
                : null}
            </div>
          </div>
        </div>
        {/* --------------------Additional Tool Card End--------------------   */}

        <GetStarted />
      </div>
    </>
  );
}
