import React from "react";
import MGM from "assets/images/mgm.png";

export default function ReviewCards() {
  return (
    <div>
      <div className="mainContainer w-full flex flex-col lg:flex-row lg:flex-grow-0 mx-auto justify-center text-white my-4 lg:gap-x-6 ">

        <div className="cardOne  bg-boxColor rounded-2xl p-6 lg:w-22REM w-full lg:h-auto h-80 relative mb-6 lg:mb-0">
          <h1 className="font-medium text-lg">
            "Speedy return & <br /> reasonably priced"
          </h1>
          <p className="mt-6 font-light text-light text-sm tracking-wider">
            A translation company well equipped with knowledge of hundreds of
            different languages - speedy return & reasonably priced.
          </p>
          <div className="name absolute bottom-0 mb-4 pb-6">
            <img src={MGM} alt="" className="" />
            <h1>LindsayKatherine</h1>
          </div>
         
        </div>
        <div className="cardTwo bg-boxColor rounded-2xl lg:w-22REM w-full p-6 relative mb-6 lg:mb-0">
          <h1 className="font-medium text-lg">
            "Tomedes has been nothing but kind, knowledgeable and efficient!"
          </h1>
          <p className="mt-6 font-light text-sm mb-28 tracking-wider">
            Tomedes has been nothing but kind, knowledgeable and efficient! At
            first, we utilized their translation services to translate a few
            sensitive documents, and mostly recently used interpretation
            services to assist with HR needs. Everything was seamless! I trusted
            Tomedes so much they’re now working with other departments in my
            company. We’re working on an even bigger project: interpreting a
            multi-language Zoom meeting!
          </p>
          <div className="name mt-12 absolute bottom-0 mb-4 pb-6">
            <img src={MGM} alt="" className="" />
            <h1>Ashrena Ali</h1>
          </div>
        </div>
        <div className="cardThree bg-boxColor rounded-2xl p-6 w-full relative lg:w-22REM">
          <h1 className="text-lg font-medium">
            "Efficient and very good customer service."
          </h1>
          <p className="mt-6 font-light text-sm mb-28 tracking-wider">
            Efficient and very good customer service. The Tomedes team helped us
            translate our core content into Turkish, Korean, Polish, and
            Italian. They were very responsive and quick to help us address any
            issues related to timeline and quality of translation. It was
            helpful to get spreadsheets from them to track their progress. I
            would recommend the Tomedes team to any computer science curriculum
            providers.
          </p>
          <div className="name absolute bottom-0 mb-4 pb-6">
            <img src={MGM} alt="" className="" />
            <h1>Jorge Castro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
