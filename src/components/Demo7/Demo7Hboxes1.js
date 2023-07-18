import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CoursesProps } from "../sliderProps";

const Demo7Hboxes1 = () => {
  return (
    <section id="hboxes-1" className="hero-boxes-section division">
      <div className="container">
        <div className="hero-boxes-holder">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                {/* Text */}
                <h4 className="h4-xl">Most Popular Courses</h4>
                <p>Explore from 2,769 online courses in 20 categories</p>
                {/* Button */}
                <div className="title-btn">
                  <Link href="/courses-list">
                    <a className="btn btn-sm btn-tra-grey rose-hover">
                      View All Courses
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* COURSE BOXES CAROUSEL */}
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                {...home1CoursesProps}
                className="owl-carousel owl-theme owl-loaded courses-carousel"
              >
                {/* COURSE #1 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-1-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Languages</span>
                          <span>English</span>
                        </p>
                        {/* Course Title */}
                        <h5 className="h5-xs">
                          Beginner Level English - Foundations
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half" />
                          <span>4.5 (26 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$149.99</span>
                          $138.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #1 */}
                {/* COURSE #2 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-2-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Languages</span>
                          <span>English</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Diploma in Basic English Grammar - Revised 2019
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>5 (118 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$174.99</span>
                          $59.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #2 */}
                {/* COURSE #3 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-3-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Network Security</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          The Complete Cyber Security Course : End Point
                          Protection!
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half" />
                          <span>4.5 (72 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$119.99</span>
                          $34.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #3 */}
                {/* COURSE #4 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-4-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>SEO</span>
                          <span>Marketing</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Google AdWords for Beginners 2020
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>5 (281 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">Free Course</span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #4 */}
                {/* COURSE #5 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-5-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Design</span>
                          <span>WordPress</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Wordpress for Beginners - Master Wordpress Quickly
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>4.15 (58 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$194.99</span>
                          $62.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #5 */}
                {/* COURSE #6 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-6-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Sowtware</span>
                          <span>Productivity</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Excel Essentials: The Complete Excel Series - Level 1
                          &amp; 2
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>5 (31 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$149.99</span>
                          $45.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #6 */}
                {/* COURSE #7 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-7-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Web Design</span>
                          <span>HTML 5</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Landing Page Design &amp; Conversion Rate Optimization
                          2020
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half" />
                          <span>4.8 (74 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$109.99</span>
                          $23.99
                        </span>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                {/* END COURSE #7 */}
                {/* COURSE #8 */}
                <SwiperSlide className="cbox-1">
                  <Link href="/course-details">
                    <a>
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src="images/courses/course-8-img.jpg"
                        alt="course-preview"
                      />
                      {/* Text */}
                      <div className="cbox-1-txt">
                        {/* Course Tags */}
                        <p className="course-tags">
                          <span>Internet</span>
                          <span>Marketing</span>
                        </p>
                        {/* Title */}
                        <h5 className="h5-xs">
                          Instagram Marketing 2020: A Step-By-Step to 10,000
                          Followers
                        </h5>
                        {/* Course Rating */}
                        <div className="course-rating clearfix">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span>5 (374 Ratings)</span>
                        </div>
                        {/* Course Price */}
                        <span className="course-price">
                          <span className="old-price">$169.99</span>
                          $33.99
                        </span>
                      </div>
                    </a>
                  </Link>
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

export default Demo7Hboxes1;
