import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Popular from "components/LocationReusableComp/popular";
import { LanguagesInLosAngeles, TranslationInLosAngeles } from "./config";
import LookingTranslator from "components/LocationReusableComp/looking";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="Translation Services in Los Angeles"
        content="Are you looking for high-quality translation services in Los Angeles? Tomedes translation agency provides authentic and certified translation, localization, and interpretation services. Add to that our 1-year guarantee, 24/7 availability, and rapid delivery, and you have unparalleled services you can't find elsewhere."
        formOrangeHead="Get in touch"
        formWhiteHead=" with our translation agency"
      />
      <EmailerLocation />
      <TrustedTranslation
        FirstWhite="One of the  "
        backgroundCol="bg-darkBlue"
        headColor="text-lightBlue"
        ColorHead="Certified"
        bottomContent="Tomedes has been verified by the American Translator's Association, making certified translations easier for your business. If your business is ready for the growth that translation services could offer, LA has plenty in store."
        SecondWhite="Translation Services in Los Angeles"
        Content="
        In a city where more than 185 languages are spoken at home, according to the US Census, you may need translations to communicate with institutions. Our certified translation services can better serve clients in the greater LA area with official translations, certifying and authorizing their use in an educational, institutional, and governmental capacity."
      />
      <ServicesGrid
        backgroundCol="bg-midBlue"
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
      <Popular
        backgroundCol="bg-darkBlue"
        bottomBorderText
        languageCount="Our Translation Services in Los Angeles"
        details="As one of the best translation agencies in Los Angeles, Tomedes provides a range of translation services that will suit your industry needs, such as the following:"
        bottomHeading="In Demand Translation Services in Los Angeles"
        location="Los Angeles"
        data={LanguagesInLosAngeles}
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_losangeles.webp"
        translationAt="for A Translation Agency in Los Angeles?"
        detail="If you're looking for a translation agency in Los Angeles that'll put you first, Tomedes' dedication to the client is unparalleled. The client is at the heart of our philosophy. We want to make sure you choose the best translation service or translation agency. Choose Tomedes today."
        location="Los Angeles"
        countryName="CALIFORNIA, USA"
      />
      <SpeceficTranslation
        backgroundCol="bg-darkBlue"
        FirstWhite="A"
        moreContent="They are knowledgeable about their own specific terminologies that are apt for your business. Supplement that with their mastery of two or more languages, makes our community of professionals our greatest asset. We're trusted by Google, Android, and other Fortune 500 companies."
        lastLine="Put your trust in Tomedes today."
        SecondWhite="Network of Translators in Los Angeles"
        ColorHead="Trusted"
        headColor="text-lightBlue"
        Content="Tomedes' community of thousands of professionals spans the globe. That's why our trusted translators can accommodate any project, anywhere. Our multi-talented, multi-disciplinary project teams include veteran marketers, legal experts, content creators, audio specialists, and more."
      />
      <Popular
        backgroundCol="bg-midBlue"
        bottomBorderText
        languageCount="Translation Services in over 120 Languages and 950+ Language Pairs"
        details="As one of the best translation agencies in Los Angeles, Tomedes is dedicated to providing a range of popular languages in the greater LA area, which include:"
        bottomHeading="Popular Languages in"
        location=" Los Angeles"
        data={TranslationInLosAngeles}
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
