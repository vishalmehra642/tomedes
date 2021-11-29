import React from "react";
import CustomerSvg from "assets/svg/customer";
import BadgeSvg from "assets/svg/badge";
import ClockSvg from "assets/svg/clock";
import SuitCaseSvg from "assets/svg/suitcase";

export default function WhatChooseUs({backgroundCol}) {
  return (
    <section className={`${backgroundCol ?  backgroundCol : "bg-midBlue"} pt-24 pb-16 relative`}>
      <div className="container mx-auto px-4 lg:w-9/12">
        <div className="bg-lightBlue py-4 -ml-4 md:w-4/12">
          <h2 className="text-gray text-3xl text-left font-secondary leading-10 uppercase pl-4">
            Why
          </h2>
        </div>
        <h2 className="text-gray text-3xl text-left font-secondary leading-10 uppercase mt-4">
          Choose Us?
        </h2>

        <div className="grid grid-cols-1 place-items-center place-content-center py-8 gap-10 md:grid-cols-2 md:gap-4 md:max-w-xl mx-auto lg:flex lg:flex-row lg:max-w-screen-xl lg:gap-0 lg:space-x-4 lg:items-stretch">
          <div className="border-solid border border-borderColor rounded-xl text-center px-10 py-12 mx-10 md:mx-0 lg:flex-1">
            <CustomerSvg />
            <h3 className="text-gray text-md py-4 font-secondary">
              24/7 Customer Service
            </h3>
            <ul className="text-left text-gray list-disc text-sm font-opensans">
              <li>Personal project manager</li>
              <li>Support and assistance via email, phone and chat</li>
            </ul>
          </div>

          <div className="border-solid border border-borderColor rounded-xl text-center px-10 py-12 mx-10 md:mx-0 lg:flex-1">
            <BadgeSvg />
            <h3 className="text-gray text-md py-4 font-secondary">
              1-year guarantee
            </h3>
            <ul className="text-left text-gray list-disc text-sm font-opensans">
              <li>Post-completion project support</li>
              <li>Comprehensive quality assurance</li>
            </ul>
          </div>

          <div className="border-solid border border-borderColor rounded-xl text-center px-10 py-12 mx-10 md:mx-0 lg:flex-1">
            <ClockSvg />
            <h3 className="text-gray text-md py-4 font-secondary">
              Fast Delivery
            </h3>
            <ul className="text-left text-gray list-disc text-sm font-opensans">
              <li>Availability for urgent orders</li>
              <li>
                Working around the clock to provide the best, fastest service
              </li>
            </ul>
          </div>

          <div className="border-solid border border-borderColor rounded-xl text-center px-10 py-12 mx-10 md:mx-0 lg:flex-1">
            <SuitCaseSvg />
            <h3 className="text-gray text-md py-4 font-secondary">
              75,000 Business Customers
            </h3>
            <ul className="text-left text-gray list-disc text-sm font-opensans">
              <li>Fortune 500 companies trust Tomedes translation agency</li>
              <li>Official and selected Google and Android partner</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
