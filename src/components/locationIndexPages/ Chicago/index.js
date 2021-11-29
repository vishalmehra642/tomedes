import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import CommonUse from "components/LocationReusableComp/commonuse";
import {
  ChicagoData,
  LanguagesInChicago,
} from "components/locationIndexPages/ Chicago/config";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
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
        title="Chicago Translation Services"
        content="Are you searching for high-quality translation services within the Chicago area? Tomedes translation agency in Chicago can assist you with all your translation, interpretation, and localization needs. With our over 120 languages and 950+ language pairs, Tomedes offers a 1-year guarantee, rapid delivery, and 24/7 availability. It proves that the client is truly at the heart of our philosophy."
        formOrangeHead="Reach out"
        formWhiteHead="to our translation company"
      />
      <EmailerLocation />
      <TrustedTranslation
        headColor="text-lightBlue"
        ColorHead="Certified"
        SecondWhite="Translation Services in Chicago"
        Content="Tomedes translation company in Chicago can make sure that all of your documents are certified translations. What does that mean? It means that translations must be certified by a certified translator, and must accurately reflect the original. Certified translations are necessary for almost all official institutions accepting translations."
        getStarted
        bottomContent="That’s why if you’re a business or individual needing certified translation, Tomedes is certified by the American Translator’s Association. This certainly makes it easier to grow your business internally or internationally, through translation. At Tomedes, we broaden your horizons."
      />
      <CommonUse
        backgroundCol="bg-midBlue"
        title="Our Translation Services"
        para="Shouldn't you partner with the best? Tomedes is rightly so, because of the wide variety of services available:"
        data={ChicagoData}
      />
      <TrustedTranslation
        headColor="text-orange"
        ColorHead="More "
        SecondWhite="Translation Services Available"
        Content="Tomedes translation company is available for other translation services such as marketing translation services, interpreting translation services, and other services your business needs. Our multilingual Chicago interpreters, localizers, and translators have you covered. Contact us for a quote."
        getStarted
      />
      <LookingTranslator
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_chicago.webp"
        translationAt=" a Certified Translator in Chicago?"
        detail="Certified translators in Chicago are just a call away at Tomedes. Your translations will be authenticated for use in any institution. And you’ll be sure to work with a native-langauge translator. If you’re in need of a certified translator in Chicago, they’re available 24/7, and we respond within 30 minutes."
        location="Chicago"
        countryName="USA"
      />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        colorComp=""
        heading="A Translation Agency You Can Depend Upon"
        details="Tomedes translation agency has more than just translations at its fingertips--it has solutions that can bridge the gap between 35.8% of non-English speaking communities in Chicago. Tomedes can make sure you reach these demographics in their own languages. Our client satisfaction rate is 97%, truly reflecting that the client is at the heart of our philosophy. We’re depended upon by Android, Google, other Fortune 500 companies. Why not put your trust in Tomedes too?"
        contactUs={
          <Link
            to="/blog"
            className="bg-orange   text-white font-opensans rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />
      <Popular
        bottomBorderText
        languageCount="Translation Services in more than 120 languages and 950+ language pairs"
        details=" Tomedes' translators native-language translators, handpicked from all over the world, for your multilingual needs. Here are the most popular languages we're able to translate from in Chicago:"
        bottomHeading="Popular Languages in Chicago"
        location=""
        data={LanguagesInChicago}
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default index;
