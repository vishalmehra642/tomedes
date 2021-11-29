import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import LookingTranslator from "components/LocationReusableComp/looking";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Popular from "components/LocationReusableComp/popular";
import { LanguagesInPhiladelphia, TranslationInPhiladelphia } from "./config";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

function index() {
  return (
    <>
      <LocationBanner
        title="Philadelphia Translation Services"
        content="Are you searching for accurate translation services in Philadelphia? Tomedes translation company can assure you of translation, localization, and interpreting services in over 120 languages and 950+ language pairs. On all projects, Tomedes offers a 1-year guarantee, rapid delivery, and 24/7 customer support. Why not broaden your horizons with Tomedes?"
        formOrangeHead="Get in touch "
        formWhiteHead="with our translation company"
      />
      <EmailerLocation />
      <TrustedTranslation
        backgroundCol="bg-darkBlue"
        headColor="text-lightBlue"
        ColorHead="Certified"
        SecondWhite="Translation Services in Philadelphia"
        Content="Certified translations in Philadelphia have never been easier. If you’re looking to certify your documents to pass onto official institutions, Tomedes is here to help. Our certified translators will translate your documents according to their native language. Tomedes is authorized by the American Translator’s Association to make your translations as certified authentic reproductions of the original documents."
        bottomContent="If you’re a business or individual who needs certified translations, Tomedes Translation Services makes your university, immigration, and business application documents easier with these types of hard-to-find translations. It certainly makes growing your business beyond international borders easier. That’s how Tomedes broadens your horizons."
      />
      <ServicesGrid
        backgroundCol="bg-midBlue"
        heading="A Translation Agency with Expertise in Varied Industries"
        details=" "
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
        details="Are you thinking about translation services in Philadelphia, PA? Then partner with the best, Tomedes Translation Services."
        backgroundCol="bg-darkBlue"
        languageCount="Translation Services for your Every Need"
        bottomHeading="In demand translation services in Philadelphia"
        footerTitle="More Translation Services Available"
        footerDetails="If you’re looking for help in international SEO services, content marketing and advertising services, dual citizenship translations (in Italian or any other language), university interpreting services, and more, Tomedes can bring multifaceted linguistic rigor to any undertaking."
        location="Atlanta"
        data={TranslationInPhiladelphia}
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_melbourne.webp"
        translationAt="for a translator in Philadelphia?"
        detail="Tired of looking at the list of Philadelphia translation companies for a reliable translator? At Tomedes, your translations will surely be done by a native translator, and an industry expert, at that. Plus, our client satisfaction rate is at 97%, so you’ll know you’re in good hands. A Tomedes translator is just a call away, so call now: our response time is within 30 minutes."
        location="Philadelphia"
        countryName="USA"
      />
      <TrustedTranslation
        FirstWhite="The "
        backgroundCol="bg-darkBlue"
        headColor="text-lightBlue"
        ColorHead="Translation"
        SecondWhite="Company You Can Rely On"
        Content="
        In Philadelphia, translation is necessary for the more than 1.3 million who do not speak English, according to the US Census. Whether it’s immigration translation services for the USCIS that you need, or an app localized to your target region and language, Tomedes translation agency in Philadelphia can accommodate your needs. We can bridge the gap between the 1.3 million residents and your company. Aside from that, translation can help your company go beyond Philadelphia borders to expand internationally. Contact us today."
      />
      <Popular
        footerTitle="More Languages Available"
        footerDetails="Didn’t see your required language? We support more than 120 languages and 950+ language pairs, including Greek, Tigrinya, French, Haitian Creole, and much, much more."
        backgroundCol="bg-midBlue"
        bottomBorderText
        languageCount="Translation services for every language in Philadelphia"
        details="For your multilingual needs, Tomedes can assist you every step of the way in your translations in Philadelphia. Here are some of our most popular languages:"
        bottomHeading="Popular Languages"
        location=""
        data={LanguagesInPhiladelphia}
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
