import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TranslateAgency from "components/homepage/translateAgency";
import CommonUse from "components/LocationReusableComp/commonuse";
import { BostonData } from "components/locationIndexPages/boston/config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import {
  TranslationInBoston,
  LanguagesInBoston,
} from "components/locationIndexPages/boston/config";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
const index = () => {
  return (
    <>
      <LocationBanner
        title="Boston Translation Services"
        content="Have you been searching for the best translation services in Boston, Massachusetts? Your search is over. Tomedes translation company has been supporting businesses and individuals in Boston in 120+ languages for more than a decade now. Click the button below for a quote, no commitment. "
        formOrangeHead="Get in touch  "
        formWhiteHead=" with our translation company"
      />
      <EmailerLocation />
      <TranslateAgency />
      <CommonUse
        backgroundCol="bg-midBlue"
        title="Common Uses of Our Translation Services in Atlanta, GA"
        para="In Atlanta, a translation company may be hard to find, especially one that has diversified offerings that fit your needs. Among of our many translation services, here are the common use cases:"
        data={BostonData}
      />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="Translation Services Made for Every"
        details="Do you want the best for your business? Here are the top business industries in Atlanta that Tomedes supports:"
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
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_boston.webp"
        translationAt="for a Translator in Boston?"
        detail="A Boston translator is just a call away at Tomedes. Your translations will be secured and private in the process, as well as certified and authenticated in the output. If you’re in need of a translator in Boston, call Tomedes. We’re available 24/7 and we respond in 30 minutes."
        location="Boston "
        countryName="USA"
      />
      <Popular
        backgroundCol="bg-darkBlue"
        languageCount="Popular Translation Services in Boston"
        bottomHeading="Certified Translation Services"
        bottomDetails="Tomedes translation agency in Boston can make sure you provide the necessary certified translations for all your applications or processes. This means that translations must be certified by a certified translator to ensure that the translations follow particular procedures. For example, here are some of the certified translation services for Boston:"
        location="Atlanta"
        data={TranslationInBoston}
      />
      <Popular
        bottomBorderText
        backgroundCol="bg-midBlue"
        languageCount="Translation Services in 120 Languages and 950+ Language Pairs"
        details="Tomedes knows native translators are the best translators. We’ve handpicked translators all over the world to translate these popular languages in Boston:"
        bottomHeading="Popular Languages in"
        bottomDetails="Tomedes translation agency in Boston can make sure you provide the necessary certified translations for all your applications or processes. This means that translations must be certified by a certified translator to ensure that the translations follow particular procedures. For example, here are some of the certified translation services for Boston:"
        location="Boston"
        data={LanguagesInBoston}
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
};

export default index;
