import React from "react";
import Wpmlwordpress from "components/wpml/wpmlwordpress";
import GetStarted from "components/wpml/getStarted";
import Professional from "components/wpml/professional";
import Feature from "components/wpml/feature";
import Package from "components/wpml/package";
function WpmlComp() {
  return (
    <>
      <Wpmlwordpress />
      <GetStarted />
      <Professional />
      <Feature />
      <Package />
    </>
  );
}

export default WpmlComp;
