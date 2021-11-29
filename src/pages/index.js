import React from "react";
import TranslationServices from "components/homepage/translationServices";
import Featured from "components/homepage/featured";
import CaseStudies from "components/homepage/caseStudies";
import Reviews from "components/homepage/reviews";
import TranslateAgency from "components/homepage/translateAgency";
import SupportedLang from "components/homepage/supportedLanguages";
import Professionals from "components/homepage/professionals";
import Contact from "components/homepage/contact";
import TechDriven from "components/homepage/techDriven";
import ServicesGrid from "components/homepage/servicesGrid";
import WhatWeDo from "components/homepage/whatWeDo";
import WhatChooseUs from "components/homepage/whyChooseUs";
import WhoWeAre from "components/homepage/whoWeAre";
import Banner from "components/homepage/banner";

import Layout from "components/layout";

export default function index() {
  return (
    <Layout>
      <Banner />
      <WhoWeAre />
      <WhatChooseUs />
      <WhatWeDo />
      <ServicesGrid />
      <TechDriven />
      <Contact />
      <Professionals />
      <SupportedLang />
      <TranslateAgency />
      <Reviews />
      <CaseStudies />
      <Featured />
      <TranslationServices />
    </Layout>
  );
}
