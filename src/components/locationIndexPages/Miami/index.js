import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import ServicesFlex from "components/LocationReusableComp/ServicesFlex";
import { Link } from "gatsby";
import CommonUse from "components/LocationReusableComp/commonuse";
import { LanguagesInMiami, MiamiData } from "./config";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="Miami Translation Services"
        content="Have you been searching for translation services in Miami? The search is over. Tomedes translation company can make sure all your translation needs are taken care of. This includes translation, localization, and interpretation--all done by native translators in Miami. Tomedes provides a 1-year guarantee, rapid delivery, and 24/7 availability. Why go with anyone else?"
        formOrangeHead="Get in touch"
        formWhiteHead="with a certified translator"
      />
      <EmailerLocation />
      <ServicesFlex
        backgroundCol="bg-darkBlue"
        heading="A Translation Company for Every Industry"
        details="Tomedes is a top translation company in Los Angeles because we provide for a wide variety of industries with our linguistic services. From legal translation services to medical translation services and financial translation services to any other industry you can name, Tomedes' official translators can support you in your business niche."
        contactUs={
          <Link
            to="/blog"
            className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />
      <CommonUse
        backgroundCol="bg-midBlue"
        title="Common Use Cases For Our Certified Translation Services"
        para="In Florida, translation may be hard to come by. At Tomedes, we provide more than just translations. Here are the common use cases for our certified translation services:"
        data={MiamiData}
      />
      <TrustedTranslation
        FirstWhite=""
        headColor="text-lightBlue"
        ColorHead="More"
        SecondWhite="Translation Services Available"
        Content="If you’re looking for website translation services, app and website localization services, and financial services, look no further because Tomedes has a wide variety of translation services available."
        getStarted
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_ottawa.webp"
        translationAt="for a Translation Company in Miami?"
        detail="Tomedes is the best translation company in Miami, Florida for two reasons: we’re able to accommodate a large range of industries and with the widest range of languages. Our multilingual, expert translators are readily available for translations with your needs in mind. Get in touch with us today."
        location="Miami"
        countryName="USA"
      />
      <Popular
        backgroundCol="bg-darkBlue"
        bottomBorderText
        languageCount="A Translation Agency in Miami With Over 120 Languages and 950+ Language Pairs"
        details="Among the translation agencies in Miami, Tomedes is one to beat, because of our languages: we cover almost every language available, even the rare ones. Here’s a list of our most popular languages:"
        bottomHeading="Popular Languages"
        location="Miami"
        data={LanguagesInMiami}
      />
      <TrustedTranslation
        backgroundCol="bg-midBlue"
        FirstWhite=""
        headColor="text-orange"
        ColorHead="Professional"
        SecondWhite="Translation Services Made For You"
        Content="Tomedes professional translation services has the client at the heart of our philosophy. With our outstanding 24/7 customer support, capable project managers, and expert translators, we’ve garnered a 97% client satisfaction rate. Talk to us to hear more."
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
