import React from "react";
import CertifiedLocation from "components/LocationReusableComp/certified";
import CommonUse from "components/LocationReusableComp/commonuse";
import EmailerLocation from "components/LocationReusableComp/emailer";
import LookingTranslator from "components/LocationReusableComp/looking";
import Popular from "components/LocationReusableComp/popular";
import LocationBanner from "components/locationBanner/index";
import { CommonUsesData } from "components/locationIndexPages/Toronto/common-config";
import { LanguagesInToronto } from "components/locationIndexPages/Toronto/config";
import ServicesGrid from "components/homepage/servicesGrid";
import { Link } from "gatsby";
import Reviews from "components/homepage/reviews";
import TranslationServices from "components/homepage/translationServices";
import TranslateAgency from "components/homepage/translateAgency";

export default function Toronto() {
  return (
    <>
      <LocationBanner
        title="Translation Services in Toronto"
        content="Translation services in Toronto have never been easier. Tomedes translation agency in Toronto, Canada provides translation, localization, and interpretation services for your business and individual needs. With over ten years of experience, Tomedes offers a 1-year guarantee on all translation services, as well as rapid delivery and 24/7 customer support"
        formOrangeHead="Get in touch "
        formWhiteHead=" with our translation agency"
      />
      <EmailerLocation />
      <CertifiedLocation
        backgroundCol="bg-darkBlue"
        fTitle="We "
        sTitle=" Guarantee"
        sTitleColor="text-lightBlue"
        tTitle="the Provision of Certified Translation Services"
        para=" Tomedes guarantees certified translation services for acceptance into all major institutions. Certified translators undergo a rigorous process of selection at Tomedes, assuring that your translations are authentic representations of your original texts. At Tomedes, we assist you at all stages of your applications to make sure that your translations are good to go."
      />

      <CommonUse
      backgroundCol="bg-midBlue"
        title="In-Demand Document Translation Services in Toronto"
        para="Don’t you want to partner with the best? Tomedes has provides quality and accurate services for all translation projects, including these in-demand services:"
        data={CommonUsesData}
      />

      <ServicesGrid
      backgroundCol="bg-darkBlue"
        heading="A Translation Agency Equipped with Multi-Industry Expertise"
        details="Tomedes is trusted by Google, Android, and Fortune 500 companies alike. Put your trust in Tomedes and join our growing number of clients."
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
        picture="	https://skins.tomedes.com/frontend/images/location_new/cta_toronto.webp"
        translationAt=" for a Certified Translator in Toronto?"
        detail="Certified translators are just a call away at Tomedes. They’ll make sure your applications go smoothly. Get started to work with a native-language translator who can translate your work for almost every industry. Contact Tomedes. We respond in 30 minutes."
        location="Toronto"
        countryName="Australia"
      />
      <TranslateAgency
        BackgroundCol="bg-darkBlue"
        head="A Translation Company You Can Trust in"
        colorHead="Toronto"
        content="Tomedes is a translation company you can rely on because we don't just have translations at our fingertips. From the starting point of 132,700 people who can’t speak English at all to the 20.5 percent of non-English speaking population of Toronto, you have a translation agency you can trust to broaden your horizons when it comes to language communication. Tomedes’ client satisfaction rate of 97% ensures that the client is at the heart of our philosophy, with the added benefit of 24/7 customer support."
      />

      <Popular
        bottomBorderText
        languageCount="Multiple Supported Languages"
        details=" Tomedes translators are highly skilled at their languages and are authentic native-language speakers. Here are the most popular languages in Toronto for translation:"
        bottomHeading="Frequently Requested Languages in "
        location="Toronto"
        data={LanguagesInToronto}
        footerTitle="Translation Services in more than 120 languages and 950+ Language Pairs"
        footerDetails="Didn’t see your language on the list? Not to worry. There’s more languages in store: such as Chinese, Tagalog, Tamil, and other languages from over 120 languages and 950+ language pairings. We also have rare languages in our repertoire. Here’s the list of available languages. And make sure you reach out to us for any requests."
      />

      <Reviews backgroundCol="bg-darkBlue" />

      <TranslationServices backgroundCol="bg-midBlue" />
    </>
  );
}
