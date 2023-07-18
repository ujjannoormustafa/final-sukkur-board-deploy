import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const etailsCourses5 = () => {
  
  return (
    <Fragment>
      <section
        id="courses-5"
        className="bg-whitesmoke courses-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-60">
                {/* Title 	*/}
                <h4 className="h4-xl">Browse Similar Courses</h4>
                {/* Text */}
                <p className="p-md">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
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
          <div className="row">
            {/* COURSES LIST */}
            <div className="col-lg-6">
              {/* COURSE #1 */}
              <div id="" className="cbox-5 b-bottom">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          Complete Wordpress Training for Beginners
                        </h5>
                        <p className="p-sm grey-color">
                          11 Total Hours - Updated 2/2020
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="cr-rating">4.89 (31 Reviews)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          7348
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$64.99</span>
                        <span className="old-price">$119.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #1 */}
              {/* COURSE #2 */}
              <div id="" className="cbox-5 b-bottom">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          WordPress Development - Themes &amp; Plugins
                        </h5>
                        <p className="p-sm grey-color">
                          8 Total Hours - Updated 12/2019
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span className="cr-rating">4.19 (76 Reviews)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          12035
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$29.99</span>
                        <span className="old-price">$69.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #2 */}
              {/* COURSE #3 */}
              <div id="" className="cbox-5">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          Wordpress for Beginners - Master Wordpress Quickly
                        </h5>
                        <p className="p-sm grey-color">
                          23 Total Hours - Updated 01/2020
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="cr-rating">4.15 (58 Ratings)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          10651
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$44.99</span>
                        <span className="old-price">$74.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #3 */}
            </div>
            {/* END COURSES LIST */}
            {/* COURSES LIST */}
            <div className="col-lg-6">
              {/* COURSE #4 */}
              <div id="" className="cbox-5 b-bottom">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          Install Wordpress Locally - No Monthly Web Hosting
                          Costs
                        </h5>
                        <p className="p-sm grey-color">
                          19 Total Hours - Updated 2/2020
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span className="cr-rating">4.08 (164 Reviews)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          15491
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$39.99</span>
                        <span className="old-price">$84.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #4 */}
              {/* COURSE #5 */}
              <div id="" className="cbox-5 b-bottom">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          Create Beautiful Landing Pages with WordPress
                        </h5>
                        <p className="p-sm grey-color">
                          36 Total Hours - Updated 12/2019
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <span className="cr-rating">4.79 (117 Reviews)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          17035
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$49.99</span>
                        <span className="old-price">$99.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #5 */}
              {/* COURSE #6 */}
              <div id="" className="cbox-5">
                <Link href="/course-details">
                  <a>
                    <div className="row">
                      {/* Course Description */}
                      <div className="col-sm-7 cbox-5-txt">
                        <h5 className="h5-xs">
                          How to Create a WordPress Website - Revised 2020
                        </h5>
                        <p className="p-sm grey-color">
                          24 Total Hours - Updated 11/2019
                        </p>
                        {/* Rating */}
                        <div className="course-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                          <span className="cr-rating">4.42 (82 Ratings)</span>
                        </div>
                      </div>
                      {/* Course Data */}
                      <div className="col-sm-3 cbox-5-data text-center clearfix">
                        <p className="grey-color">
                          <i className="fas fa-users" />
                          8163
                        </p>
                      </div>
                      {/* Course Price */}
                      <div className="col-sm-2 cbox-5-price text-right clearfix">
                        <span className="course-price">$32.99</span>
                        <span className="old-price">$62.99</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              {/* END COURSE #6 */}
            </div>
            {/* END COURSES LIST */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
    </Fragment>
  );
};

export default etailsCourses5;
