import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import CommonUse from "components/LocationReusableComp/commonuse";
import { DallasData, LanguagesInDallas } from "./config";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";

function index() {
  return (
    <>
      <LocationBanner
        title="Dallas Translation Services"
        content="Have you tried searching for translation services in Dallas, but couldn’t find the right one? Tomedes translation company is here for you and can accommodate all your localizations, interpretations, and translations in Dallas. With our 120 languages and 950+ language pairs, all translation services come with a 1-year guarantee, rapid delivery, and 24/7 customer support. So you don’t have to worry.    "
        formOrangeHead="Contact"
        formWhiteHead="our translation company now"
      />
      <EmailerLocation />
      <TrustedTranslation
        headColor="text-lightBlue"
        ColorHead="Certified"
        SecondWhite="Translation Services"
        Content="Tomedes' certified translation services in Dallas connect you with a global network of professional certified translators who can provide you with authentic translations faithful to the original. Certified translations can prepare your business for international expansion, by allowing you to have an easier time with internal and external documents."
        bottomContent="Furthermore, Tomedes is authorized by the American Translator's Association. You're assured that your certified translations will be acceptable for all national and international institutions. Translation jobs in Dallas, TX should undergo the proper procedures for certifications. Good thing Tomedes certified translators do."
      />
      <CommonUse
        backgroundCol="bg-midBlue"
        title="Document Translation Services for
      your every need"
        para="Document translations are easily some of the most popular translation services out there. Tomedes has experience in translating documents for almost every industry out there, including:"
        data={DallasData}
      />
      <SpeceficTranslation
        getStarted
        backgroundCol="bg-darkBlue"
        FirstWhite="Translation services made for every"
        ColorHead="medium"
        headColor="text-lightBlue"
        Content="Didn't see your specific translation service? Never fear. Tomedes translates and localizes websites, applications, games, transcripts, and almost any translation jobs in Dallas you can think of. Tomedes translators are native-speakers of two or more languages and they're hand-picked from all over the world. Translation services in Dallas, Texas have never been more valuable."
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="	https://skins.tomedes.com/frontend/images/location_new/cta_dallas.webp"
        translationAt="for a translator in Dallas?"
        detail="Dallas translators are one call away for Tomedes' translation services in Dallas. You're assured at Tomedes that your translations will be native translators from the region you're targeting. If you're in need of a translator in Dallas, they're available 24/7, and we respond within 30 minutes."
        location="Dallas"
        countryName="USA"
      />
      <Popular
        backgroundCol="bg-darkBlue"
        bottomBorderText
        languageCount="Wide range of languages available for
      Dallas residents"
        details="There's a variety of languages available for Dallas residents, from over 120 languages and 950+ language pairs. Here are the most popular languages for translation jobs in Dallas, Texas:"
        bottomHeading="Popular languages in Dallas"
        location=""
        data={LanguagesInDallas}
      />
      <TrustedTranslation
        backgroundCol="bg-midBlue"
        headColor="text-orange"
        ColorHead="A translation"
        SecondWhite="company you can count on"
        Content="But Tomedes is more than just translations--we provide solutions that eliminate language barriers within the 7.5 million non-speaking people in Dallas. We can make sure you reach these huge communities in their own languages.        "
        bottomContent="Our client satisfaction rate is 97%, reflecting that the client is at the heart of our philosophy. We're depended upon by Android, Google, and other Fortune 500 companies. Now it's your turn to trust Tomedes."
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
