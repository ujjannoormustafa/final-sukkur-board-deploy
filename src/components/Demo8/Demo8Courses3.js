import Link from "next/link";
import React from "react";

const Demo8Courses3 = () => {
  return (
    <section id="courses-3" className="wide-60 courses-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title title-centered1 mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Highest Rated Online Courses</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link href="/courses-list">
                  <a className="btn btn-rose tra-black-hover">
                    View All Courses
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* COURSES HOLDER */}
        <div className="row courses-grid">
          {/* COURSE #1 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-1-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
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
                      <i className="fas fa-star-half-alt" />
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
            </div>
          </div>
          {/* END COURSE #1 */}
          {/* COURSE #2 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-2-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
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
            </div>
          </div>
          {/* END COURSE #2 */}
          {/* COURSE #3 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-3-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>IT Managment</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Diploma in Information Technology Management
                    </h5>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
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
            </div>
          </div>
          {/* END COURSE #3 */}
          {/* COURSE #4 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-4-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>SEO</span>
                      <span>Marketing</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">Google AdWords for Beginners 2020</h5>
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
            </div>
          </div>
          {/* END COURSE #4 */}
          {/* COURSE #5 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-5-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
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
            </div>
          </div>
          {/* END COURSE #5 */}
          {/* COURSE #6 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-9-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Science</span>
                      <span>Diploma</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Industrial Engineering - Control Valve Basics
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
            </div>
          </div>
          {/* END COURSE #6 */}
          {/* COURSE #7 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-8-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
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
            </div>
          </div>
          {/* END COURSE #7 */}
          {/* COURSE #8 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-10-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Science</span>
                      <span>Engines</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Diesel Engine Cycles, Maintenance, &amp; Control
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
                      <span className="old-price">$154.99</span>
                      $41.99
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #8 */}
          {/* COURSE #9 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-11-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>IT</span>
                      <span>Networking</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Computer Networking - Wired &amp; Wireless Networks
                    </h5>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>4.65 (71 Ratings)</span>
                    </div>
                    {/* Course Price */}
                    <span className="course-price">
                      <span className="old-price">$194.99</span>
                      $62.99
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #9 */}
          {/* COURSE #10 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-14-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Marketing</span>
                      <span>Sales</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Hidden Secrets Of Sales &amp; Marketing - Revised 2019
                    </h5>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>5 (85 Ratings)</span>
                    </div>
                    {/* Course Price */}
                    <span className="course-price">
                      <span className="old-price">$119.99</span>
                      $24.99
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #10 */}
          {/* COURSE #11 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-12-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Science</span>
                      <span>Biology</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      Biology - Evolution, Natural Selection and DNA
                    </h5>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>4.18 (62 Ratings)</span>
                    </div>
                    {/* Course Price */}
                    <span className="course-price">
                      <span className="old-price">$199.99</span>
                      $62.99
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #11 */}
          {/* COURSE #12 */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link href="/course-details">
                <a>
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="images/courses/course-13-img.jpg"
                    alt="course-preview"
                  />
                  {/* Text */}
                  <div className="cbox-4-txt">
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>IT Management</span>
                    </p>
                    {/* Title */}
                    <h5 className="h5-xs">
                      IT Management - Building Information Systems
                    </h5>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>5 (16 Ratings)</span>
                    </div>
                    {/* Course Price */}
                    <span className="course-price">
                      <span className="old-price">$129.99</span>
                      $23.99
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #12 */}
        </div>
        {/* END COURSES HOLDER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo8Courses3;
