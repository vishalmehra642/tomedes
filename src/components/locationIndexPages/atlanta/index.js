import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Network from "components/LocationReusableComp/network";
import Popular from "components/LocationReusableComp/popular";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import LocationBanner from "components/locationBanner/index";
import { CommonUsesData } from "components/LocationReusableComp/config";
import { LanguagesInAtlanta } from "components/locationIndexPages/atlanta/config";
import WhatChooseUs from "components/homepage/whyChooseUs";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

export default function LocationDetail() {
  return (
    <>
      <LocationBanner
        title="Atlanta Translation Services"
        content="If you’re looking for elite translation services in Atlanta, you’ve come to the right place. Tomedes has been here for over ten years and supports translation, localization, and interpretation services in 120+ languages with 1-year guarantee, rapid delivery and 24/7 support. Translations in Atlanta, Georgia can broaden your horizons to new international markets. Why not reach out today?"
        formOrangeHead="Contact "
        formWhiteHead=" our translation company now"
      />
      <EmailerLocation />
      <CertifiedLocation
      backgroundCol="bg-darkBlue"
        fTitle="Certified"
        sTitle="Translation
      Services Atlanta"
        para=" What makes Tomedes one of the best translation companies in
      Atlanta? Tomedes is authenticated by the American Translator’s
      Association. We provide certified translation services that
      certifies your translations’ acceptance in various institutions.
      These include official document translation services for
      certification. Among other languages, we also offer certified
      Spanish translation services. Whether it’s application documents
      you need certified, or your birth certificate, or transcript,
      Tomedes is your go-to for Atlanta translation services."
      />
      <ServicesGrid
        heading="Translation Services Made for Every"
        details="Do you want the best for your business? Here are the top business industries in Atlanta that Tomedes supports:"
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
        title="Common Uses of Our Translation Services in Atlanta, GA"
        para="In Atlanta, a translation company may be hard to find, especially one that has diversified offerings that fit your needs. Among of our many translation services, here are the common use cases:"
        data={CommonUsesData}
      />
      <LookingTranslator
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_atlanta.webp"
        translationAt="for a translator in
      Atlanta?"
        detail="At Tomedes, an Atlanta translator is just a call away. Your
      translations will be equipped with the highest security
      measures, and certified if you choose to. If you’re in need of a
      translator in Atlanta, don't hesitate to contact Tomedes. Our
      support is available 24/7 and we respond in 30 minutes."
        location="Atlanta"
        countryName="USA"
      />
      <WhatChooseUs backgroundCol="bg-darkBlue" />

      <Popular
        bottomBorderText
        languageCount="Over 120 Languages and 950+ Language Pairs Supported"
        details=" There are at least 146 languages spoken in Atlanta homes. Here are
      some of the most popular languages for our translation services:"
        bottomHeading="Popular Languages in"
        location="Atlanta"
        data={LanguagesInAtlanta}
      />
      <TrustedTranslation
        FirstWhite="A"
        headColor="text-lightBlue"
        ColorHead="Trusted"
        SecondWhite="Translation Agency in Atlanta"
        Content="If you’re looking for an elite translation service in Atlanta, Tomedes is here. We support businesses in their international expansion endeavors through our language services. Add to the mix a client satisfaction rate of 97%, which proves that the client is at the heart of our philosophy, and you have a combination of success. Trust Tomedes translation agency to broaden your horizons, wherever you go."
        getStarted
      />
      <Network />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}
