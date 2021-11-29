import React from "react";
import { LawAndFinanceData } from "components/our-customers/config";

function LawFinance() {
  return (
    <>
      <div className="flex items-center justify-center w-full md:w-10/12 lg:w-full xl:w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
          {LawAndFinanceData
            ? LawAndFinanceData?.map(({ url }, index) => (
                <div
                  className="bg-cardBlue w-52 h-56 flex items-center justify-center rounded-lg"
                  key={index}
                >
                  <img src={url} alt="img" className="w-28 block m-4" />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default LawFinance;
