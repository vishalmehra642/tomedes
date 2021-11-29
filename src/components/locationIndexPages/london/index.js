import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TranslateAgency from "components/homepage/translateAgency";
import PopularGrid from "components/LocationReusableComp/PopularGrid";
import { DemandInChicago, LanguagesInLondon } from "./config";
import LookingTranslator from "components/LocationReusableComp/looking";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="London Translation Services"
        content="Have you been searching for translation services in London, to no avail? Good thing Tomedes is here. Tomedes Translation Agency in London provides translation, localization, and interpretation services in over 120 languages and 950+ language pairs. Tomedes equips you with language solutions in addition to agile delivery, a 1-year guarantee, and 24/7 customer support. So, get in touch today."
        formOrangeHead="Get in touch "
        formWhiteHead="with our translation company"
      />
      <EmailerLocation />
      <TranslateAgency />
      <PopularGrid
        backgroundCol="bg-midBlue"
        titleColor="text-orange"
        bottomBorderText
        languageCount="Our Interpretation and Translation Services in"
        location="London"
        data={LanguagesInLondon}
      />
      <LookingTranslator
        backgroundCol="bg-darkBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_london.webp"
        translationAt="for the right translation agency in London?"
        detail="Are you tired of trying to find the right translation agency in London? Never fear, Tomedes is here. We provide native-language translators who are also industry experts. Tomedes is devoted to providing accurate, quality, and top-of-the-line translation services. Give us a call, we respond in 30 minutes."
        location="London"
        countryName="UNITED KINGDOM"
      />
      <ServicesGrid
        backgroundCol="bg-midBlue"
        heading="A Translation Company Made for Every Industry"
        details="Tomedes is trusted by 75,000+ clients globally, which includes Google, Android, and Fortune 500 companies. We can provide translation services made for every industry in London. Join our growing network of clients, in these industries:"
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
        footerTitle="In-demand Languages in London"
        footerDetails="Did you know that there are over 120 languages and 950+ language pairs in the language list of Tomedes?"
        bottomBorderText
        languageCount="Translation Services in 120 languages and 950+ Language Pairs"
        details="Out of over 120 languages and 950+ language pairs, the following languages are the most popular in London:"
        bottomHeading="In-demand Languages in London"
        location=""
        data={DemandInChicago}
      />
      <WhatChooseUs backgroundCol="bg-midBlue" />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}

export default index;
