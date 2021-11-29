import React from "react";
import { locations } from "components/layout/footer/FooterData";
import { Link } from "gatsby";

function FooterStaticLinks() {
  return (
    <>
      <div className="py-10 bg-basecol border-border border-t text-white flex lg:items-center md:items-center justify-center px-10">
        <div className="xl:w-11/12 max-w-4xl">
          <h1 className="font-secondary pb-8 text-lg uppercase md:text-center">
            Locations
          </h1>
          <ul className="text-gray-400 lg:text-center md:text-center font-opensans">
            {locations?.map(({ location , link }, index) => (
              <React.Fragment key={index}>
                <Link to={link}>
                <li className="inline-block text-drakGray hover:text-white cursor-pointer lg:mb-8 mb-4 sm:mb-2 text-sm mx-1">
                  {location}
                </li>
                </Link>
                <span className="text-drakGray last:hidden">|</span>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterStaticLinks;
