import { Link } from "gatsby";
import React from "react";

export default function Office(props) {
  return (
    <div className="location_wrap border-solid border border-blackNew-500 font-opensans mx-4 mb-10">
      <img src={props.imgsrc} className="w-full " />
      <div className="pr-3 pl-5 pb-8">
        <h3 className="text-base text-gray mb-3 mt-6 font-semibold">
          {props.officename}
        </h3>
        <p className="text-textgray text-sm leading-6 min-h-132">
          {props.desc}
        </p>
        <Link
          to={props.locationlink}
          className="text-gray underline pt-8 mt-3 inline-block leading-7 hover:text-orange"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
