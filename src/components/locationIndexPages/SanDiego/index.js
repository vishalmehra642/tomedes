import EmailerLocation from 'components/LocationReusableComp/emailer'
import React from 'react'
import LocationBanner from "components/locationBanner/index";
import ServicesGrid from 'components/homepage/servicesGrid';
import { Link } from 'gatsby';
import CommonUse from 'components/LocationReusableComp/commonuse';
import { LanguagesInSanDiego, SanDiegoData } from './config';
import SpeceficTranslation from 'components/LocationReusableComp/speceficTranslation';
import TrustedTranslation from 'components/LocationReusableComp/trustedtranslation';
import LookingTranslator from 'components/LocationReusableComp/looking';
import Popular from 'components/LocationReusableComp/popular';
import WhatChooseUs from 'components/homepage/whyChooseUs';
import Reviews from 'components/homepage/reviews';
import TranslationServices from 'components/homepage/translationServices';

const index = () => {
    return (
        <>
             <LocationBanner
        title="San Diego Translation Services"
        content="Are you on the lookout for translation services in San Diego? It’s a good thing Tomedes is here. Tomedes translation company has language services suitable for every major industry and supports over 120 languages and 950+ language pairs. Out of all the translation companies in San Diego, Tomedes can offer you a 1-year guarantee, a trusted 24/7 customer support line, and rapid delivery on all transactions."
        formOrangeHead="Contact "
        formWhiteHead="our translation company now"
      />
      <EmailerLocation /> 
      <ServicesGrid
      backgroundCol="bg-darkBlue"
        heading="Translation Services
        Suitable for Every
        Major Industry in San
        Dieg"
        details="In San Diego, translation services can support almost every major industry in the city. The major industries in San Diego are composed primarily of the military industry, the tourism industry, the international trade industry, and the manufacturing industry. Our global network of translators have the industry capabilities to handle all your translation projects"
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
        backgroundCol="bg-midBlue"
        title="Popular Certified Translation Services in San Diego"
        para="Tomedes has the ATA authority to provide certified translation services for all interested San Diego businesses. All your documents can be certified for use for all authoritative bodies. Our certified translation services include:"
        data={SanDiegoData}
      />
      <SpeceficTranslation
        SecondWhite="Document Translation Services"
        backgroundCol="bg-darkBlue"
        ColorHead="Specialized"
        headColor="text-lightBlue"
        Content="We provide document translation services for specialized projects in fields such as engineering, legal, military and medical fields. Our translators are more than equipped to provide these services: a translator for the engineering field will be knowledgeable about industry terminologies, and the same goes for the military translator."
      />
      <TrustedTranslation
      backgroundCol="bg-midBlue"
        headColor="text-orange"
        ColorHead="More "
        SecondWhite="Translation Services Available"
        Content="If you’re looking for localization and interpreting services as well as translation services, Tomedes is here to help. We can assist in website and app localization, marketing translation, website translation, and more. We also support rare and hard-to-find languages. Why not get in touch with us today?"
        getStarted
      />
      <LookingTranslator
      backgroundCol="bg-darkBlue"
        picture="https://skins.tomedes.com/frontend/images/location_new/cta_sandiego.webp"
        translationAt="for a translation company in San Diego?"
        detail="Our translation services in San Diego, CA makes sure that you can get your translations on-demand and delivered on time. If you’re interested in one of the leading translation companies in San Diego, give us a call."
        location="San Diego "
        countryName=",CA,USA"
      />
       <SpeceficTranslation
       FirstWhite="Your Data Security and Privacy is our"
        SecondWhite=" "
        backgroundCol="bg-midBlue"
        ColorHead="Priority"
        headColor="text-lightBlue"
        Content="Security and confidentiality is key to the operation of any business. So, when working with our clients, Tomedes uses industry standard measures such as data encryption, and proactive, end-to-end cybersecurity. This is to make sure your personal and proprietary information is secure and confidential. Tomedes translators and project managers are all under non-disclosure agreement contracts, in order to provide additional measures for your information’s security."
      />
        <Popular
        backgroundCol="bg-darkBlue"
        bottomBorderText
        footerTitle="More Available Languages"
        footerDetails="Tomedes can provide translation services in more available languages, including Tagalog, Simplified and Traditional Chinese, and French. If you’re interested in viewing a list of available languages, read more here. Just give us a call for more information."
        languageCount="Translation Services in 120+ Languages and over 950 Language Pairs"
        details="Tomedes translators are well-suited for their industries because they also have the linguistic excellence in the following languages and more:"
        bottomHeading="Popular Languages in San Diego"
        location=" "
        data={LanguagesInSanDiego}
      />
       <WhatChooseUs backgroundCol="bg-midBlue"  />
      <Reviews  backgroundCol="bg-darkBlue"  />
      <TranslationServices backgroundCol="bg-midBlue"  />
        </>
    )
}

export default index
