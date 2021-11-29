import React from "react";
import {
  company,
  services,
  languages,
} from "components/layout/footer/FooterData";
import Facebook from "assets/svg/facebook";
import Linkedin from "assets/svg/linkedin";
import Twitter from "assets/svg/twitter";
import Youtube from "assets/svg/youtube";
import LogoSvg from "assets/svg/logo";
import Location from "assets/svg/location";
import Phone from "assets/svg/phone";
import Email from "assets/svg/email";

export default function FooterNavigation() {
  return (
    <>
      <footer>
        <div className="pt-24 pb-10 bg-basecol text-gray px-10 lg:px-0 md:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:place-items-center md:place-items-center">
              <div className="font-opensans mb-10 lg:mb-0 md:mb-0">
                <div className="flex pb-12 items-center">
                  <LogoSvg />
                </div>
                <div className="flex pb-6 items-center">
                  <Location />
                  <span className="text-sm ml-4">
                    Tomedes Ltd - USA 9450 SW <br />
                    <span className="mt-2 inline-block">Gemini Dr #34540, Beaverton</span> <br />
                  </span>
                </div>
                <div className="flex pb-6 items-center">
                  <Phone />
                  <span className="text-sm ml-4">
                    FR: +1 985 239 0142 <br />
                    <span className="mt-2 inline-block">US: +1 985 239 0142 </span> <br />
                  </span>
                </div>
                <div className="flex pb-6 items-center">
                  <Email />
                  <span className="text-sm ml-4">support@tomedes.com</span>
                </div>

                <div className="grid grid-cols-4 gap-0 mt-5 md:mb-20">
                  <Facebook />
                  <Twitter />
                  <Linkedin />
                  <Youtube />
                </div>
              </div>
              <div className="md:mb-20 mb-10 lg:mb-24">
                <h1 className="font-secondary pb-10 text-xl uppercase">
                  Company
                </h1>
                <ul className="font-opensans text-sm cursor-pointer">
                  {company?.map(({ link }, index) => (
                    <li key={index} className="pb-6 hover:text-hover">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-10 lg:mb-24">
                <h1 className="font-secondary pb-10 text-xl uppercase">
                  Services
                </h1>
                <ul className="font-opensans text-sm cursor-pointer">
                  {services?.map(({ link }, index) => (
                    <li key={index} className="pb-6 hover:text-hover">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 lg:mb-24">
                <h1 className="font-secondary pb-10 text-xl uppercase">
                  Languages
                </h1>
                <ul className="font-opensans text-sm cursor-pointer">
                  {languages?.map(({ link }, index) => (
                    <li key={index} className="pb-6 hover:text-hover">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
