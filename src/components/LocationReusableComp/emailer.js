import { Link } from "gatsby";
import React from "react";
import  Message  from "assets/images/Message.png";
import Email from 'assets/images/Email.png'
import CallUs  from 'assets/images/CallUs.png'

export default function EmailerLocation() {
  return (
    <>
      <section className="bg-midBlue py-16">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid grid-cols-3 mlap:px-6  mmob:px-2">
            <div className="my-6 block lg:inline-block text-center">
              <Link to="/quote">
                <div className="bg-quote-img bg-bgless w-300 h-full inline-block mlap:w-200 mx-auto  lg:my-0">
                  <img src={Message} />
                </div>
              </Link>
            </div>
            <div className="my-6 block lg:inline-block text-center">
              <a href="mailto:support@tomedes.com" >
                <div className="bg-quote-img bg-bgemail w-300 h-full inline-block mx-auto  lg:my-0">
                <img src={Email} />
                </div>
              </a>
            </div>
            <div className="my-6 block lg:inline-block text-center">
              <a  href="tel:+19852390142">
                <div className="bg-quote-img bg-bgcall w-300 h-full inline-block mx-auto  lg:my-0">
                <img src={CallUs} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
