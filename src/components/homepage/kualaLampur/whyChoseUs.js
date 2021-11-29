import React from "react";

function WhyChoseUs() {
  return (
    <>
      <div className="bottomRight w-full md:w-4/12 sm:pl-10 flex flex-row justify-center lg:justify-start m-auto">
        <div className="right flex justify-center sm:justify-start lg:pl-6 w-full pt-6">
          <div className="border border-l-2 border-gray mx-0 md:mx-7 mr-2 hidden sm:inline-block"></div>
          <div className="icons flex flex-col items-center text-center text-white font-semibold">
            <h1 className="py-6 text-lightBlue text-2xl">Why Choose Us</h1>
            <div className="m-auto py-4 flex flex-col items-center w-full text-white ">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/24-7-human-support.svg"
                className="w-20"
                alt=""
              />
              <h3 className="pt-4">24/7 Human Support</h3>
            </div>
            <div className="m-auto flex py-4 flex-col items-center w-full">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/quality-guaranteed-color.svg"
                className="w-20"
                alt=""
              />
              <h3 className="pt-4">1 Year Guarantee</h3>
            </div>
            <div className="m-auto flex py-4 flex-col items-center w-full">
              <img
                src="https://skins.tomedes.com/frontend/images/why-us-img/50000-business.svg"
                className="w-20"
                alt=""
              />
              <h3 className="pt-4">95,000 Business Customers</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoseUs;
