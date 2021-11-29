import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";
import Popular from "components/LocationReusableComp/popular";
import { DemandsInNewYork, LanguagesInNewYork } from "./config";
import LookingTranslator from "components/LocationReusableComp/looking";
import { Link } from "gatsby";
import ServicesGrid from "components/homepage/servicesGrid";
import TranslateAgency from "components/homepage/translateAgency";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="New York City Translation Services"
        content="Are you on the lookout for translation services in NYC? We've got you covered. Tomedes provides certified translation, localization, and interpretation services in 120+ languages. That's with a 1-year guarantee, 24/7 availability, and rapid delivery. Our translation has been here for more than a decade, and it's no wonder why. In NYC, translation services have never been more convenient."
        formOrangeHead="Looking "
        formWhiteHead=" for a translator in NYC?"
      />
      <EmailerLocation />
      <TrustedTranslation
        backgroundCol="bg-darkBlue"
        headColor="text-lightBlue"
        ColorHead=""
        SecondWhite="One of the Certified Translation Services in New York City"
        Content="Have you been searching for a certified translation company in New York but want the best one? Tomedes specializes in the metropolitan area as one of the leading translation agencies in NYC."
        bottomContent="The language barriers that many New Yorkers face may be offset by a certified translator in NYC. Certified translations in NYC at Tomedes are certified by the American Translator's Association and are guaranteed to be accepted by all educational, institutional, and governing bodies. If you're looking for certified translation services in NYC, look no further."
      />
      <SpeceficTranslation
        backgroundCol="bg-midBlue"
        FirstWhite="The Best Translation Agency in"
        ColorHead="NYC"
        headColor="text-orange"
        Content="NYC has the best of the best when it comes to translation agencies in New York. That's why Tomedes is dedicated to being one of the best translation companies in New York. In whatever language you need, New Yorkers in New York translate your documents and localize your websites, for the most optimal translation work all over NYC."
      />
      <Popular
        backgroundCol="bg-darkBlue"
        footerTitle="More Translation Services Available"
        footerDetails="For more translation services in New York, like advertising translations, birth certificate translations, and notarized translations, reach out to Tomedes today."
        bottomBorderText
        languageCount="Our Translation Services in New York"
        details="Translations in New York have never been easier. Our popular translation services include:"
        bottomHeading="Sought-After Translation Services in NYC"
        location=""
        data={LanguagesInNewYork}
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_nyc.webp"
        translationAt=" for Translation Services in NYC?"
        detail="As a New York City business, Tomedes translation services understands your global business needs in and outside of NYC. We're working round the clock to serve our clients. Here's your chance for quality translation in New York."
        location="New York"
        countryName="CITY,USA"
      />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="A Translation Company Skillful in All Major Industries"
        details="Translation services in New York City will range from a variety of industries. Tomedes accommodates industries in New York such as banking and finance, technology, luxury, medical, legal, government, and more, providing accuracy and quality to every translation project. Here are the industries for the greater New York City region."
        contactUs={
          <Link
            to="/blog"
            className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />
      <Popular
        backgroundCol="bg-midBlue"
        footerTitle="More Supported Languages"
        footerDetails="According to the New York State, 2.3 million people have limited English proficiency. If you're looking for other languages, contact Tomedes."
        bottomBorderText
        languageCount="Translation Services in over 120 Languages"
        details="Translations in New York have never been easier. Our popular translation services include:"
        bottomHeading="In Demand Languages in NYC"
        location=""
        data={DemandsInNewYork}
      />
      <TranslateAgency backgroundCol="bg-darkBlue" />
      <WhatChooseUs backgroundCol="bg-midBlue" />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}

export default index;
