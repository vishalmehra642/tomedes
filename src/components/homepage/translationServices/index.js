import React from "react";
import ata from "assets/images/ata.png";
import iso from "assets/images/iso.png";

export default function TranslationServices({backgroundCol}) {
  return (
    <section className={`${backgroundCol ? backgroundCol :"bg-darkBlue"} py-24`}>
      <div className="container mx-auto px-4">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary leading-10">
          Fully <span className="text-lightBlue">Accredited</span> Translation
          Services
        </h2>

        <div className="w-8/12 mx-auto pt-16 lg:w-9/12">
          <div className="grid gap-10 max-w-lg mx-auto lg:gap-5 lg:grid-cols-2 lg:max-w-none place-items-center">
            <div>
              <img src={ata} alt="ata_corporate_number" className="w-222"/>
              <p className="text-gray font-opensans text-center text-sm mt-5">
                ATA Corporate Member Number 272444
              </p>
            </div>
            <div>
              <img src={iso} alt="iso_certified" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
