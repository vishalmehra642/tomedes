import React from "react";
import featuredImages from "./config";

export default function Featured() {
  return (
    <section className="bg-midBlue py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-gray text-3xl md:text-4xl text-center font-secondary">
          Featured In
        </h2>
        <div className="mx-auto pt-10 text-center">
          <div className="grid gap-4 max-w-lg mx-auto grid-cols-0 md:grid-cols-3 md:gap-4 lg:flex lg:flex-wrap lg:justify-center lg:space-x-6 lg:space-y-4 lg:max-w-6xl place-items-center">
            {featuredImages.map((x, i) => (
              <img key={i} src={x?.img} alt={x?.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
