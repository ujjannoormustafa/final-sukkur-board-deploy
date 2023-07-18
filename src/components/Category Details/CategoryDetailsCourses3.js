import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const CategoryDetailsCourses3 = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#categorycourses3", sort, active);
    let list = document.querySelectorAll("#categorycourses3");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="courses-3" className="wide-60 courses-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-40">
                {/* Title 	*/}
                <h4 className="h4-xl">All Languages Courses</h4>
                {/* Text */}
                <p className="p-md">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
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
                        <span>Sam Richardson</span>
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
                        <span>Kally Brooks</span>
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
                      src="images/courses/course-16-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Becky Reed</span>
                        <span>French</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        The French Subjunctive - Intermediate Level
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
                      src="images/courses/course-15-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>David Smith</span>
                        <span>English</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        English for Beginners: Intensive English Speaking Course
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
                      <span className="course-price">
                        <span className="old-price">$84.99</span>
                        $64.99
                      </span>
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
                      src="images/courses/course-19-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Linda J. Ross</span>
                        <span>Japanese</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        Learn Japanese for Beginners: The Ultimate 30-Lesson
                        Course
                      </h5>
                      {/* Course Rating */}
                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>4.1 (58 Ratings)</span>
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
                      src="images/courses/course-17-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Becky Reed</span>
                        <span>Italian</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        Learn Italian Language: Intermediate Level
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
                      src="images/courses/course-18-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Robert Coronado</span>
                        <span>Spanish</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        Beginner Spanish Course: Learn to Speak Spanish Like a
                        Pro!
                      </h5>
                      {/* Course Rating */}
                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
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
                      src="images/courses/course-20-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Kally Brooks</span>
                        <span>German</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        Deutch: Master 120 Common Phrasal Verbs
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
            {/* END COURSE #8 */}
            {/* COURSE #9 */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="cbox-1">
                <Link href="/course-details">
                  <a>
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-21-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>David Smith</span>
                        <span>English</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        English Grammar Launch Advanced: Upgrade Your Speaking
                      </h5>
                      {/* Course Rating */}
                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>4.0 (185 Ratings)</span>
                      </div>
                      {/* Course Price */}
                      <span className="course-price">
                        <span className="old-price">$134.99</span>
                        $72.99
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* END COURSE #9 */}
            {/* COURSE #10 */}

            {/* END COURSE #10 */}
            {/* COURSE #11 */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="cbox-1">
                <Link href="/course-details">
                  <a>
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="images/courses/course-23-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Kally Brooks</span>
                        <span>French</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        Practice and Perfect Your French - Intermediate Level
                      </h5>
                      {/* Course Rating */}
                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>4.7 (401 Ratings)</span>
                      </div>
                      {/* Course Price */}
                      <span className="course-price">
                        <span className="old-price">$84.99</span>
                        $42.99
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
                      src="images/courses/course-24-img.jpg"
                      alt="course-preview"
                    />
                    {/* Text */}
                    <div className="cbox-1-txt">
                      {/* Course Tags */}
                      <p className="course-tags">
                        <span>Robert Coronado</span>
                        <span>French</span>
                      </p>
                      {/* Title */}
                      <h5 className="h5-xs">
                        French - Course 2 | Language Lessons For Beginners
                      </h5>
                      {/* Course Rating */}
                      <div className="course-rating clearfix">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>4.2 (193 Ratings)</span>
                      </div>
                      {/* Course Price */}
                      <span className="course-price">
                        <span className="old-price">$129.99</span>
                        $63.99
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

      <Paggination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default CategoryDetailsCourses3;
