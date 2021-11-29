import React from "react";
import FooterNavigation from "components/layout/footer/FooterNavigation";
import FooterStaticLinks from "components/layout/footer/FooterStaticLinks";
import FooterCopyRight from "components/layout/footer/FooterCopyRight";

export default function Footer() {
  return (
    <React.Fragment>
      <FooterNavigation />
      <FooterStaticLinks />
      <FooterCopyRight />
    </React.Fragment>
  );
}
