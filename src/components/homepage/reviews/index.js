import React from "react";
import FbReview from "assets/svg/fbreview";
import TrustPilot from "assets/svg/trustpilot";
import FeatureCustomer from "assets/svg/featuredcustomer";
import ReviewSvg from "assets/svg/review";
import ReviewCards from "../reviewcard";

export default function Reviews({backgroundCol}) {
  return (
    <section className={`${backgroundCol ? backgroundCol : "bg-midBlue" } py-20`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary mb-6">
          What Our <span className="text-orange">Clients</span> are Saying About
          Us
        </h2>
        <div className="flex flex-row justify-center mb-8 mt-10">
          <ReviewSvg />
        </div>
        <p className="font-secondary text-sm text-gray text-center">
          4.9 out of 5 stars (1,798 overall reviews)
        </p>
        <div className="mx-auto pt-10 pb-8">
          <div className="grid gap-4 grid-cols-1 place-items-center lg:grid-cols-3 lg:gap-0 lg:w-9/12 mx-auto">
            <FbReview />
            <TrustPilot />
            <FeatureCustomer />
          </div>
        </div>
        <ReviewCards/>
      </div>
    </section>
  );
}
