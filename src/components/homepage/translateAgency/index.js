import React from "react";
import AmazonSvg from "assets/svg/amazon";
import GoogleSvg from "assets/svg/google";
import MicrosoftSvg from "assets/svg/microsoft";
import YoutubeSvg from "assets/svg/youtubesvg";
import BloombergSvg from "assets/svg/bloomberg";
import SpotifySvg from "assets/svg/spotify";
import WixSvg from "assets/svg/wix";
import HsbcSvg from "assets/svg/hsbc";
import mgm from "assets/images/mgm.png";
import HpSvg from "assets/svg/hp";
import SapSvg from "assets/svg/sap";

export default function TranslateAgency({BackgroundCol ,content ,head , colorHead}) {
  return (
    <section className={`${BackgroundCol ? BackgroundCol : "bg-darkBlue"} py-24 relative`}>
      <img
        src="https://skins.tomedes.com/frontend/images/home-en/Industry_dots.webp"
        alt="dots"
        className="invisible lg:visible absolute top-0 left-0"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary leading-10">
          {head ? head  :"A Translation Services Company for every"}
          <span className="text-lightBlue">  {colorHead ? colorHead : "Industry"}</span>
        </h2>
        <p className="text-lightGray font-opensans text-sm text-center py-4 leading-8 px-10 lg:max-w-5xl lg:mx-auto">
          {content ? content : "95,000 clients have entrusted Tomedes with their business. These include private individuals, small to medium businesses, and the largest corporations, leading brands, national and local governments. But most importantly: we’re here for you. Right now."}
        </p>

        <div className="mx-auto pt-10 text-center">
          <div className="grid gap-12 max-w-lg mx-auto grid-cols-2 md:grid-cols-3 md:gap-10 lg:flex lg:flex-wrap lg:justify-center lg:space-x-6 lg:space-y-4 lg:max-w-4xl place-items-center place-content-center">
            <AmazonSvg />
            <GoogleSvg />
            <MicrosoftSvg />
            <YoutubeSvg />
            <BloombergSvg />
            <SpotifySvg />
            <WixSvg />
            <HsbcSvg />
            <img src={mgm} alt="mgm" />
            <HpSvg />
            <SapSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
