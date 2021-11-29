import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import LocationBanner from "components/locationBanner/index";
import { CommonUsesData } from "components/locationIndexPages/Seattle/common-config";
import { LanguagesInSeattle } from "components/locationIndexPages/Seattle/config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import WhatChooseUs from "components/homepage/whyChooseUs";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";

export default function Seattle() {
  return (
    <>
      <LocationBanner
        title="Seattle Translation Services"
        content="Looking for Seattle translation services? You’re in luck. Tomedes translation agency is known in Seattle for exceptional translation services in over 120 languages and 950+ language pairs, for nearly two decades. All translation services in Seattle have a 1-year guarantee, rapid delivery, 24/7 availability, and the knowledge that you, the client, is at the heart of our philosophy. So get started now."
        formOrangeHead="Reach out "
        formWhiteHead=" to our translation agency"
      />
      <EmailerLocation />
      <CertifiedLocation
        backgroundCol="bg-darkBlue"
        fTitle="A Translation Agency"
        sTitle=" Tailor-Fitted "
        sTitleColor="text-lightBlue"
        tTitle="For You"
        para="If you’re looking for an international company in Seattle, look no further than Tomedes. There are 110,579 English language learners in Seattle, and it’s difficult to imagine not reaching out to these demographics, these communities, and beyond. Tomedes can help in your international expansion precisely because you, as the client, are at the heart of our philosophy. Our clients have rated us 4.8 out of 5 stars, with a steady 97% client satisfaction rate. Tomedes is tailor-fitted for your industries, your business needs, and your individual needs. Trust Tomedes to broaden your horizons."
      />

      <ServicesGrid
        backgroundCol="bg-midBlue"
        heading="A Translation Company for Every Industry "
        details="In Seattle, translation is important for many of its industries. As one of the best translation companies in Seattle, Tomedes offers support for these popular industries:"
        colorComp="Imaginable"
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
        languageCount="Our Translation Services Support 120 Languages and 950+ Language Pairs"
        details=" At Tomedes, native translators handle your work for optimal translations in Seattle and beyond. Here are the most popular languages they’ve worked with:"
        bottomHeading="Popular Languages in "
        location="Seattle"
        data={LanguagesInSeattle}
        BBH="More Available Languages"
        BBC="Didn’t see your language on the list? These are only the most popular languages out of over 120 languages, Tomedes also has more languages available. This includes Spanish, Tagalog, Korean, and more. Just make sure you contact us for more information and access our list of languages."
        bottomBorderText
        footerTitle="More Available Languages"
        footerDetails="Didn’t see your language on the list? These are only the most popular languages out of over 120 languages, Tomedes also has more languages available. This includes Spanish, Tagalog, Korean, and more. Just make sure you contact us for more information and access our list of languages."
      />

      <LookingTranslator
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_seattle.webp"
        translationAt=" for a Translation Agency in Seattle?"
        detail="A Seattle translator is at your fingertips, with Tomedes. Tomedes makes sure you can get your translations on-demand, and delivered on-time. Your translation projects will be secured and private. If you’re interested in translations in the Seattle area, give us a call. We’re available 24/7, and we respond in 30 minutes."
        location="Seattle,"
        countryName="USA"
      />

      <CommonUse
        title="In-demand Translation Services in Seattle"
        sTitle=""
        para="Tomedes supports these in-demand translation services and more:"
        bottomBorderText
        data={CommonUsesData}
        backgroundCol="bg-darkBlue"
      />

      <TrustedTranslation
        backgroundCol="bg-midBlue"
        FirstWhite=""
        headColor="text-orange"
        ColorHead="More"
        SecondWhite="  Translation Services Available"
        Content="Tomedes also provides translation services like website localization, interpreting, and marketing translation, for businesses and for individual clients. Aside from that, we support rare languages and rare industries. Reach out to us today to get a detailed list of services we provide."
        getStarted
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />

      <Reviews backgroundCol="bg-midBlue" />

      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}
