import React from "react";

export default function TranslationServiceOneTwenty({
  backgroundCol,
  textColor,
}) {
  return (
    <div className={backgroundCol}>
      <div className="flex flex-col text-center mx-auto justify-center w-6/12 text-white py-28">
        <h1 className="text-4xl font-bold">
          {" "}
          <span className={textColor}>Translation</span> Services in 120
          Languages <br /> and 950+ Language Pairs
        </h1>
        <p className="pt-10 font-light">
          Did you know that there are over 120 languages 
          and 950+ language pairs in the language list of Tomedes? Take a look
          at your desired language, and contact us now.
        </p>
        <div className="container pt-14  max-w-max justify-center mx-auto">
          <a href="/" className="text-lg">
            GET STARTED
          </a>
          <div className="border-b border-gray"></div>
        </div>
      </div>
    </div>
  );
}
