import React from "react";
import SuccessStories from "../SuccessStories";

const Aboutreviews1 = () => {
  return (
    <section id="reviews-1" className="wide-100 reviews-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title title-centered mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Success Stories From Our Students</h3>

              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
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

export default Aboutreviews1;
