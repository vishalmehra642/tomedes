import React from "react";

function Package() {
  return (
    <div className=" bg-midBlue ">
      <div className="max-w-screen-2xl sm:py-20 text-white flex items-center justify-center flex-col m-auto">
        <div>
          <h1 className="text-4xl font-bold text-white-50 mt-6 mb-10 pl-4 sm:pl-0">
            Getting Started with WPML
          </h1>
        </div>
        <div className="md:w-10/12 xl:w-2/5 w-full bg-blue px-12 rounded-xl">
          <ul className="list-decimal text-lightwhite">
            <li className="my-12 leading-7 ">
              Avail the <span className="text-orange">package</span> best suited
              to your needs.
            </li>
            <li className="my-12 leading-7 ">
              Then, you must download the necessary plugins. The first thing you
              must do when getting started is to install the following plugins
              on your website:
              <ul>
                <li className="list-disc my-10 lg:ml-10">
                  WPML Multilingual CMS – the core plugin
                </li>
                <li className="list-disc my-10 lg:ml-10">
                  WPML Translation Management – this plugin allows you to
                  connect to Tomedes
                </li>
                <li className="list-disc my-10 lg:ml-10">
                  WPML String Translation – this plugin allows you to translate
                  interface strings
                </li>
              </ul>
            </li>
            <li className="my-12 leading-7 ">
              Start by downloading them from your{" "}
              <span className="text-orange">wpml.org</span> account. You can
              also create an account via{" "}
              <span className="text-orange">WPML Multilingual CMS</span> or{" "}
              <span className="text-orange">Multilingual Agency</span> plans.
            </li>
            <li className="my-12 leading-7 ">
              Go to WPML Translation Management page and then the Translation
              Services tab. Click “Tomedes.” Make sure to wait a few minutes for
              the entire process to finish.
            </li>
          </ul>
        </div>
        <div className="md:w-10/12 xl:w-2/5 w-full px-4 sm:px-0 text-lg text-lightwhite mt-8">
          <h2>
            Should you need any help with the WPML plugin configuration, check
            out our <span className="text-orange">getting started guide</span>{" "}
            or just reach out to our support forum.
          </h2>
          <h2 className="my-4">
            Visit Tomedes’ <span className="text-orange">page</span> in WPML for
            more information.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Package;
