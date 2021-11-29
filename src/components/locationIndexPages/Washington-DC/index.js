import React from "react";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import LocationBanner from "components/locationBanner/index";
import { CommonUsesData } from "components/locationIndexPages/Washington-DC/common-config";
import { LanguagesInWashington } from "components/locationIndexPages/Washington-DC/config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import TranslateAgency from "components/homepage/translateAgency";
import WhatChooseUs from "components/homepage/whyChooseUs";
import { DemandServiceInWashington } from "./config";

export default function WashingtonDc() {
  return (
    <>
      <LocationBanner
        title="Washington DC Translation Services"
        content="Do you need translation services in Washington DC? If so, talk to Tomedes. Our translation company delivers fast, accurate translations in over 120 languages and 950+ language pairs. We support nearly every industry out there with our language solutions you won’t find anywhere else. Why not contact us now for an instant quote?"
        formOrangeHead="Get in touch "
        formWhiteHead=" with a reliable translation company"
      />
      <EmailerLocation />
      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="Translation Services With Expertise in A Multitude of Industries"
        details="Our translators in Washington, DC make it easy for you: whether you're in government, in small business, or in education. Our translators have the industry skills you're looking for, while our translation services have expertise in line with your timescales."
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
        title="Common Industries Serviced in Washington DC"
        para="Our extensive experience covers all of DC's most vital industries. The most common industries we serve in Washington, DC are:"
        bottomBorderText
        data={CommonUsesData}
        backgroundCol="bg-midBlue"
      />

      <LookingTranslator
        backgroundCol="bg-darkBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_washington.webp"
        translationAt=" for a translation company in DC?"
        detail="If you're looking for a translator in Washington, DC, it's time to contact Tomedes. We're available 24/7 to discuss your translation and interpretation needs, and we respond within 30 minutes."
        location="WASHINGTON, DC"
        countryName="USA"
      />

      <Popular
        bottomBorderText
        languageCount="Our Interpretation and Translation Services"
        details=" Whichever interpretation and translation services you need, be it certified or legal, we've got you covered. Here are our in-demand services from our translation agency in Washington, DC:"
        location="In-demand Services in DC"
        data={DemandServiceInWashington}
        footerTitle="More available translation services"
        footerDetails="If you didn't see your translation services in the list, we also provide website localization and translation, app and game localization, and other translation services. Reach out to us and we'll accommodate you in 30 minutes."
      />

      <TranslateAgency
        BackgroundCol="bg-darkBlue"
        head="A trusted translation agency with the confidence of over "
        colorHead="75,000 businesses"
        content="If your business in Washington, DC is looking for a trustworthy translation company, Tomedes should be on the top of your list. We put the client at the heart of our philosophy, which is why we've been rated 4.8 out of 5 stars, with a 97% satisfaction rate. This is because we provide 24/7 customer support, rapid delivery, and a 1-year guarantee. With our NDAs and secure technology in place, we provide peace of mind as a standard. Join Google, Android and other Fortune 500 companies today."
      />

      <Popular
        bottomBorderText
        languageCount="Translation Services in over 120 Languages and 950+ Language Pairs"
        details=" Translation services have never been easier, with more to choose from. At Tomedes, we specialize in these popular languages in Washington, DC:"
        bottomHeading="Popular Languages "
        data={LanguagesInWashington}
        footerTitle="More Languages Available"
        footerDetails="If you didn't see your language on the list, don't worry. We still have many other languages to choose from, in this list here. If you want to find out more about any of these or any other languages, get in touch."
      />

      <WhatChooseUs backgroundCol="bg-darkBlue" />
      <Reviews backgroundCol="bg-midBlue" />

      <TranslationServices backgroundCol="bg-darkBlue" />
    </>
  );
}
