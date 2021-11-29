import * as React from "react";
import { Link } from "gatsby";
import Layout from "components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center bg-cardGray py-36 font-primary">
        <div className="flex items-center justify-center flex-col max-w-screen-2xl">
          <h1 className="text-primary text-3xl sm:text-46 text-white">
            Page Not Found
          </h1>
          <p className="text-primary text-center text-24 font-light py-12 text-white ">
            The page you are looking for was removed or does not exist.
          </p>
          <button className="my-5 bg-btnwhite hover:bg-btnGreen hover:text-white text-primary text-2xl py-2 w-64 rounded-3xl font-extrabold">
            <Link to="/">Homepage</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
