import React from "react";
import { Link } from "gatsby";
function Pagination() {
  return (
    <>
      <div className=" text-2xl text-center sm:w-10/12 w-full mt-5 mb-10 font-primary text-newGray mx-auto">
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">1</Link>
        </span>{" "}
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">2</Link>
        </span>{" "}
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">3</Link>
        </span>{" "}
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">...</Link>
        </span>{" "}
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">51</Link>
        </span>
        <span className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7">
          <Link to="/">
            <img
              src="https://skins.tomedes.com/frontend/images/hub_busi/arrow-next.png"
              alt="arrow"
              className="ml-6 inline"
            />
          </Link>
        </span>
        <span className=" hover:text-lightBlue cursor-pointer">
          <Link to="/">
            <img
              src="https://skins.tomedes.com/frontend/images/hub_busi/arrow-next.png"
              alt="arrow"
              className="ml-6 inline"
            />
            <img
              src="https://skins.tomedes.com/frontend/images/hub_busi/arrow-next.png"
              alt="arrow"
              className="inline"
            />
          </Link>
        </span>
      </div>
    </>
  );
}
export default Pagination;
