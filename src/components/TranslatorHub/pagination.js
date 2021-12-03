import React from "react";
import { Link } from "gatsby";

function Pagination({ notes, postPerPage, currentPage, setCurrentPage }) {
  const buttonNumber = [];
  for (let i = 1; i <= Math.ceil(notes.length / postPerPage); i++) {
    buttonNumber.push(i);
  }

  const goToNextPage = (number) => {
    window.scrollTo(0, 0);
    setCurrentPage(number);
  };

  return (
    <>
      <div className=" text-2xl text-center sm:w-10/12 w-full mt-5 mb-10 font-primary text-newGray mx-auto">
        {buttonNumber
          ? buttonNumber.map((number, index) => (
              <p
                className="mr-4 hover:text-lightBlue cursor-pointer md:mr-7 inline-block"
                key={index}
              >
                <span onClick={() => goToNextPage(number)}>{number}</span>{" "}
              </p>
            ))
          : null}

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
