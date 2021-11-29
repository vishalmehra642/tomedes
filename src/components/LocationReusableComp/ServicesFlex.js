import React from "react";
import AutomotiveSvg from "assets/svg/automotive";
import EcomSvg from "assets/svg/ecom";
import FinanceSvg from "assets/svg/finance";
import FmcgSvg from "assets/svg/fmcg";
import GamingSvg from "assets/svg/gaming";
import GovtSvg from "assets/svg/government";
import HospSvg from "assets/svg/hospitality";
import LogsSvg from "assets/svg/logistics";
import ManufactureSvg from "assets/svg/manufacture";
import MedSvg from "assets/svg/medicine";
import MilitarySvg from "assets/svg/military";
import TechSvg from "assets/svg/tech";

export default function ServicesFlex({
  heading,
  details,
  contactUs,
  backgroundCol,
  colorComp,
}) {
  return (
    <section
      className={`${ backgroundCol ? backgroundCol : "bg-services-pattern" } bg-no-repeat bg-cover py-20`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 md:w-9/12 lg:max-w-6xl lg:grid-cols-1 lg:place-items-center">
        <div className="text-center  ">
          <h2 className="text-gray text-3xl lg:text-4xl font-bold font-secondary mb-6 lg:leading-normal">
            {heading ? heading : "A Translation Services Company for every"}
            {
              colorComp ? <span className="text-orange">
              {" "}
              {colorComp ? colorComp : "Industry"}
            </span> : null
            }
           
          </h2>
          <p className="text-lightGray font-opensans text-sm text-center lg:px-12 py-2 leading-8">
            {details
              ? details
              : "Our community of professionals commands expertise in virtually every industry imaginable, masters in the terminology of every field, including your own. We guarantee it."}
          </p>
          {contactUs ?  contactUs : null}
        </div>
        <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-4 lg:grid-cols-6 mt-7">
          <div className="border-solid border hover:bg-black  hover:border-black border-gridborderColor px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <TechSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Technology
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <GovtSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Government
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <MilitarySvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Military
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <MedSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Medicine
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <FinanceSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Finance
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <ManufactureSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Manufacturing
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <AutomotiveSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Automotive
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <HospSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Hospitality
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <GamingSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Gaming
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <LogsSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              Logistics
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <FmcgSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              FMCG
            </p>
          </div>
          <div className="border-solid border border-gridborderColor hover:bg-black  hover:border-black px-12 py-4 cursor-pointer flex flex-col justify-center items-center">
            <EcomSvg />
            <p className="text-gray font-opensans text-xs text-center py-2">
              E-Commerce
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
