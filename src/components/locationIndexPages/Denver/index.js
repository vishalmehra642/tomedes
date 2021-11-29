import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import CommonUse from "components/LocationReusableComp/commonuse";
import { DenverData, LanguagesInDenver } from "./config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import LookingTranslator from "components/LocationReusableComp/looking";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      {/* one */}
      <LocationBanner
        title="Denver Translation Services"
        content="Looking for translation services in Denver, Colorado? Tomedes translation company in Denver has translation, localization, and interpretation services for your business and individual needs. With over ten years of experience, Tomedes has over 120 languages and 950+ language pairs, offered with a 1-year guarantee, rapid delivery and 24/7 customer support."
        formOrangeHead="Get in touch"
        formWhiteHead="with our translation company"
      />
      <EmailerLocation />
      <TrustedTranslation
        FirstWhite="Our "
        backgroundCol="bg-darkBlue"
        headColor="text-lightBlue"
        ColorHead="Certified"
        SecondWhite="Translation Services in Denver"
        Content="
        Tomedes translation company can make sure all your documents in Denver are certified translations. This means that certified translators will provide authentic representations of the original texts. Tomedes is certified as well by the American Translator’s Association to provide these services. At Tomedes, we can assist in all aspects of your application to help broaden your horizons."
      />
      <CommonUse
        backgroundCol="bg-midBlue"
        title="In-demand Document Translation Services in Denver"
        para="Don’t you want to partner with the best? Tomedes has provides quality and accurate services for all translation projects, including these in-demand services:"
        data={DenverData}
      />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="Translation services every major industry in Denver"
        details="Tomedes is trusted by Google, Android, and Fortune 500 companies alike. Put your trust in Tomedes and join our growing number of clients."
        contactUs={
          <Link
            to="/blog"
            className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="	https://skins.tomedes.com/frontend/images/location_new/cta_dallas.webp"
        translationAt="for a Translator in Denver, CO?"
        detail="Certified translators are just one button away. Get started to work with a native-language translator who can translate your work for every industry. If you need a translator in Denver, Colorado, get in touch with Tomedes. We respond in 30 minutes."
        location="Denver"
        countryName="USA"
      />
      <SpeceficTranslation
        getStarted
        SecondWhite=" Translation Services You Can Rely On"
        backgroundCol="bg-darkBlue"
        ColorHead="Professional"
        headColor="text-lightBlue"
        Content="Tomedes translation company is all about translations and more: we have solutions that can help eliminate language barriers in Denver communities by bridging the gap with translation. You’ll be reaching out to 600,000 people in Denver with limited English proficiency. Tomedes’ client satisfaction rate of 97% marks our dedication to our clients. Add to that our dedicated 24/7 customer support: it’s true that the client is at the heart of our philosophy."
      />
      <Popular
        backgroundCol="bg-midBlue"
        bottomBorderText
        languageCount="Translation Services in Over 120 Languages and 950+ Language Pairs"
        details="Aside from being industry experts, Tomedes translators are highly skilled at their languages and are verified native-language speakers. Here are the most popular languages in Denver:"
        bottomHeading="Popular Languages in Denver"
        location=""
        data={LanguagesInDenver}
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
