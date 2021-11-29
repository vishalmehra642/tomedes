import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function ConferenceComp({ selectedLocation }) {
  return (
    <>
      {selectedLocation ? (
        selectedLocation?.map(({ location, happens, readMore }, index) => (
          <div className="border-t border-white  text-left" key={index}>
            <p className="font-primary sm:w-max w-auto pt-6 pb-3 text-white">
              <i className="sm:inline-block inline">{location}</i>
              <span className="block text-sm">{happens}</span>
            </p>
            <Link className="text-lightBlue text-sm" to={readMore}>
              Read more
            </Link>
            <div className="mt-2 mb-4">
              <i to="/">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-lightBlue text-3xl"
                />
              </i>
              <span className="ml-4 bg-white inline-block my-auto py-1 px-2 relative ">
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
        ))
      ) : (
        <h1 className="text-red font-bold">THERE IS NO CONFRENCE</h1>
      )}
    </>
  );
}

export default ConferenceComp;
