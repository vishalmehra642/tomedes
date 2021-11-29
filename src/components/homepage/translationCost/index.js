import React from "react";

export default function index() {
  return (
    <>
      <div className="mainContainer text-white font-primary text-2xl ">
        {/* ------------Banner Section Starts------------ */}
             
        <div className="bannerImage bg-translation-banner bg-no-repeat bg-cover bg-center h-720 -mb-56 2xl:h-904 2xl:-mb-80">
          
          <div className=" relative top-24 2xl:top-56  ml-0 pl-4 xl:ml-64 2xl:ml-416 laptop:ml-80">
            <div className=" w-full bg-contact-img max-w-max h-4 sm:h-4 md:h-8">
              <h1 className=" text-2xl md:text-5xl sm:text-3xl font-medium w-full top-0 inset-x-0 font-riot ">
                Translation Cost
              </h1>
            </div>
            <div className="blackStrip   sm:w-full text-xl mx-auto mt-12 ">
              <div className="keyHighlights1  block md:inline-block bg-black-strip mr-6 sm:mr-0">
                <img
                  src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                  alt=""
                  className="w-5 inline-block mx-2 "
                />
                <span>24/7 Human Support</span>
              </div>
              <div className="keyHighlights1 block md:inline-block font-primary bg-black-strip mr-6 sm:mr-0">
                <img
                  src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                  alt=""
                  className="w-5 inline-block mx-2"
                />
                <span>1 Year Guarantee</span>
              </div>
              <div className="keyHighlights1 block md:inline-block font-primary bg-black-strip mr-6 sm:mr-0">
                <img
                  src="https://skins.tomedes.com/frontend/images/banner/check_sign.svg"
                  alt=""
                  className="w-5 inline-block mx-2"
                />
                <span>95,000 Business Customers</span>
              </div>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 py-6 space-y-6 text-center md:flex md:flex-row md:align-baseline md:items-center md:space-x-6 md:space-y-0 font-opensans">
                <a
                  href="/"
                  className="uppercase rounded-full py-3 bg-orange text-gray text-sm cursor-pointer w-60  font-semibold font-primary"
                >
                  Translate Now
                </a>
                <a
                  href="/"
                  className="uppercase rounded-full bg-white py-3 text-black text-sm  cursor-pointer w-60 font-semibold font-primary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ------------Banner Section Ends------------ */}

        {/* grid grid-cols-1 sm:grid-cols-3 */}
        {/* ------------Text Section Starts------------ */}

        <div className="backgroundColor bg-darkestgray w-full py-18">
          <div className="divWidth flex flex-col flex-wrap justify-center m-auto px-4 py-12 w-full xl:w-8/12">
            <div className="top">
              <div className="blueImageText relative bg-contact-img h-6 sm:h-14 md:h-8 mb-12 w-full sm:w-3/5 flex m-auto justify-center max-w-max">
                <h1 className="text-xl sm:text-3xl xl:text-4xl font-medium w-full text-center pb-12  py-3 top-0 inset-x-0">
                  Pay the Right Translation Price
                </h1>
              </div>

              <p className="font-light">
                Tomedes translation service provides professional translation
                for business customers and individuals across the globe. We aim
                for transparency in our business, and this applies to
                translation cost as well as to other areas of our work. Your
                translation price will be confirmed during your initial
                discussions with Tomedes, so that you know from the outset what
                the cost will be.
              </p>
              <p className="font-light py-2">
                Translation cost can vary based on a range of factors. The laws
                of supply and demand impact translation price, just as they do
                almost all goods and services. That means that commonly paired
                languages, such as Spanish and English, which have an abundance
                of translators available, will command a lower price per word
                than less commonly sought language pairings. A language from
                Kannada to Zulu (for example) will cost more per word than one
                from English to Spanish, simply due to the fact that there are
                fewer translators available (and those that are available can
                command higher rates).
              </p>
            </div>

            <div className="bottom">
              <img
                className="my-20"
                src="https://skins.tomedes.com/frontend/images/translationcost.jpg"
                alt=""
              />
              <p className="font-light">
                Translation price can also vary based on the type of content
                being translated. Topics with complex terminology, such as
                medical translation and legal translation, require specialist
                translators to work on them. Thus they tend to command higher
                translation rates than more general content. Once more this is
                the result of simple economics – the translation cost for niche
                services is higher as there are fewer translators available to
                work on them.
              </p>
              <p className="font-light py-2">
                The urgency with which a document is required can also impact on
                the translation cost. If an urgent translation service is
                required, this will usually command a price premium.
              </p>
              <p className="font-light py-2">
                To get an initial idea of the translation price for your
                document, please use the Tomedes instant quote service. This
                service provides an indicative translation cost based on the
                language pairing that you require and the number of words to be
                translated. You can also speak to the helpful Tomedes team to
                discuss your translation requirements in more detail and confirm
                the translation price that will apply to your document.
              </p>
            </div>
          </div>
        </div>
        {/* ------------Text Section Ends------------ */}
        <div className="bottomButtons bg-black">
        <div className="div flex flex-col sm:flex-row w-6/12 justify-between m-auto py-28">
          <div className="translateBtn text-center py-6">
            <h3 className="pb-10 ">Ready to get started?</h3>
            <button className="bg-btnGreen rounded-full py-3 px-2 md:py-3 md:px-6 text-sm sm:text-base whitespace-nowrap">Translate Now</button>
          </div>
          <div className="contactBtn text-center pb-6 py-6">
          <h3 className="pb-10">Want to tell us more about your needs?</h3>
            <button className=" border border-white rounded-full hover:bg-borderGray py-3 px-2 md:py-3 md:px-6 text-sm sm:text-base whitespace-nowrap">Contact Us</button>
          </div>
        </div>
        <div className="borderLine bg-grayBorder border-b"></div>
        </div>

      </div>
    </>
  );
}
