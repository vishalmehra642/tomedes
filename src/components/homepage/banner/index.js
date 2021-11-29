import React from "react";

export default function Banner() {
  return (
    <section className="bg-banner-img pb-16 lg:bg-cover lg:bg-center">
      <div className="container mx-auto px-6 lg:max-w-6xl">
        <div className="lg:flex lg:flex-row lg:align-baseline lg:items-center lg:mx-auto">
          <div className="py-16 px-5">
            <h2 className="text-gray text-4xl font-medium	text-left font-secondary leading-relaxed uppercase pb-5">
              Tomedes <br />
              Translation Services
            </h2>
            <p className="text-lightGray font-opensans text-sm text-left py-4 lg:w-4/5">
              Translation services made to overcome language barriers and
              broaden your horizons.
            </p>

            <div className="grid grid-cols-1 py-6 space-y-6 text-center md:flex md:flex-row md:align-baseline md:items-center md:space-x-6 md:space-y-0 font-opensans">
              <a
                href="/"
                className="uppercase rounded-full py-3 bg-orange text-gray text-sm cursor-pointer w-4/5 md:w-2/5"
              >
                Translate Now
              </a>
              <a
                href="/"
                className="uppercase rounded-full py-3 text-gray text-sm border border-text-gray cursor-pointer w-4/5 md:w-2/5"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
