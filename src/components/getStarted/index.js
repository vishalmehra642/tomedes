import React from 'react'

export default function GetStarted() {
    return (
        <div className="bottomButtons bg-black">
        <div className="div flex flex-col sm:flex-row w-6/12 justify-between m-auto py-28 ">
          <div className="translateBtn text-center py-6">
            <h3 className="pb-10 ">Ready to get started?</h3>
            <button className="bg-btnGreen rounded-full py-3 px-2 md:py-3 md:px-6 text-sm sm:text-base whitespace-nowrap">
              Translate Now
            </button>
          </div>
          <div className="contactBtn text-center pb-6 py-6">
            <h3 className="pb-10">Want to tell us more about your needs?</h3>
            <button className=" border border-white rounded-full hover:bg-borderGray py-3 px-2 md:py-3 md:px-6 text-sm sm:text-base whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
        <div className="borderLine border-border border-b bg-basecol "></div>
      </div>
    )
}
