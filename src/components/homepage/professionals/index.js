import React from "react";

export default function Professionals() {
  return (
    <section className="bg-hero-pattern py-24 lg:bg-cover">
      <div className="container mx-auto px-6 lg:max-w-5xl lg:px-4">
        <h2 className="text-gray text-3xl md:text-4xl font-secondary mb-6 lg:text-left">
          <span className="text-orange">Network</span> of Professionals
        </h2>
        <p className="text-lightGray font-opensans text-sm leading-8 lg:leading-6 lg:w-6/12">
          We are grateful to our community of thousands of professionals,
          spanning the globe. Our multi-talented, multi-disciplinary project
          teams include veteran marketers, legal experts, content creators,
          audio specialists, and more, each bringing expert terminology and
          know-how to your work, supplemented by their mastery of two or more
          languages. Our community of professionals is our greatest asset.
        </p>
        <p
          className="text-lightGray font-opensans text-md uppercase underline my-10 cursor-pointer lg:text-left"
          style={{ textUnderlinePosition: "under" }}
        >
          Get Started
        </p>
      </div>
    </section>
  );
}
