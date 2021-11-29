import React from "react";

export default function TechDriven() {
  return (
    <section className="bg-darkBlue pb-24 pt-10">
      <div className="container mx-auto px-4 lg:px-0 md:px-12 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-x-6 lg:place-items-center">
        <div>
          <img
            src="https://skins.tomedes.com/frontend/images/home-en/technolog.webp"
            alt="tech_1"
            className="-mb-8 -ml-20"
          />
          <h2 className="text-gray text-3xl md:text-4xl text-left font-secondary mb-6">
            We are <br />
            <span className="text-orange">Technology</span> - Driven
          </h2>
          <p className="text-lightGray font-opensans text-sm text-left py-4 leading-8 lg:max-w-2xl lg:mx-auto">
            We combine the latest technological innovations and high quality
            data to support the most complex multilingual projects. Our tech
            mastery includes insights for training AI and combining neural
            machine translation with human translation for optimal results and
            agile delivery.
          </p>
        </div>
        <div>
          <img
            src="https://skins.tomedes.com/frontend/images/home-en/technology_logo_2.webp"
            alt="tech"
            className="md:w-3/4 md:mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
