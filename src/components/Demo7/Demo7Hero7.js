import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1HeroProps } from "../sliderProps";

const Demo7Hero7 = () => {
  return (
    <section id="hero-7" className="bg-scroll hero-section division">
      {/* SLIDER */}
      <Swiper {...home1HeroProps} className="slider blue-nav">
        <ul className="swiper-wrapper slides">
          {/* SLIDE #1 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                style={{ backgroundImage: 'url("images/slider/slide-7.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <h2>
                          Transform your life through online education with
                          eTreeks
                        </h2>
                        {/* Text */}
                        <p>
                          Feugiat primis ligula risus auctor egestas augue mauri
                          viverra tortor in iaculis placerat eugiat mauris ipsum
                          in viverra gravida purus
                        </p>
                        {/* Button */}
                        <Link href="/categories-list">
                          <span className="btn btn-md btn-rose tra-white-hover">
                            Discover More
                          </span>
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
          {/* END SLIDE #1 */}
          {/* SLIDE #2 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                style={{ backgroundImage: 'url("images/slider/slide-6.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <h2>
                          Online and on-campus learning from industry experts
                        </h2>
                        {/* Text */}
                        <p>
                          Feugiat primis ligula risus auctor egestas augue mauri
                          viverra tortor in iaculis placerat eugiat mauris ipsum
                          in viverra gravida purus
                        </p>
                        {/* Button */}
                        <Link href="/categories-list">
                          <span className="btn btn-md btn-rose tra-white-hover">
                            View All Courses
                          </span>
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
          {/* END SLIDE #2 */}
          {/* SLIDE #3 */}
          <SwiperSlide>
            <div className="li">
              {/* Background Image */}
              <img
                style={{ backgroundImage: 'url("images/slider/slide-5.jpg")' }}
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt="slide-background"
              />
              {/* Image Caption */}
              <div className="caption d-flex align-items-center center-align">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="caption-txt white-color">
                        {/* Title */}
                        <h2>
                          Find the right instructor for you from over 300
                          teachers
                        </h2>
                        {/* Text */}
                        <p>
                          Feugiat primis ligula risus auctor egestas augue mauri
                          viverra tortor in iaculis placerat eugiat mauris ipsum
                          in viverra gravida purus
                        </p>
                        {/* Button */}
                        <Link href="/experts-list">
                          <span className="btn btn-md btn-rose tra-white-hover">
                            Our Featured Experts
                          </span>
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
      </Swiper>
      {/* END SLIDER */}
    </section>
  );
};

export default Demo7Hero7;
