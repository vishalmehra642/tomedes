import React, { useState } from "react";
import ConferenceComp from "components/translationConferences/conferenceComp";
import Bussiness from "assets/images/business.png";
import customerSupport from "assets/images/customer-support.png";
import Guarantee from "assets/images/guarantee.png";
import { CountryArray } from "utils/constants";
import { Afganisthan } from "components/translationConferences/config";

function Confrence() {
  const [selectedLocation, setSelectedLocation] = useState([]);
  // removed value state for now, as it is not using anywhere and causing terminal warnings
  const [setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  const getLocationData = () => {
    setSelectedLocation(Afganisthan);
  };
  return (
    <div className="flex items-center justify-cenhter flex-col font-primary">
      <div className="flex items-center justify-center w-full bg-translation-confrence bg-no-repeat bg-cover bg-center h-600">
        <div className="max-w-screen-2xl bg-black text-white pt-10 pb-4 px-6 lg:py-10 lg:px-14 bg-opacity-80 flex items-center justify-center flex-col lg:w-930 lg:h-255 mx-5 lg:mx-0">
          <h1 className="text-2xl lg:text-4xl pb-8 lg:pb-10 w-full font-normal">
            TRANSLATION CONFERENCES
          </h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="grid grid-cols-1 place-content-center gap-5 lg:gap-6 lg:grid-cols-3">
              <div className="flex md:inline-flex flex-col">
                <label htmlFor="country" className="pl-2 pb-2 font-semibold">
                  Location
                </label>
                <select
                  onChange={handleSelect}
                  id="countries"
                  name="country"
                  className="text-inputGray py-3 px-2 bg-white rounded-sm h-10 border border-inputBorder"
                >
                  <option>Location</option>
                  {CountryArray
                    ? CountryArray.map(({ name }, index) => (
                        <option key={index} value={name}>
                          {name}
                        </option>
                      ))
                    : null}
                </select>
              </div>

              <div className="flex md:inline-flex flex-col">
                <label htmlFor="from" className="pl-2 pb-2 font-semibold">
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  id="from"
                  className="text-inputGray py-3 px-2 bg-white rounded-sm h-10 border border-inputBorder"
                  placeholder="From"
                />
              </div>

              <div className="flex md:inline-flex flex-col">
                <label htmlFor="to" className="pl-2 pb-2 font-semibold">
                  To
                </label>
                <input
                  type="text"
                  name="to"
                  id="to"
                  className="text-inputGray py-3 px-2 bg-white rounded-sm h-10 border border-inputBorder"
                  placeholder="To"
                />
              </div>
            </div>
            <div className="lg:ml-10 lg:self-end my-5 w-full lg:w-20 lg:my-0">
              <button
                type="submit"
                className="inline text-bottom bg-lightBlue px-4 py-2 w-full lg:w-20"
                onClick={getLocationData}
              >
                OK
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-opacity-80 bg-black"></div>
      </div>
      <div className="flex items-center justify-center bg-darkestgray w-full">
        <div className="flex justify-evenly max-w-screen-2xl w-full xl:w-8/12 flex-col md:flex-row">
          <div className="md:w-7/12 w-full px-6 sm:px-0">
            <h1 className="text-lightBlue text-xl lg:text-2xl pt-14 pb-8">
              LANGUAGE & TRANSLATION CONFERENCES
            </h1>
            <ConferenceComp selectedLocation={selectedLocation} />
          </div>
          {/* why choose us */}
          <div className="md:w-1/4 w-full mt-11 sm:border-l sm:border-white sm:pl-6 h-2/3">
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
    </div>
  );
}

export default Confrence;
