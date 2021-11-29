import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import CommonUse from "components/LocationReusableComp/commonuse";
import { HoustonData, LanguagesInHouston } from "./config";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="Translation Services in Houston"
        content="Are you looking for accurate and quality translation services in Houston? Tomedes translation company knows that you value authenticity in translation, localization, interpretation, and document translation services. Tomedes offers a one-year guarantee on all translation services, with a 24/7 availability, and rapid delivery. You’ll be hard-pressed to find a better translation company."
        formOrangeHead="Get in touch"
        formWhiteHead="with our translation company"
      />
      <EmailerLocation />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="A Translation Agency With Expertise In Varied Industries"
        details="Tomedes translation company is an industry leader precisely because we’re able to support almost all industries, whether it be in the medical, financial, technical and legal fields. From businesses to individual clients in these fields and more, Tomedes can broaden your horizons."
        contactUs={
          <Link
            to="/blog"
            className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />
      <TrustedTranslation
        backgroundCol="bg-midBlue"
        headColor="text-lightBlue"
        ColorHead="Certified"
        SecondWhite="Translation Services"
        Content="Our certified translation services in Houston can provide services for your university as well. If you need translation for your university documents, we can certify and authenticate so that these certified translations will be accepted into all universities, institutions, and governments. There’s no need to worry about your university needs."
        bottomContent="At the same time, if you’re a business needing certified translation services in Houston for your documents, Tomedes is certified by the American Translator’s Association. This makes it easier to grow your business and smooth your global operations. If you’re ready, Tomedes is here to make it happen."
      />
      <CommonUse
        backgroundCol="bg-houston-bg"
        title="Our Translation Services in Houston"
        para="Tomedes is rightly called one of the best translation services in Houston because of the wide variety of services available, including:"
        data={HoustonData}
      />
      <TrustedTranslation
        backgroundCol="bg-midBlue"
        headColor="text-orange"
        ColorHead="More"
        SecondWhite="Translation Services Available"
        Content="
        If you’re tired of searching for “translations near me,” Tomedes has a wide range of translation services available, including website translation services and marketing translation services. If you’re searching for the most relevant translation services in Houston, TX for you, Tomedes is here. We respond within 30 minutes, any time, at all times."
        getStarted
      />
      <SpeceficTranslation
        backgroundCol="bg-darkBlue"
        FirstWhite="A"
        ColorHead="Translation"
        SecondWhite="Company In Houston You  Can Count On"
        headColor="text-lightBlue"
        Content="There are more than 145 different languages spoken in the Houston area alone. That’s why it might be easy to get lost in the cacophony. Make sure your voice is heard, through professional translation services in Houston that will extend your business to new horizons. Our client satisfaction rate is 97%, and we’re trusted by Android, Google, and other Fortune 500 companies. Choose the best. Choose Tomedes."
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_houston.webp"
        translationAt="for a Certified Translator in Houston?"
        detail="With more than just translations, Tomedes prides itself on a network of certified translators in Houston. Our thousands of translators are available throughout the world, to make sure your translations are done by native speakers."
        location="Houston"
        countryName="USA"
      />
      <Popular
        backgroundCol="bg-darkBlue"
        bottomBorderText
        languageCount="Translation Services in more than 120 Languages and 950+ Language pairs"
        details="Tomedes’ translators are versed in two or more multiregional languages, making them a perfect fit for your needs. Here are popular languages used in the Houston area which we specialize in:"
        bottomHeading="Popular Languages in Houston"
        location=""
        data={LanguagesInHouston}
      />
      <WhatChooseUs backgroundCol="bg-midBlue" />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}

export default index;
