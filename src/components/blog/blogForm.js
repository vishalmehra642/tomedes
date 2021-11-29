import React from "react";
function BlogForm() {
  return (
    <>
      <div className="w-72 border border-newBorder py-10 m-auto mt-10 bg-lightestBlue">
        <h1 className="text-2xl font-medium text-center ">
          <span className="text-orange">STAY </span>INFORMED
        </h1>
        <p className="text-sm text-center py-6">
          Subscribe to receive all the latest updates from Tomedes.
        </p> <input
          type="text"
          placeholder="Enter your business email "
          className="bg-white m-auto block text-sm pl-2 mb-6 w-11/12 lg:w-9/12 sm:w-10/12 border border-newBorder py-2 font-serif sm"
        />
        <button className="bg-darkestBlue hover:bg-hoverBtn  py-3 text-borderColor font-bold px-4 text-sm block m-auto">
          Keep Me Updated
        </button>
      </div>
    </>
  );
}
export default BlogForm;
