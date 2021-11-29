import { Link } from "gatsby";
import React from "react";

function IndustryComp() {
  return (
    <div className="mainContainer text-white font-primary text-2xl ">
      {/* ------------Banner Section Starts------------ */}
      <div className="bannerImage bg-industry-bg-image bg-no-repeat bg-cover bg-center h-720 -mb-56 2xl:h-904 2xl:-mb-80">
        <div className=" relative top-24 2xl:top-56  ml-0 pl-4 xl:ml-64 2xl:ml-416 laptop:ml-80">
          <div className=" w-full  max-w-max h-4 sm:h-4 md:h-8 mb-32">
            <h1 className=" text-2xl md:text-5xl sm:text-3xl font-medium w-full top-0 inset-x-0 font-primary ">
              Yiddish Translation Causes Spelling Bee <br /> Controversy
            </h1>
          </div>
          <div className="mt-12">
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
      {/* ------------Banner Section Ends------------ */}
      {/* grid grid-cols-1 sm:grid-cols-3 */}
      {/* ------------Text Section Starts------------ */}
      <div className="flex items-center justify-center bg-darkestgray w-full">
        <div className="flex justify-evenly max-w-screen-2xl w-full xl:w-8/12 flex-col md:flex-row">
          <div className="md:w-7/12 w-full px-6 sm:px-0">
            <h3 className=" mt-4 mb-3 text-blackNew-400 font-opensans">
              <i className="text-base">JUN 5, 2013</i>
            </h3>
            <h3 className="mb-5 text-blackNew-400 font-opensans">
              <i className="text-lg">By Ofer Tirosh</i>
            </h3>
            <div className="font-normal text-base tracking-normal font-opensans text-white mb-8">
              <p className="mb-5 ">
                A win in the Scripps National Spelling Bee last week has erupted
                in controversy over the correct spelling of a{" "}
                <Link to="/">
                  <span className="text-lightBlue hover:border-b hover:border-lightBlue">
                    Yiddish
                  </span>
                </Link>{" "}
                word. Arvind Mahankali, a 13 year old New Yorker, took the win
                for his correct spelling of the word "knaidel".
              </p>
              <p className="mb-5">
                But not everyone agrees that the Yiddish word was spelled
                correctly. Mahankali spelled the word correctly according to the
                Merriam-Webster dictionary but the spelling of the word varies
                based on who you ask.{" "}
              </p>
              <p className="mb-5">
                Jack Lebewohl, a New York deli owner explained that there’s no
                clear spelling of the Yiddish word when he said, “There’s no
                real spelling of the word, so who determines how a word is
                spelled?”
              </p>
              <p className="mb-5">
                Others disagree and think that the spelling of a word can be
                standardized but still could not agree on what standardization
                is the correct one.{" "}
              </p>
              <p className="mb-5">
                The Daily Beast predicted this could be an issue for future
                spelling bees when they said, “Competition organizers should
                have thought twice about using Yiddish-derived words into
                high-stakes spelling competitions. Do you call an ineffectual,
                hapless person a schlemiel, a shlemel, a shlemyel, or a
                schlemeyel? Is that mass of cream cheese you put on a bagel a
                schemer or a shmeer? Is a thief a gonif, a goniff, or aganif?
                How about that thing Jews like to spin on Hanukkah (or Chanukkah
                or Chanukah)? It could be a draidel, a draidle, a dreidel, or a
                draydl.”
              </p>
              <p className="mb-5">
                Controversy such as this just emphasizes the importance of
                professional translations for important matters, such as Tomedes
                translation services.
              </p>
              <p className="mb-5">
                The full story about the Scripps Spelling Bee translation
                controversy along with photos from the spelling bee can be found{" "}
                <Link to="/">
                  <span className="text-lightBlue">online.</span>
                </Link>
              </p>
            </div>
            <h1 className="text-lightBlue mb-8">Related News</h1>
            <ul className="list-disc text-lg font-normal font-opensans list-inside">
              <li className="mb-4">
                International Translation Day 2019: Year Of Indigenous Languages
              </li>
              <li className="mb-4">
                International Translation Day 2019: Year Of Indigenous Languages
              </li>
              <li className="mb-4">
                Dictionary.com Is Now Bigger And Better For Ipad
              </li>
              <li className="mb-4">
                Samoan Dictionary Is Overdue For An Update
              </li>
              <li className="mb-4">It Tech Lingo Is Lost In Translation</li>
            </ul>
          </div>
          {/* why choose us */}
          <div className="md:w-1/4 w-full md:mt-36 mt-11 sm:border-l sm:border-white sm:pl-6 h-2/3">
            <h1 className="text-lightBlue text-3xl mt-10  pb-8 font-primary text-center sm:text-left">
              Why choose us
            </h1>
            <div className="sm:w-9/12 text-center mb-7">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/24-7-human-support.svg"
                alt=""
                className="m-auto inline-block w-20"
              />
              <p className="text-lg font-primary text-white mt-4">
                24/7 Human Support
              </p>
            </div>
            <div className="sm:w-9/12 text-center mb-7">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/quality-guaranteed-color.svg"
                alt=""
                className="m-auto inline-block w-20"
              />
              <p className="text-lg font-primary text-white mt-4">
                1 Year Guarantee
              </p>
            </div>
            <div className="sm:w-9/12 text-center mb-7">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/50000-business.svg"
                alt=""
                className="m-auto inline-block w-20"
              />
              <p className="text-lg font-primary text-white mt-4">
                95,000 Business Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------Text Section Ends------------ */}
    </div>
  );
}

export default IndustryComp;
