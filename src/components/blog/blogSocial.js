import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
function BlogSocial() {
  return (
    <>
      <div className="sm:w-full   py-10 m-auto mt-4">
        <h1 className="text-2xl text-bold mb-6 font-medium tracking-widest">
          FOLLOW US
        </h1>
        <Link to="/">
          <span className="inline-flex font text-center mr-4  hover:bg-orange hover:text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-2xl  inline-block m-auto "
            />
          </span>
        </Link>
        <Link to="/">
          <span className="inline-flex font text-center mr-4  hover:bg-orange hover:text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-2xl  inline-block m-auto "
            />{" "}
          </span>
        </Link>
        <Link to="/">
          <span className="inline-flex font text-center mr-4  hover:bg-orange hover:text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-2xl  inline-block m-auto "
            />{" "}
          </span>
        </Link>
        <Link to="/">
          <span className="inline-flex font text-center hover:bg-orange hover:text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-2xl  inline-block m-auto"
            />{" "}
          </span>
        </Link>
      </div>
    </>
  );
}
export default BlogSocial;
