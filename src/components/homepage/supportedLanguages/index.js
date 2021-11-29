import React from "react";

export default function SupportedLang() {
  return (
    <section className="bg-midBlue py-20 relative">
      <div className="lg:grid lg:grid-cols-2 lg:mx-auto lg:max-w-screen-lg">
        <div className="container mx-auto px-4 pb-64 lg:pb-10">
          <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary mb-6 lg:text-left">
            <span className="text-orange">Translation</span> Services in 815
            Languages and 950+ Language Pairs
          </h2>
          <p className="text-lightGray font-opensans text-sm leading-8 lg:leading-6 px-5 lg:max-w-5xl lg:px-0">
            Can you bring us a linguistic challenge which we can’t meet? Our
            global team of translators is unmatched in their knowledge and
            versatility, covering even rare and exotic languages.
          </p>
          <p className="text-lightGray font-opensans text-sm leading-8 lg:leading-6 px-5 lg:max-w-5xl mt-2 lg:px-0">
            In more than 75,000 client engagements, our language specialists
            have worked in virtually every professional field and industry under
            the sun. We invite you to tell us about your translation project. We
            love a tough challenge.
          </p>
          <p
            className="text-lightGray font-opensans text-md text-center uppercase underline my-10 cursor-pointer lg:text-left"
            style={{ textUnderlinePosition: "under" }}
          >
            SEE OUR SUPPORTED LANGUAGES
          </p>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
      <img
        src="https://skins.tomedes.com/frontend/images/home-en/Language.webp"
        alt="globe"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
}
