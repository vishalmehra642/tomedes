import React, { useState, useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Pagination from "components/TranslatorHub/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { categoryLinks } from "./config";
import Social from "components/TranslatorHub/Social";
import Form from "./Form";

const TranslatorHubPage = () => {
  const [notes, setNotes] = useState([]); // data stored in notes

  const [currentPage, setCurrentPage] = useState(1); // current page num
  const [postPerPage] = useState(5);

  const [category, setCatogery] = useState(null);
  const queryData = useStaticQuery(graphql`
    query translationQuery {
      allTranslateHub {
        edges {
          node {
            data {
              cover_image
              language
              slug
              seo_h1
              category
              category_name
              alt_tag
              seo_project_create_date
              seo_project_small_desc
              seo_project_id
              read_time
            }
          }
        }
      }
    }
  `);

  const TranslationHubData = queryData.allTranslateHub.edges;
  useEffect(() => setNotes(TranslationHubData), [currentPage]);
  // logic
  const indexOfLastNote = currentPage * postPerPage;
  const indexOfFirstNote = indexOfLastNote - postPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const handleLinkQuery = (e) => {
    setCatogery(e);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex justify-center md:flex-row flex-col  w-full max-w-screen-2xl  ">
        <div className=" col-span-2 px-4 xl:px-0 lg:mr-20 xl:w-5/12  ">
          {currentNotes && category === null
            ? currentNotes?.map(({ node }) => {
                const { data } = node;
                const {
                  cover_image,
                  alt_tag,
                  category_name,
                  seo_project_id,
                  seo_project_create_date,
                  seo_project_small_desc,
                  language,
                  slug,
                  read_time,
                  seo_h1,
                } = data;
                return (
                  <div
                    className="w-full border-newBorder border-b-3"
                    key={seo_project_id}
                  >
                     <Link to={slug}>
                    <h1 className="text-2xl py-4 text-newGray hover:text-lightBlue">
                      {seo_h1}
                    </h1>
                    </Link>
                    <Link to={slug}>
                    <img
                      src={cover_image}
                      alt={alt_tag}
                      className="w-full object-cover h-auto lg:h-[370px] "
                    />
                    </Link>
                    <p className="pb-2 pt-3 text-17  font-normal font-serif">
                      CATEGORY /{" "}
                      <span className="text-lightBlue mt-1 mb-2 ">
                        {category_name}
                      </span>
                    </p>
                    <i className="pb-5 inline-block font-light font-serif">
                      {seo_project_create_date}
                    </i>
                    <p className="pb-5 font-opensans font-normal italic ">
                      {seo_project_small_desc}
                    </p>
                    <Link to={slug}>
                      <i className="inline-flex mt-4 items-center pb-5 font-light font-serif text-newGray">
                        Read More{" "}
                        <FontAwesomeIcon icon={faAngleRight} className="ml-6" />
                      </i>
                    </Link>
                    <span className="block pb-5 font-light font-serif text-sm">
                      {read_time}
                    </span>
                    <span className=""></span>
                  </div>
                );
              })
            : currentNotes
                ?.filter(
                  (item) => item.node.data.category_name == `${category}`
                )
                ?.map(({ node }) => {
                  const { data } = node;
                  const {
                    cover_image,
                    alt_tag,
                    category_name,
                    seo_project_id,
                    seo_project_create_date,
                    seo_project_small_desc,
                    language,
                    slug,
                    read_time,
                    seo_h1,
                  } = data;
                  return (
                    <div
                      className="w-full border-newBorder border-b-3"
                      key={seo_project_id}
                    >
                      <Link>
                      <h1 className="text-2xl py-4 text-newGray hover:text-lightBlue">
                        {seo_h1}
                      </h1>
                      </Link>
                      <img
                        src={cover_image}
                        alt={alt_tag}
                        className="w-full object-cover h-auto lg:h-[370px]"
                      />
                      <p className="pb-2 pt-3 text-17  font-normal font-serif">
                        CATEGORY /{" "}
                        <span className="text-lightBlue mt-1 mb-2 ">
                          {category_name}
                        </span>
                      </p>
                      <i className="pb-5 inline-block font-light font-serif">
                        {seo_project_create_date}
                      </i>
                      <p className="pb-5 font-opensans font-normal italic ">
                        {seo_project_small_desc}
                      </p>
                      <Link to={slug}>
                        <i className="inline-flex mt-4 items-center pb-5 font-light font-serif text-newGray">
                          Read More{" "}
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="ml-6"
                          />
                        </i>
                      </Link>
                      <span className="block pb-5 font-light font-serif text-sm">
                       {read_time}
                      </span>
                      <span className=""></span>
                    </div>
                  );
                })}
          {/* pagination component */}
          <Pagination
            postPerPage={postPerPage}
            notes={notes}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className=" md:ml-12 ml-0 mt-10 md:mt-0 px-4 lg:pl-0 lg:pr-2">
          {/* blog right side column */}
          {/* right side list */}
          <div>
            <h1 className=" font-extrabold text-newGray text-new mt-4">
              CATEGORIES
            </h1>
            <ul className="text-newGray">
              {categoryLinks
                ? categoryLinks.map(({ link }, index) => (
                    <li
                      className="text-new py-2  hover:text-lightBlue cursor-pointer"
                      key={index}
                    >
                      <span onClick={() => handleLinkQuery(link)}>{link}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          {/* right middle line */}
          <div className="line border-b border-gray mt-12"></div>
          {/* blog form */}
          <Form />
          {/* social media component */}
          <Social />
        </div>
      </div>
    </div>
  );
};
export default TranslatorHubPage;

// overflow-ellipsis overflow-hidden h-[10px] w-11/12 whitespace-nowrap
