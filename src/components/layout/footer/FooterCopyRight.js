import React from "react";
import { termCondition } from "components/layout/footer/FooterData";

function FooterCopyRight() {
  return (
    <div className="flex justify-evenly bg-black text-drakGray text-sm p-6 flex-wrap font-opensans align-middle">
      <p className="pl-4 pb-4 lg:pb-0 lg:pl-0">
        &copy; Copyright 2007-2020 TOMEDES. All Rights Reserved.
      </p>
      <div className="col-start-3 col-end-4 pl-4 lg:pb-0 lg:pl-0">
        {termCondition?.map(({ link }, index) => (
          <React.Fragment key={index}>
            <span className="cursor-pointer">{link}</span>
            <span className="mx-2 last:hidden">|</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FooterCopyRight;
