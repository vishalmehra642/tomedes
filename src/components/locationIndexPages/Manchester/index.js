import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import LocationBanner from "components/locationBanner/index";
import { CommonManchesterData } from "components/locationIndexPages/Manchester/common-config";
import { LanguagesInManchester } from "components/locationIndexPages/Manchester/config";
import { MoreLanguageServices } from "components/locationIndexPages/Manchester/common-config";
import WhatChooseUs from "components/homepage/whyChooseUs";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import TranslateAgency from "components/homepage/translateAgency";
import TranslationServiceOneTwenty from "components/LocationReusableComp/translation-service-in-120";

export default function Manchester() {
  return (
    <>
      <LocationBanner
        title="Manchester Translation Services"
        content="Tomedes Translation Agency is committed to providing quality translation, localization and interpretation services for the Manchester area. Our global network of industry professionals can accommodate translation services in over 120 languages and 950+ language pairs. All our translation projects automatically come with a 1-year guarantee, speedy delivery, and 24/7 support. What are you waiting for? Contact us today."
        formOrangeHead="Get in touch "
        formWhiteHead="  with our translation agency"
      />
      <EmailerLocation />

      <TranslateAgency
        BackgroundCol="bg-darkBlue"
        head="Your Trusted Translation Company in"
        colorHead="Manchester"
        content="Have you been waiting for the right translation company in Manchester that you can trust? Put your trust in Tomedes. In Manchester, we can help you gain access to 150 languages spoken by Manchester residents. Tomedes is trusted by Google, Android, and other Fortune 500 companies, such as:"
      />

      <CertifiedLocation
        fTitle="Authentic"
        fTitleColor="text-orange"
        tTitle="Certified Translation Services"
        para=" Tomedes provides certified translations that are faithful and authentic representations of the original document. Our certified translation services make use of certified translators, who translate for official documents sent in to UK institutions and abroad. We make sure to assist in all aspects of your application procedures, aside from providing certified translations."
        backgroundCol="bg-midBlue"
      />

      <CommonUse
        title="Popular Document Translation Services in Manchester"
        para="Are you looking for popular translation services in Manchester? We accommodate the following services:"
        details=" There’s a variety of languages available for Dallas residents, from over 120 languages and 950+ language pairs. Here are the most popular languages for translation jobs in Dallas, Texas:"
        backgroundCol="bg-darkBlue"
        data={CommonManchesterData}
      />
      <LookingTranslator
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_manchester.webp"
        translationAt="Looking for a Translation Company in Manchester?"
        detail="Tired of looking for a translation company? Tomedes is here for your personal or corporate needs. Our client satisfaction rate of 97% makes us a popular choice for Manchester residents, with Tomedes being rated 4.8 out of 5 stars. Start now."
        location="Manchester"
        countryName="England"
      />

      <CommonUse
        title="More Language Services"
     
        backgroundCol="bg-darkBlue"
        data={MoreLanguageServices}
      />

      <ServicesGrid
        backgroundCol="bg-midBlue"
        heading="Translation Services Made for Every industry"
        details="Tomedes can provide translation services for every industry in Manchester. We provide native-language translators who are also industry experts. Tomedes is devoted to providing accurate, quality, and top-of-the-line translation services in various fields of expertise."
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
        backgroundCol="bg-darkBlue"
        languageCount="Multiple Supported Languages"
        bottomHeading="Popular Languages in Manchester"
        data={LanguagesInManchester}
      />

      <TranslationServiceOneTwenty
        backgroundCol="bg-midBlue"
        textColor="text-orange"
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}
