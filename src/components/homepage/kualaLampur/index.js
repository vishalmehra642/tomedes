import React, { useState } from "react";
import Bussiness from "assets/images/business.png";
import customerSupport from "assets/images/customer-support.png";
import Guarantee from "assets/images/guarantee.png";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Index() {
  const [style, setStyle] = useState({ visibility: "hidden" });

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        {/* upper component start */}
        <div className="bg-banner-image h-52 bg-cover bg-center bg-no-repeat w-full">
          {/* <img src={HeadImage} alt="" className="h-full" /> */}
        </div>
        {/* upper component ends */}
        {/* bottom component starts */}
        <div className="flex items-center justify-center bg-darkestgray w-full">
          <div className="flex justify-evenly max-w-screen-2xl w-full xl:w-8/12 flex-col md:flex-row">
            <div className="md:w-7/12 w-full px-6 sm:px-0">
              <h1 className="text-lightBlue text-2xl font-bold pt-14 pb-8">
                The 7th Asian Translation Traditions Conference
              </h1>
              <div className="border-t border-white  text-left">
                <div className="mt-4">
                  <h1 className="inline font-primary text-xl text-blackNew-300">
                    <i>
                      Kuala Lumpur, Malaysia , Malaysia. | 26.09.2016 -
                      30.09.2016
                    </i>
                  </h1>
                  <div
                    className="right inline-flex items-center sm:pl-3 pr-6"
                    onMouseEnter={(e) => {
                      setStyle({ visibility: "unset" });
                    }}
                    onMouseLeave={(e) => {
                      setStyle({ visibility: "hidden" });
                    }}
                  >
                    <div className="inline-block mb-4">
                      <Link to="/">
                        <FontAwesomeIcon
                          icon={faShareAlt}
                          className="text-lightBlue text-3xl"
                        />
                      </Link>
                      <span
                        className="ml-4 bg-white inline-block  py-1 px-2 relative "
                        style={style}
                      >
                        <Link to="/">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-facbook  text-3xl rounded-full mr-2"
                          />
                        </Link>
                        <Link to="/">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-linkdein text-3xl rounded-full mr-2"
                          />
                        </Link>
                        <Link to="/">
                          <FontAwesomeIcon
                            icon={faTwitterSquare}
                            className="text-twitter text-3xl rounded-full"
                          />
                        </Link>
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className="text-white absolute -left-2.5 text-3xl"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <img
                    src="	https://www.tomedes.com/skin/frontend/images/conference/01152016011700_download%20(2).png"
                    alt=""
                    className="inline-block height-min-content"
                  />
                  <span className="md:pl-8 pl-0 font-primary text-white font-thin md:mt-0 mt-4">
                    This conference seeks to interrogate the role of translators
                    in, and of, Asia as participants in, and commentators on, a
                    changing world. Translators minimise or break down barriers
                    between the ‘I’, ‘you’, ‘we’ and ‘Other’, and in doing so,
                    create inclusive local, regional and global experiences and
                    life trajectories for consumers of linguistic and cultural
                    artefacts. Yet, translation can also be an exclusive
                    process: decisions about what is translated, how and for
                    whom, have far-reaching implications for the inclusion and
                    exclusion of certain communities and/or stakeholders,
                    simultaneously empowering some and disempowering others.
                  </span>
                </div>
                <p className="font-primary text-white font-thin mt-10">
                  Keynote Speakers: Li Wei, Vicente L. Rafael and Ronit Ricci
                </p>
                <Link
                  to="/"
                  className="font-primary text-lightBlue block  mt-10 font-thin"
                >
                  For More Information
                </Link>
              </div>
            </div>
            {/* why choose us */}
            <div className="md:w-1/4 w-full md:mt-16 mt-11 sm:border-l sm:border-white sm:pl-6 h-2/3">
              <h1 className="text-lightBlue text-3xl  pb-8 font-primary text-center sm:text-left">
                Why choose us
              </h1>
              <div className="sm:w-9/12 text-center mb-7">
                <img
                  src={customerSupport}
                  alt=""
                  className="m-auto inline-block"
                />
                <p className="text-lg font-primary text-white mt-4">
                  24/7 Human Support
                </p>
              </div>
              <div className="sm:w-9/12 text-center mb-7">
                <img src={Guarantee} alt="" className="m-auto inline-block" />
                <p className="text-lg font-primary text-white mt-4">
                  1 Year Guarantee
                </p>
              </div>
              <div className="sm:w-9/12 text-center mb-7">
                <img src={Bussiness} alt="" className="m-auto inline-block" />
                <p className="text-lg font-primary text-white mt-4">
                  95,000 Business Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* bottom component ends */}
      </div>
    </>
  );
}
