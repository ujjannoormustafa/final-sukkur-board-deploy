import Link from "next/link";
import React from "react";
import SuccessStories from "../SuccessStories";
const Demo3Reviews1 = () => {
  return (
    <section id="reviews-1" className="wide-100 reviews-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h4 className="h4-xl">Success Stories From Our Students</h4>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link href="/reviews">
                  <a className="btn btn-tra-grey rose-hover">
                    Read All Reviews
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col-md-12">
            <SuccessStories />
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3Reviews1;
