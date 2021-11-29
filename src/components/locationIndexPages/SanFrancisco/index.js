import React from "react";
import LocationBanner from "components/locationBanner/index";
import EmailerLocation from "components/LocationReusableComp/emailer";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import CommonUse from "components/LocationReusableComp/commonuse";
import { CommonUseData } from "components/locationIndexPages/SanFrancisco/common-config";
import { LanguagesInFrancisco } from "components/locationIndexPages/SanFrancisco/config";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import WhatChooseUs from "components/homepage/whyChooseUs";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import SpeceficTranslation from "components/LocationReusableComp/speceficTranslation";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import TranslateAgency from "components/homepage/translateAgency";

function SanFrancisco() {
  return (
    <>
      <LocationBanner
        title="San Francisco Translation Services"
        content="Are you tired of looking for the right translation services in San Francisco? Then it’s a good thing you’re here. Tomedes translation company is versed in translation, localization, and interpretation, among other services. We provide translation services in over 120 languages and 950+ language pairs, and we equip them all with 24/7 customer service, a 1-year guarantee, and rapid delivery. "
        formOrangeHead="Get in touch"
        formWhiteHead="with our translation company"
      />
      <EmailerLocation />
      <TrustedTranslation
        headColor="text-lightBlue"
        lastHeadColor="text-lightBlue"
        ColorHead=""
        SecondWhite="Translation Services With An Eye On "
        ThirdBlue="Tech"
        Content="There are over 2,000 tech companies in Silicon Valley in the San Francisco Bay Area. Tomedes supports this industry with technologically advanced solutions, including machine translation post editing services. Our MTPE services provide the best of both worlds, with an eye on technological advancements. We also provide and annotate data for AI projects. If you’re a tech company looking to broaden your horizons, choose Tomedes."
        // bottomContent="Furthermore, Tomedes is authorized by the American Translator's Association. You're assured that your certified translations will be acceptable for all national and international institutions. Translation jobs in Dallas, TX should undergo the proper procedures for certifications. Good thing Tomedes certified translators do."
      />
      <ServicesGrid
        backgroundCol="bg-midBlue"
        heading="A Translation Company Proficient in all major industries"
        details="Translations in San Francisco will range from a variety of industries. Tomedes accommodates these industries by providing proficiency, accuracy and quality. Here are the services we usually translate for in San Francisco."
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
        backgroundCol="bg-darkBlue"
        title="In-Demand Translation Services in San Francisco"
        para="Here are the services we usually translate for in San Francisco:"
        data={CommonUseData}
      />
      <TrustedTranslation
        backgroundCol="bg-midBlue"
        headColor="text-orange"
        ColorHead="More "
        SecondWhite="Translation Services Available"
        Content="Didn’t see the translation service you need on the list? Never fear with Tomedes. We can guarantee translation services for marketing purposes and more with our repertoire of languages. You can also count on us to translate and certify documents such as birth certificates, driver’s licenses and immigration documents. Just contact us for more information"
        getStarted
      />
      <SpeceficTranslation
        getStarted
        backgroundCol="bg-darkBlue"
        FirstWhite="Secure and Agile Translation Solutions for"
        ColorHead="Businesses"
        headColor="text-lightBlue"
        Content="Didn't see your specific translation service? Never fear. Tomedes translates and localizes websites, applications, games, transcripts, and almost any translation jobs in Dallas you can think of. Tomedes translators are native-speakers of two or more languages and they're hand-picked from all over the world. Translation services in Dallas, Texas have never been more valuable."
      />
      <LookingTranslator
        backgroundCol="bg-midBlue"
        picture="	https://skins.tomedes.com/frontend/images/location_new/cta_sanfrancisco.webp"
        translationAt="for a reliable translation company in San Francisco?"
        detail="If you’re looking for a reliable translation company in San Francisco, it’s time to contact Tomedes. We provide language services in over 120 languages and 950+ language pairs, and we support almost every industry imaginable. Our translators are available 24/7 and we respond within 20 minutes."
        location="San Francisco"
        countryName=", USA"
      />

      <TranslateAgency
        BackgroundCol="bg-darkBlue"
        head="A Translation Agency You Can  "
        colorHead="Count On"
        content="If you’re looking for a San Francisco translation agency that you can count on, then count on Tomedes. Our client satisfaction rate of 97% proves that the client is at the heart of our philosophy."
      />
      <Popular
        backgroundCol="bg-midBlue"
        bottomBorderText
        footerTitle="More Languages Available"
        footerDetails="If you’re looking for your language and it wasn’t on the list, don’t hesitate to ask. We have over 120 languages to choose from. Here’s the list of languages we accommodate."
        languageCount="Support for Multiple Languages"
        details="Tomedes provides support for multiple languages in over 120 languages and 950+ language pairs in order to broaden your horizons. Here are our most popular languages in the San Francisco area:"
        bottomHeading="Popular languages in San Francisco"
        location=""
        data={LanguagesInFrancisco}
      />

      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />
      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}

export default SanFrancisco;
