import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CoursesProps } from "../sliderProps";
const Demo3Hboxes = () => {
  return (
    <section id="hboxes-1" className="hero-boxes-section division">
      <div className="container">
        <div className="hero-boxes-holder">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                {/* Text */}
                <h4 className="h4-xl">Explore the Visuals</h4>

              </div>
            </div>
          </div>
          {/* COURSE BOXES CAROUSEL */}
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...home1CoursesProps}>
                {/* COURSE #1 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (7).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #1 */}
                {/* COURSE #2 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (2).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #2 */}
                {/* COURSE #3 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (3).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #3 */}
                {/* COURSE #4 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (4).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #4 */}
                {/* COURSE #5 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (5).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #5 */}
                {/* COURSE #6 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (6).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #6 */}
                {/* COURSE #7 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (7).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #7 */}
                {/* COURSE #8 */}
                <SwiperSlide className="cbox-1">

                    <span>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/boximages/box (4).png"
                        alt="course-preview"
                      />

                    </span>

                </SwiperSlide>
                {/* END COURSE #8 */}
              </Swiper>
            </div>
          </div>
          {/* END COURSES BOXES CAROUSEL */}
        </div>
        {/* End hero-boxes-holder */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3Hboxes;
