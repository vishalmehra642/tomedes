import React from "react";
import { Location } from "components/translationConferences/config";

function SelectLocation({ id }) {
  return (
    <>
      <select
        id={id}
        name="country"
        className="text-black sm:w-44 py-3 bg-white rounded-sm px-2 w-full"
      >
        <option>Location</option>
        {Location
          ? Location.map(({ singleLocation }) => (
              <option value={singleLocation}>{singleLocation}</option>
            ))
          : null}
      </select>
    </>
  );
}

export default SelectLocation;
