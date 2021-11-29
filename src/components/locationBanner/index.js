import React from "react";

export default function index(props) {
  return (
    <div className="bg-location-banner bg-cover bg-no-repeat bg-center">
      <div className="mainContainer w-full flex flex-wrap lg:flex-nowrap xl:w-9/12 2xl:w-7/12 mx-auto justify-center text-white py-8 px-6">
        {/* ------------Text Content Start------------ */}
        <div className="textContent text-white md:w-11/12 lg:w-6/12 w-full flex flex-col mt-16 lg:mr-20">
          <div className="text">
            <h1 className="text-40 font-secondary font-bold mb-10">
              {props.title}
            </h1>
            <p className="mb-10 font-opensans tracking-wider ">
              {props.content}
            </p>
          </div>
          <div className="btn">
            <a
              href="/"
              className="bg-orange hover:bg-hoverYellow rounded-3xl py-3 px-5 font-semibold text-sm font-opensans"
            >
              TRANSLATE NOW
            </a>
          </div>

          <div className="grid grid-cols-3 mt-12 font-opensans text-md gap-0">
            <div className="flex flex-row">
              <img
                className="w-4"
                src="https://skins.tomedes.com/frontend/images/location-template/badge.svg"
                alt=""
              />
              <p className="ml-1">1 Year Gurantee |</p>
            </div>
            <div className="flex flex-row">
              <img
                className="w-4"
                src="https://skins.tomedes.com/frontend/images/location-template/call-center.svg"
                alt=""
              />
              <p className="ml-1">24/7 Availability |</p>
            </div>
            <div className="flex flex-row">
              <img
                className="w-4"
                src="https://skins.tomedes.com/frontend/images/location-template/16-express.svg"
                alt=""
              />
              <p className="ml-1">Rapid Delivery</p>
            </div>
          </div>
        </div>

        <div className="form border-white bg-locationFormBorder mr-auto justify-center max-h-460 max-w-370 min-w-300 py-8  px-6 mt-4 ">
          <div className="inputs flex flex-col mx-auto justify-center text-black  max-w-max">
            <h1 className="text-2xl font-bold pb-4 font-secondary">
              <span className="text-orange">{props.formOrangeHead}</span>{" "}
              {props.formWhiteHead}
            </h1>
            <p className=" font-opensans pb-4">
              Get in touch with us in real-time, any time.
            </p>
            <input
              type="text"
              placeholder="Name"
              className="border-borderGray font-opensans border rounded pl-3 py-1"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Email Address"
              className="border-borderGray font-opensans border rounded`  pl-3 py-1"
            />
            <br />
            <textarea
              className="border-borderGray font-opensans border rounded  pl-3 py-1"
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Tell us more about your needs"
            ></textarea>
            <a
              href="/"
              className="bg-orange py-2 text-center font-secondary font-extrabold mt-6 text-white"
            >
              SUBMIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
