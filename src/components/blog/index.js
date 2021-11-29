import React from "react";
import { Link } from "gatsby";
import { blogData } from "components/blog/config";
import Pagination from "components/blog/pagination";
import BlogForm from "components/blog/blogForm";
import BlogSocial from "components/blog/blogSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function BlogPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex justify-center md:flex-row flex-col  w-full max-w-screen-2xl">
        <div className=" col-span-2 px-4 lg:px-0 lg:mr-20">
          {blogData
            ? blogData?.map(
                ({ heading, src, category, date, tomedesInfo }, index) => (
                  <div
                    className="w-full border-newBorder border-b-3"
                    key={index}
                  >
                    <h1 className="text-2xl py-4 text-newGray hover:text-lightBlue">
                      {heading}
                    </h1>
                    <img src={src} alt={heading} className="w-full" />
                    <p className="pb-2 pt-3 text-17  font-normal font-serif">
                      CATEGORY /{" "}
                      <span className="text-lightBlue mt-1 mb-2 ">
                        {category}
                      </span>
                    </p>
                    <i className="pb-5 inline-block font-light font-serif">
                      {date}
                    </i>
                    <p className="pb-5 font-opensans font-normal italic">
                      {tomedesInfo}
                    </p>
                    <Link to="/">
                      <i className="inline-flex  items-center pb-5 font-light font-serif text-newGray">
                        Read More{" "}
                        <FontAwesomeIcon icon={faAngleRight} className="ml-6" />
                      </i>
                    </Link>
                    <span className="block pb-5 font-light font-serif text-sm">
                      9 min read
                    </span>
                    <span className=""></span>
                  </div>
                )
              )
            : null}
          {/* pagination component */}
          <Pagination />
        </div>
        <div className=" md:ml-12 ml-0 mt-10 md:mt-0 px-4 lg:px-0">
          {/* blog right side column */}
          {/* right side list */}
          <div>
            <h1 className=" font-extrabold text-newGray text-new mt-4">
              CATEGORIES
            </h1>
            <ul className="text-newGray">
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Languages</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Freelancing</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Marketing</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Finance</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Translation news</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Translation services</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Business translation</Link>
              </li>
              <li className="text-new py-2  hover:text-lightBlue">
                <Link to="/">Coronavirus</Link>
              </li>
            </ul>
          </div>
          {/* right middle line */}
          <div className="line border-b border-gray mt-12"></div>
          {/* blog form */}
          <BlogForm />
          {/* social media component */}
          <BlogSocial />
        </div>
      </div>
    </div>
  );
}
export default BlogPage;
