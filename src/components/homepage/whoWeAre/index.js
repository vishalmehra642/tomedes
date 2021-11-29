import React from "react";

export default function WhoWeAre() {
  return (
    <section className="bg-who-we-are bg-cover pt-24 pb-16 relative">
      <div className="container mx-auto px-6 md:max-w-2xl lg:max-w-6xl">
        <img
          src="https://skins.tomedes.com/frontend/images/home-en/whatwedo_text2.webp"
          alt="whatwedo"
          className="-mb-10 mx-auto md:-mb-14"
        />
        <h2 className="text-gray text-3xl font-black md:text-5xl lg:text-6xl text-center font-secondary leading-10 uppercase">
          <span className="text-lightBlue">Who</span> We Are
        </h2>
        <p className="text-lightGray font-opensans text-sm lg:text-lg md:text-lg text-center py-4 leading-8 lg:max-w-3xl lg:mx-auto">
          We're a comprehensive translation services company working towards the
          global growth of our stakeholders, powered by the combination of
          technological and human solutions.
        </p>

        <div className="my-10">
          <h3 className="text-mist text-xl text-left font-secondary leading-10 uppercase pb-6">
            Our <span className="text-orange">Goal</span>
          </h3>

          <div className="pl-20 mb-4">
            <h2 className="text-gray text-3xl xl:md:ml-16 leading-loose md:text-4xl lg:text-4xl text-left font-secondary uppercase font-medium">
              Broaden
            </h2>
            <h2 className="text-gray text-3xl xl:md:ml-16 leading-loose md:text-4xl lg:text-4xl text-left font-secondary uppercase font-medium">
              Your <span className="text-lightBlue">Horizons</span>
            </h2>
          </div>

          <div className="border-solid border-t border-darkOrange pt-5 ml-48"></div>

          <p className="text-darkMist font-opensans text-sm text-left py-4 leading-loose md:text-lg lg:text-base md:ml-40 lg:ml-48">
            Set yourself up for <span className="text-orange">growth</span> and
            expand your global footprint. We empower
            <br />
            you to reach new audiences, cross linguistic borders, grow your
            business.
            <br />
            Join 75,000+ satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <h3 className="text-mist text-xl text-left font-secondary leading-10 uppercase pb-6">
            Our <span className="text-orange">Philosohpy</span>
          </h3>
          <div className="lg:grid grid-cols-2">
            <img
              src="https://skins.tomedes.com/frontend/images/home-en/whowe-1.webp"
              alt="whowe-1"
            />

            <div className="md:ml-16">
              <h2 className="text-gray text-3xl text-left font-secondary leading-loose uppercase py-6 lg:text-4xl font-medium">
                The <span className="text-lightBlue">Client</span> is at the
                heart of our Philosohpy
              </h2>
              <p className="text-darkMist font-opensans text-sm text-left leading-loose md:text-lg lg:text-base">
                We are passionately{" "}
                <span className="text-orange">committed</span> to our clients,
                the beating heart of our philosophy, providing ever-responsive,
                one-stop support for all your language service needs.
              </p>
            </div>
          </div>

          <h3 className="text-mist text-xl text-left font-secondary leading-10 uppercase pb-4">
            Our <span className="text-orange">Expertise</span>
          </h3>
          <div className="lg:grid grid-cols-2">
            <div className="md:ml-24 lg:mr-16 lg:ml-16">
              <h2 className="text-gray text-3xl text-left font-secondary leading-loose uppercase lg:text-4xl font-medium">
                More Than <span className="text-lightBlue">Translation</span>
              </h2>
              <p className="text-darkMist font-opensans text-sm text-left leading-loose mb-2 md:text-lg md:py-4 lg:text-base">
                The <span className="text-orange">quality</span> of our work is
                derived from the capabilities
                <br />
                of our community of professionals, whose experience
                <br />
                and talents span a vast array of fields. We are marketers,
                <br />
                linguists, content creators, legal and medical experts
                <br />
                specialists in diverse technologies and industries.
              </p>
            </div>

            <img
              src="https://skins.tomedes.com/frontend/images/home-en/whowe-2.webp"
              alt="whowe-2"
              className="md:float-right"
            />
          </div>

          <h3 className="text-mist text-xl text-left font-secondary leading-10 uppercase pb-6">
            Our <span className="text-orange">Edge</span>
          </h3>
          <div className="lg:grid grid-cols-2">
            <img
              src="https://skins.tomedes.com/frontend/images/home-en/whowe-3.webp"
              alt="whowe-3"
            />

            <div className="md:ml-24">
              <h2 className="text-gray text-3xl text-left font-secondary leading-loose uppercase py-6 lg:text-4xl">
                <span className="text-lightBlue">Technology</span>-Driven
                Solutions
              </h2>
              <p className="text-darkMist font-opensans text-sm text-left leading-loose md:text-lg lg:text-base">
                We are always on the lookout for{" "}
                <span className="text-orange">innovative</span> tech solutions,
                such as machine learning, post-editing machine translation, and
                high quality training data for AI.
              </p>
              <p
                className="text-lightGray font-opensans text-md text-left uppercase underline cursor-pointer py-6"
                style={{ textUnderlinePosition: "under" }}
              >
                Get Started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
