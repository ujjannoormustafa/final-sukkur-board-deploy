import Router from "next/router";
import React from "react";
const Demo3Hero3 = () => {
  return (
    <section id="hero-3" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-lg-8 offset-lg-2">
            <div className="hero-txt text-center white-color">
              {/* Title */}
              <h2 className="h2-xs">
                <span>Board of Intermediate & Secondary Education</span>

              </h2>
              <span className={'h4'}> Sukkur,Sindhi Pakistan</span>
              {/* Text */}
              <p className="p-md mt-5">
                Empowering Minds, Inspiring Futures: Board of Intermediate & Secondary Education Sukkur, Sindhi Pakistan
              </p>

            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3Hero3;
