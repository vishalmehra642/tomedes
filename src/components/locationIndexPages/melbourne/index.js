import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import TrustedTranslation from "components/LocationReusableComp/trustedtranslation";
import LocationBanner from "components/locationBanner/index";
import { CommonMelbourneData } from "components/locationIndexPages/melbourne/common-config";
import { LanguagesInMelbourne } from "components/locationIndexPages/melbourne/config";
import WhatChooseUs from "components/homepage/whyChooseUs";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";

export default function Melbourne() {
  return (
    <>
      <LocationBanner
        title="Melbourne Translation Services"
        content="Are you looking for translation services in Melbourne? Tomedes Translation Agency in Melbourne provides solutions for translation, localization, and interpretation services in over 120 languages and 950+ language pairs. Our 75,000+ satisfied clients have experienced a 1-year guarantee, rapid delivery and 24/7 customer support. Now it’s your turn."
        formOrangeHead="Get in touch "
        formWhiteHead="  with our translation agency"
      />
      <EmailerLocation />

      <CertifiedLocation
        fTitle="NAATI"
        fTitleColor="text-lightBlue"
        sTitle="Certified Translation Services"
        para=" Tomedes translators provide NAATI certified translation services. The National Accreditation Authority for Translators and Interpreters have authorized our translators to perform these services. Certified translations make sure that the authenticity of the translated document is true to the original."
        paraB="At Tomedes, we assist you in all aspects of your application, aside from making sure your translations are verily certified."
        backgroundCol="bg-darkBlue"
      />

      <CommonUse
        title="In-demand Document Translation Services in Melbourne"
        para="Are you looking for the best translation agency in Melbourne? You’ve come to the right place. Tomedes provides accurate and quality services for all translation projects, including these in-demand document translation services:"
        backgroundCol="bg-midBlue"
        data={CommonMelbourneData}
      />

      <ServicesGrid
        backgroundCol="bg-darkBlue"
        heading="Translation Services Made for Every major industry in Melbourne"
        details="Tomedes is trusted by Google, Android, and Fortune 500 companies alike, and can provide translation services for every major industry in Melbourne. Join our growing network of 75,000+ satisfied clients, in these industries:"
        contactUs={
          <Link
            to="/blog"
            className="bg-orange text-white rounded-3xl uppercase py-2 px-8 mt-6 inline-block  mlap:mb-10"
          >
            contact us
          </Link>
        }
      />

      <LookingTranslator
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_atlanta.webp"
        translationAt="Looking for a NAATI certified translator in Melbourne?"
        detail="In Melbourne, Australia, accredited English translation is hard to find. Our NAATI certified translator in Melbourne can get the job done, while applying their native-language skills to every project. If you need translators in Melbourne, they’re just a call away at Tomedes. Get in touch, we reply in 30 minutes."
        location="Melbourne"
        countryName="Australia"
      />

      <CertifiedLocation
        backgroundCol="bg-darkBlue"
        fTitle="Melbourne’s"
        sTitle=" Trusted"
        sTitleColor="text-lightBlue"
        tTitle="Translation Agency"
        para=" Tomedes translation agency in Melbourne is not just any other translation agency: we provide solutions that close the gap between the populace of Melbourne with limited English proficiency and the rest of the population. Our clients are at the heart of our philosophy. Tomedes’ client satisfaction rate is 97%, and is rated 4.8 stars out of 5. Our dedicated customer support is available 24/7. Trust Tomedes. Contact us now."
      />

      <Popular
        languageCount="Sought-after languages in Melbourne"
        details=" There’s a variety of languages available for Dallas residents, from over 120 languages and 950+ language pairs. Here are the most popular languages for translation jobs in Dallas, Texas:"
        data={LanguagesInMelbourne}
      />

      <TrustedTranslation
        FirstWhite=""
        ColorHead="Multiple Supported"
        lastHeadColor="text-lightBlue"
        ThirdBlue="Languages"
        Content="Did you know that there are over 120 languages you can find at Tomedes? If you didn’t see your language here, we also provide translation services in many other languages and language pairs. We support rare languages, too. So reach out to us today."
        getStarted
      />
      <WhatChooseUs backgroundCol="bg-midBlue" />
      <Reviews backgroundCol="bg-darkBlue" />
      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}
