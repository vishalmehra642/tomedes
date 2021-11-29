import React from "react";
import {
  unitedStatesData,
  canadaData,
  unitedKingdomData,
  australiaData,
} from "components/locations/config";
import WhatChooseUs from "components/homepage/whyChooseUs/index";
import OfficeContainer from "components/locations/officeContainer";
import LocationBanner from "components/locationBanner";

export default function index() {
  return (
    <React.Fragment>
      <LocationBanner
        title="Locations"
        content="Looking for translation services in the United States and many
    other parts of the world? You’re in luck because Tomedes is here.
    Tomedes has over a decade of experience in translation services in
    over 120 languages and 950+ language pairs, which comes with a
    1-year guarantee, rapid delivery, and 24/7 customer support."
        formOrangeHead="Get in touch"
        formWhiteHead="with our
    translation agency"
      />
      <OfficeContainer
        title="In The United
          States"
        data={unitedStatesData}
        bgColor="bg-midBlue"
        titleColor="text-orange"
      />
      <OfficeContainer
        title=" In Canada"
        data={canadaData}
        bgColor="bg-darkBlue"
        titleColor="text-lightBlue"
      />
      <OfficeContainer
        title="In The United Kingdom"
        data={unitedKingdomData}
        bgColor="bg-midBlue"
        titleColor="text-orange"
      />
      <OfficeContainer
        title="In Australia"
        data={australiaData}
        bgColor="bg-darkBlue"
        titleColor="text-lightBlue"
      />

      <WhatChooseUs />
    </React.Fragment>
  );
}
