import Reviews from "components/homepage/reviews";
import TranslateAgency from "components/homepage/translateAgency";
import TranslationServices from "components/homepage/translationServices";
import WhatChooseUs from "components/homepage/whyChooseUs";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import { LanguagesInSydney } from "./config";
import { CommonSydneyData } from "./common-config";
import React from "react";
import CommonUse from "components/LocationReusableComp/commonuse";
import CertifiedLocation from "components/LocationReusableComp/certified";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LocationBanner from 'components/locationBanner/index'

export default function index() {
  return (
    <div>
    <LocationBanner 
    title="Sydney Translation Services - NAATI Certified"
    content="At Tomedes Translation Services in Sydney, we pride ourselves on our network of NAATI Certified translators. We broaden the scope of our translation services through certified translation services authorized by NAATI. Our extensive list of languages include over 120 languages and 950+ language pairs. We support this with a 24/7 customer support line, rapid delivery, and a 1-year guarantee."
    formOrangeHead="Get in touch  "
    formWhiteHead=" with our translation company now"
    />
      <EmailerLocation/>
      <CertifiedLocation 
      backgroundCol="bg-darkBlue"
      fTitle="Get your official documents translated by our"
      fTitleColor="text-white"
      sTitle=" NAATI "
      sTitleColor="text-lightBlue"
      tTitle="certified translatorse"
      tTitleColor="text-white"
      para="Our global community of thousands of professionals include NAATI certified translators. Their expertise ranges from almost any industry imaginable. Tomedes provides NAATI certified translation services that make sure your official translations reliably reflect the original document. Our translators can create translations for use in any institution in Sydney and abroad."
      />
      <CommonUse 
      backgroundCol="bg-midBlue"
      title="Document translation services tailored for the need of Sydney"
      para=""
      data={CommonSydneyData}
      />
      <LookingTranslator
      picture="https://skins.tomedes.com/frontend/images/location_new/cta_banner_sydney.webp"
        backgroundCol="bg-darkBlue"
        translationAt="for a NAATI certified document translator in Sydney?
"
        detail="A NAATI certified document translator is only a call away at Tomedes. Our native-langauge translators can provide accurate, quality, and fast translations at Tomedes, supporting you by certifying your documents according to NAATI standards."
        location="Sydney"
        countryName=", Australia"
      />
      <Popular
        backgroundCol="bg-midBlue"
        languageCount="Translation Services for Every Major Language in Sydney"
        details=" Tomedes supports a wide range of languages and language pairings. For the convenience of our clients in Sydney we hand-picked a few of our most sought after languages. We usually translate to and from the following languages:"
        data={LanguagesInSydney}
        
      />
      <TrustedTranslation
      backgroundCol="bg-darkBlue"
        FirstWhite=""
        headColor="text-lightBlue"
        ColorHead="Looking"
        SecondWhite="For More
        Language Pairings?"
        Content="Did you know that there are over 950+ language pairings at Tomedes? If you’re thinking of other languages for pairs, such as Hindi and German, Tagalog and Korean, we have the solutions at our fingertips. Get started now."
        getStarted
      />
      <TranslateAgency
        BackgroundCol="bg-midBlue"
        head="Your Trusted Translation Company in"
        colorHead="Sydney"
        content="Tomedes is more than just a translation company. We provide language solutions for you or your business that can easily reach the 12,859 limited English-speakers in Sydney. We do this through client-centered translation services, as shown by our client satisfaction rate of 97%. Tomedes is rated 4.8 out of 5 stars, and we can assist you with our 24/7 customer support. Reach out now."
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </div>
  );
}
