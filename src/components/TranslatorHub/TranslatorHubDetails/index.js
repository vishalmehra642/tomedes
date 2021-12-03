import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import Form from "../Form";
import Social from "../Social";

function index(props) {
  const {
    pageContext: {
      data: { data },
    },
  } = props;
  return (
    <Layout>
    <div className="flex items-center justify-center w-full ">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full xl:w-7/12 lg:w-8/12 m-auto sm:p-6 p-2 max-w-screen-2xl">
        <div className="w-full col-span-2">
          <div>
            <h1 className="text-[28px] pb-6 text-blackNew-600 font-semibold ">
             {data.seo_h1}
            </h1>
            <div className="my-6">
              <span className="text-blackNew-700">by</span> <Link to="https://www.linkedin.com/in/ofertirosh/" target="_blank"><span className="text-lightBlue">OFER TIROSH</span></Link>{" "}
              <i className="text-blackNew-700">November 5, 2021</i>
            </div>
            <img
              src={data.cover_image}
              alt=""
              className="w-full object-cover h-auto lg:h-[370px] mb-6"
            />
            <div className="mb-4 translator_hub_details" dangerouslySetInnerHTML={{ __html : data.seo_project_content}}/>

            <div className="formInfo py-6">
              <form action="" className="flex flex-col">
                <input
                  type="text"
                  className="border border-gray rounded-md p-1 pl-4 my-4"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border border-gray rounded-md p-1 pl-4 my-4"
                  placeholder="Email (never display)"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border border-gray pl-4"
                  placeholder="Comment"
                ></textarea>
                <div className="notification flex mt-4 pl-4 items-center gap-x-4">
                  <input type="checkbox" />
                  <p>
                    I want to receive a notification of new postings under this
                    topic
                  </p>
                </div>
              </form>
            </div>
            <a
              to=""
              className="border rounded cursor-pointer border-black bg-black p-2.5 px-6 mt-10 text-white text-sm"
            >
              SUBMIT
            </a>
          </div>
        </div>
        <div className="w-full md:ml-12 ml-0 mt-10 md:mt-0">
          <h1 className=" text-bold text-2xl">CATEGORIES</h1>
          <ul>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Languages</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Freelancing</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Marketing</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Finance</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Translation news</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Translation services</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Business translation</Link>
            </li>
            <li className="text-xl py-2  hover:text-lightBlue">
              <Link to="/">Coronavirus</Link>
            </li>
          </ul>
          <div className="line border-b border-gray mt-12"></div>
          <Form/>
          <Social />
        </div>
      </div>
    </div>
    </Layout>
  );
}
export default index;
