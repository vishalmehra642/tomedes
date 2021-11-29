import React from "react";

export default function Contact() {
  return (
    <section className="bg-midBlue py-20">
      <div className="container mx-auto px-4 md:max-w-2xl">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary mb-6">
          <span className="text-orange">Contact</span> Us, We respond within 15
          minutes
        </h2>
        <p className="text-lightGray font-opensans text-center text-sm leading-6 lg:leading-6 px-5 lg:max-w-5xl lg:px-0">
          Clients are at the core of our business. Tomedes prioritizes the
          customer experience above all else. We guarantee 15-minute response to
          inquiries, 24/7 support, and a full-year accuracy warranty on each
          project.
        </p>
        <div className="flex flex-wrap pt-8 px-6 font-opensans md:flex md:flex-nowrap md:space-x-4 md:items-baseline md:px-24">
          <input
            className="text-sm shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter email address here"
          />
          <button className="bg-hover text-gray uppercase py-4 px-10 mx-auto text-sm mt-8 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
