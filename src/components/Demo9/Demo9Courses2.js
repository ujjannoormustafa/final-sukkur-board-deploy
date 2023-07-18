import Link from "next/link";
import React from "react";

const Demo9Courses2 = () => {
  return (
    <section id="courses-2" className="wide-60 courses-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Most Popular Courses</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link href="/courses-list">
                  <a className="btn btn-tra-grey rose-hover">
                    View All Courses
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* COURSES HOLDER */}
        <div className="row">
          {/* COURSE #1 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-1-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      $78.99
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Course Title */}
                    <h5 className="h5-md">
                      Beginner Level English - Foundations
                    </h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Languages</span>
                      <span>English</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>4.5 (26 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #1 */}
          {/* COURSE #2 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-2-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      $54.78
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Title */}
                    <h5 className="h5-md">
                      Diploma in Basic English Grammar - Revised 2019
                    </h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Languages</span>
                      <span>English</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>5 (118 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #2 */}
          {/* COURSE #3 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-3-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      $23.99
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Title */}
                    <h5 className="h5-md">
                      The Complete Cyber Security Course : End Point Protection!
                    </h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Network Security</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span>4.5 (72 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #3 */}
          {/* COURSE #4 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-4-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      Free Course
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Title */}
                    <h5 className="h5-md">Google AdWords for Beginners 2020</h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>SEO</span>
                      <span>Marketing</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>5 (281 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #4 */}
          {/* COURSE #5 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-5-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      $44.99
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Title */}
                    <h5 className="h5-md">
                      Wordpress for Beginners - Master Wordpress Quickly
                    </h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Design</span>
                      <span>WordPress</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>4.15 (58 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #5 */}
          {/* COURSE #6 */}
          <div className="col-md-6 col-lg-4">
            <div className="cbox-2">
              <Link href="/course-details">
                <a>
                  {/* Course Data */}
                  <div className="course-data">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-6-img.jpg"
                      alt="course-preview"
                    />
                    {/* Course Price */}
                    <span className="course-price bg-rose white-color">
                      $13.99
                    </span>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    {/* Title */}
                    <h5 className="h5-md">
                      Excel Essentials: The Complete Excel Series - Level 1
                      &amp; 2
                    </h5>
                    {/* Course Tags */}
                    <p className="course-tags">
                      <span>Sowtware</span>
                      <span>Productivity</span>
                    </p>
                    {/* Text */}
                    <p className="p-sm">
                      Cursus porta feugiat and primis ultrice ligula risus
                      auctor, tempus feugiat at dolor lobortis felis viverra
                      dolor iaculis luctus placerat...
                    </p>
                    {/* Course Rating */}
                    <div className="course-rating clearfix">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span>5 (31 Ratings)</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* END COURSE #6 */}
        </div>
        {/* END COURSES HOLDER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo9Courses2;
