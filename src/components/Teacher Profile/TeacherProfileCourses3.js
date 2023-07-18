import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const TeacherProfileCourses3 = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#c3", sort, active);
    let list = document.querySelectorAll("#c3");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="courses-3" className="pt-80 pb-60 courses-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-40">
                <h5 className="h5-xl">My Courses (9)</h5>
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
            {/* END COURSE #3*/}
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
              </div>
            </div>
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
            {/* END COURSE #3*/}
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
              </div>
            </div>
            {/* END COURSE #4 */}
          </div>
          {/* END COURSES HOLDER */}
        </div>
        {/* End container */}
      </section>
      <Paggination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default TeacherProfileCourses3;
