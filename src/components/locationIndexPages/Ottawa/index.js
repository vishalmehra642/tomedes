import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import LocationBanner from "components/locationBanner/index";
import { CommonUsesData } from "components/locationIndexPages/Ottawa/common-config";
import { CommonUsesDataSecond } from "components/locationIndexPages/Ottawa/common-config";
import { LanguagesInOttawa } from "components/locationIndexPages/Ottawa/config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import TranslateAgency from "components/homepage/translateAgency";
import WhatChooseUs from "components/homepage/whyChooseUs";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";

export default function Ottawa() {
  return (
    <>
      <LocationBanner
        title="Ottawa Translation Services"
        content="If you’re looking for translation services in Ottawa, it’s a good thing Tomedes is here. Tomedes, a leading translation agency in Ottawa, has been providing translation, localization, and interpretation services since 2007. We support over 120 languages and 950+ language pairs, with rapid delivery, a 1-year guarantee, and 24/7 customer support."
        formOrangeHead="Get in touch "
        formWhiteHead=" with a certified translator"
      />
      <EmailerLocation />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="Our Translation Agency is Certified for All Industries"
        details="Tomedes translation agency is certified to provide certified translation services faithful to the original document. Our certified translators undergo a rigorous process of selection and they are industry experts as well of their various industries."
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
        title="Popular Translation Services in Ottawa"
        para="Any type of document can be guaranteed certified translations for acceptance in almost every educational, legal, or government institution. Here are the most popular translation services in Ottawa:"
        BBH="Certified Translation Services"
        bottomBorderText
        data={CommonUsesData}
        backgroundCol="bg-midBlue"
      />
      <CommonUse
        backgroundCol="bg-midBlue"
        data={CommonUsesDataSecond}
        bottomBorderText
        BBH="Document Translation Services"
      />
      <TrustedTranslation
        FirstWhite=""
        headColor="text-lightBlue"
        ColorHead="More"
        SecondWhite=" Available Translation Services"
        Content="If you didn’t see your specific translation service on the list, never fear. There are much more translation services that Tomedes offers, including website translation and localization, marketing translation, and interpretation services."
        getStarted
      />

      <LookingTranslator
        picture="		https://skins.tomedes.com/frontend/images/location_new/cta_ottawa.webp"
        translationAt=" for a Certified Translator in Ottawa?"
        detail="A certified translator is just one button away at Tomedes. All our translators are native-language translators, as well as industry experts. Tomedes is key to authentic, faithful and certified documents. Give us a call and we respond in 30 minutes."
        location="Ottawa"
        countryName="Canada"
      />
      <TranslateAgency
        BackgroundCol="bg-darkBlue"
        head="A Translation Company You Can"
        colorHead="Trust"
        content="Tomedes places the client at the heart of our philosophy. That’s why our client satisfaction rate is 97% and our reviews place us at 4.8 out of 5 stars. We provide solutions for your professional and personal needs that’s in line with industry standards. Add to that dedicated project managers and a full-time 24/7 customer support line, and you have a golden opportunity. So contact us today."
      />

      <Popular
        bottomBorderText
        languageCount="Translation Services in over 120 Languages and 950+ Language Pairs"
        details=" Out of over 120 languages and 950+ language pairs, here are the most popular languages at Tomedes in the Ottawa region:"
        bottomHeading="Popular Languages in "
        location="Ottawa"
        data={LanguagesInOttawa}
        footerTitle="More Supported Languages"
        footerDetails="We support over 950 language pairs from over 120 languages. This means your language will be available for use. What’s stopping you from going global? Reach out now."
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />

      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}
