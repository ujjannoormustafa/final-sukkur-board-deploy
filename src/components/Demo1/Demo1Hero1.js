import Link from "next/link";
import Router from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1HeroProps } from "../sliderProps";
const Demo1Hero1 = () => {
  return (
    <section id="hero-1" className="hero-section division">
      {/* SLIDER */}
      <Swiper {...home1HeroProps}>
        <ul className="swiper-wrapper slides">
          {/* SLIDE #1 */}

          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                style={{ backgroundImage: 'url("images/slider/slide-2.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center right-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <h2 className="h2-sm">
                          2,769 online courses from the best tutors
                        </h2>
                        {/*Hero Search Form */}
                        <form
                          className="hero-form"
                          onSubmit={(e) => {
                            e.preventDefault();
                            Router.push({
                              pathname: "/categories-list",
                            });
                          }}
                        >
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What do you want to learn?"
                              aria-label="Search"
                            />
                            <span className="input-group-btn">
                              <button type="submit" className="btn">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                />
                              </button>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* End container */}
              </div>
              {/* End Image Caption */}
            </div>
          </SwiperSlide>
          {/* END SLIDE #2 */}
          {/* SLIDE #3 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                style={{ backgroundImage: 'url("images/slider/slide-3.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center right-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <div className="caption-txt">
                        {/* Title */}
                        <h2 className="h2-sm">
                          High quality courses from the leading experts
                        </h2>
                        {/* Text */}
                        <p className="p-lg">
                          Feugiat primis ligula gravida auctor egestas augue
                          viverra mauri tortor in iaculis placerat an eugiat
                          mauris ipsum undo viverra tortor gravida purus lorem
                          in tortor a viverr
                        </p>
                        {/* Button */}
                        <Link href="#">
                          <a
                            href="#courses-4"
                            className="btn btn-md btn-rose tra-black-hover"
                          >
                            View Popular Courses
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End row */}
                </div>
                {/* End container */}
              </div>
              {/* End Image Caption */}
            </div>
          </SwiperSlide>
          {/* END SLIDE #3 */}
        </ul>
        {/* <ul className="indicators"></ul> */}
      </Swiper>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo1Hero1;
