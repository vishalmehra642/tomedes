import React from "react";
import Office from "components/LocationReusableComp/office";

function OfficeContainer(props) {
  return (
    <section className={`${props.bgColor} py-14 mtab:px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl pb-16 font-secondary text-gray font-semibold px-4 mmob:text-2xl  mtab:pb-8">
          <span className={`${props.titleColor} pb-16`}>Offices</span>{" "}
          {props.title}
        </h2>
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-3">
          {props.data
            ? props.data?.map(({ imgSrc, heading, about, link }, index) => (
                <Office
                  key={index}
                  imgsrc={imgSrc}
                  officename={heading}
                  locationlink={link}
                  desc={about}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default OfficeContainer;
