import React from "react";
import Layout from "components/layout";

export default function index() {
  return (
    <Layout>
      <div className="bg-headerBorder">
        <div className="main_div flex flex-col justify-center px-5 mx-auto font-primary max-w-5xl">
          <div className="lg:w-8/12 lg:p-4 py-4">
            <h1 className="font-riot text-white my-4 py-2 bg-contact-img bg-cover bg-no-repeat text-3xl lg:text-4xl inline-block custom-bg-pos">
              Get in touch with us
            </h1>
            <h2 className="text-white my-8 text-xl leading-7 font-light">
              We will respond to your message within a few minutes.
              <br />
              You can also contact us on +1 985 239 0142 or +44 (0)16 1509 6140
            </h2>
          </div>
          <div className="flex-wrap md:w-10/12 m-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  className="block tracking-wide font-primary text-white text-lg font-light mb-2"
                  htmlFor="first_name"
                >
                  First Name
                  <span className="text-red">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Your first name"
                  name="first_name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="last_name"
                >
                  Last Name
                  <span className="text-red">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Your last name"
                  name="last_name"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="email"
                >
                  Email
                  <span className="text-red">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="email"
                  placeholder="Your email address"
                  name="email"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 ">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <input
                    className="appearance-none inline w-4/12 bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="+91"
                    name="phone"
                  />
                  <input
                    className="appearance-none inline w-full ml-4 bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="00-000-0000"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Company"
                  name="company"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="appearance-none block w-full bg-white text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="name"
                  placeholder="Country"
                  name="country"
                >
                  <option
                    value="Select Country"
                    className="text-gray-700 text-2xl font-light"
                  >
                    Select Country
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-full px-3 md:mb-0">
                <label
                  className="block  tracking-wide text-white text-lg font-light mb-2"
                  htmlFor="about"
                >
                  Tell Us More About Your Needs:
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 text-2xl font-light border border-grayInput  py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  rows="4"
                  placeholder="A member of our team will contact you within a few minutes"
                  name="about"
                />
              </div>
            </div>
          </div>
          <div className="button flex mt-6">
            <a
              to="/"
              className="bg-orange text-white py-2 px-10 mb-4 rounded-full mx-auto cursor-pointer font-light"
            >
              SUBMIT
            </a>
          </div>

          <div className="justify-center m-auto flex-col text-white pt-12">
            <div className="flex-col flex-wrap -mx-3 mb-6 text-center">
              <h1 className="text-3xl pb-4">You can find us</h1>

              <p>
                <span>@</span>info@tomedes.com
              </p>
            </div>
            <div className="socialMedia flex gap-x-14 lg:gap-x-6 m-auto justify-center pb-8">
              <i>1</i>
              <i>2</i>
              <i>3</i>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center place-content-center">
              <div className="flex flex-col items-center justify-center lg:my-0 text-center">
                <img
                  src="https://skins.tomedes.com/frontend/images/newyork-1.png"
                  alt=""
                  className="w-157 h-157"
                />

                <div className="my-4">
                  <h1>United States</h1>
                  <p>
                    Tomedes Ltd - USA
                    <br />
                    9450 SW Gemini Dr #34540,
                    <br />
                    Beaverton, OR 97008-7105
                    <br />
                    Call : +1 985 239 0142
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:my-0 text-center">
                <img
                  src="https://skins.tomedes.com/frontend/images/euro.png"
                  alt=""
                  className="w-157 h-157"
                />
                <div className="my-4">
                  <h1>Middle East</h1>
                  <p>
                    Tomedes Ltd - Middle East
                    <br />
                    14 Gruzenberg St,,
                    <br />
                    Tel Aviv, Israel 6581117
                    <br />
                    Call: +972 (0)72 220 0700
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center lg:my-0 text-center">
                <img
                  src="https://skins.tomedes.com/frontend/images/uk.png"
                  alt=""
                  className="w-157 h-157"
                />
                <div className="my-4">
                  <h1>Europe</h1>
                  <p>
                    Tomedes Ltd - Europe
                    <br />
                    International House, 12 Constance St, London,
                    <br />
                    E16 2DQ
                    <br />
                    Call: +44 (0)16 1509 6140
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
