import React, { useState } from "react";
import BusinessOrg from "components/our-customers/businessOrg";
import LawFinance from "./lawFinance";
import HighTech from "./highTech";
import Academy from "components/our-customers/academy";
import Apps from "./apps";

function Customers() {
  const [linkOne, setLinkOne] = useState(true);
  const [linkTwo, setLinkTwo] = useState(false);
  const [linkThree, setLinkThree] = useState(false);
  const [linkFour, setLinkFour] = useState(false);
  const [linkFive, setLinkFive] = useState(false);

  const handleLinkOne = () => {
    setLinkOne(true);
    if (linkTwo) {
      setLinkTwo(false);
    }

    if (linkThree) {
      setLinkThree(false);
    }
    if (linkFour) {
      setLinkFour(false);
    }
    if (linkFive) {
      setLinkFive(false);
    }
  };
  const handleLinkTwo = () => {
    setLinkTwo(true);
    if (linkOne) {
      setLinkOne(false);
    }
    if (linkThree) {
      setLinkThree(false);
    }
    if (linkFour) {
      setLinkFour(false);
    }
    if (linkFive) {
      setLinkFive(false);
    }
  };
  const handleLinkThree = () => {
    setLinkThree(true);

    if (linkOne) {
      setLinkOne(false);
    }
    if (linkTwo) {
      setLinkTwo(false);
    }
    if (linkFour) {
      setLinkFour(false);
    }
    if (linkFive) {
      setLinkFive(false);
    }
  };
  const handleLinkFour = () => {
    setLinkFour(true);
    if (linkOne) {
      setLinkOne(false);
    }
    if (linkTwo) {
      setLinkTwo(false);
    }
    if (linkThree) {
      setLinkThree(false);
    }
    if (linkFive) {
      setLinkFive(false);
    }
  };
  const handleLinkFive = () => {
    setLinkFive(true);
    if (linkOne) {
      setLinkOne(false);
    }
    if (linkTwo) {
      setLinkTwo(false);
    }
    if (linkThree) {
      setLinkThree(false);
    }
    if (linkFour) {
      setLinkFour(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-midBlue text-white py-10 ">
        <div className="grid grid-cols-1 w-full xl:w-8/12 md:w-11/12 max-w-screen-2xl place-items-center">
          <div className="w-full">
            <div className="w-full 2xl:w-10/12 xl:w-full  lg:w-full block m-auto">
              <h1 className="text-5xl font-medium text-left px-4 sm:px-0 md:p-0 lg:px-0">
                <span className="text-hover">Our </span>customers
              </h1>
              <p className="my-6 px-4 sm:px-0 md:px-0 lg:px-0 leading-8">
                Tomedes has provided quality translation services to local and
                international businesses for more than a decade. Companies and
                private customers from various industries trust us because we
                understand their specific needs and help them to achieve their
                goals.
              </p>
            </div>
            <ul className="lg:flex text-center w-full 2xl:w-10/12 xl:w-full lg:w-full  justify-center sm:mt-12 my-8 p-4  pb-0 m-auto">
              <li
                className={`text-xl px-2 py-4 cursor-pointer relative 2xl:px-6 xl:px-5 ${
                  linkOne
                    ? "border-b-2 border-orange text-orange"
                    : "border-b-2 border-grayBorder"
                }`}
                onClick={handleLinkOne}
              >
                Businesses and Organizations
                {linkOne ? (
                  <span className="absolute top-11 left-2/4  border-t-8 border-l-8 border-r-8 border-b-10 border-b-orange border-t-transparent border-l-transparent border-r-transparent"></span>
                ) : null}
              </li>
              <li
                className={`text-xl px-2 py-4 cursor-pointer relative 2xl:px-6 xl:px-5 ${
                  linkTwo
                    ? "border-b-2 border-orange text-orange"
                    : "border-b-2 border-grayBorder "
                }`}
                onClick={handleLinkTwo}
              >
                High Tech & Internet
                {linkTwo ? (
                  <span className="absolute top-11 left-2/4  border-t-8 border-l-8 border-r-8 border-b-10 border-b-orange border-t-transparent border-l-transparent border-r-transparent"></span>
                ) : null}
              </li>
              <li
                className={`text-xl px-2 py-4 cursor-pointer relative 2xl:px-6 xl:px-5 ${
                  linkThree
                    ? "border-b-2 border-orange text-orange"
                    : "border-b-2 border-grayBorder "
                }`}
                onClick={handleLinkThree}
              >
                Law & Finance
                {linkThree ? (
                  <span className="absolute top-11 left-2/4  border-t-8 border-l-8 border-r-8 border-b-10 border-b-orange border-t-transparent border-l-transparent border-r-transparent"></span>
                ) : null}
              </li>
              <li
                className={`text-xl px-2 py-4 cursor-pointer relative 2xl:px-6 xl:px-5 ${
                  linkFour
                    ? "border-b-2 border-orange text-orange"
                    : "border-b-2 border-grayBorder "
                }`}
                onClick={handleLinkFour}
              >
                Academy
                {linkFour ? (
                  <span className="absolute top-11 left-2/4  border-t-8 border-l-8 border-r-8 border-b-10 border-b-orange border-t-transparent border-l-transparent border-r-transparent"></span>
                ) : null}
              </li>
              <li
                className={`text-xl px-2 py-4 cursor-pointer relative 2xl:px-6 xl:px-5 ${
                  linkFive
                    ? "border-b-2 border-orange text-orange"
                    : "border-b-2 border-grayBorder "
                }`}
                onClick={handleLinkFive}
              >
                Apps
                {linkFive ? (
                  <span className="absolute top-11 left-2/4  border-t-8 border-l-8 border-r-8 border-b-10 border-b-orange border-t-transparent border-l-transparent border-r-transparent"></span>
                ) : null}
              </li>
            </ul>
          </div>
          {/* business and organizations */}

          {linkOne ? <BusinessOrg /> : null}
          {/* HinghTech and internet */}
          {linkTwo ? <HighTech /> : null}

          {/* Law And Finance */}
          {linkThree ? <LawFinance /> : null}
          {/* Academy */}
          {linkFour ? <Academy /> : null}
          {/* Apps */}

          {linkFive ? <Apps /> : null}
        </div>
      </div>
    </>
  );
}

export default Customers;
