import Link from "next/link";
import React from "react";

const Demo8Courses5 = () => {
    return (
        <section id="courses-5" className="courses-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h3 className="h3-sm">Best Courses of All-Time</h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/courses-list">
                                    <span className="btn btn-tra-grey rose-hover">
                                        View All Courses
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* COURSES LIST */}
                    <div className="col-lg-6">
                        {/* COURSE #1 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Diploma in Basic English Grammar
                                                - Revised 2020
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
                                                <span className="cr-rating">
                                                    4.89 (31 Reviews)
                                                </span>
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
                                            <span className="course-price">
                                                $64.99
                                            </span>
                                            <span className="old-price">
                                                $119.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                        {/* END COURSE #1 */}
                        {/* COURSE #2 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Diploma in Information
                                                Technology Management
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
                                                <span className="cr-rating">
                                                    4.19 (76 Reviews)
                                                </span>
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
                                            <span className="course-price">
                                                $29.99
                                            </span>
                                            <span className="old-price">
                                                $69.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                        {/* END COURSE #2 */}
                        {/* COURSE #3 */}
                        <div className="cbox-5">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Wordpress for Beginners - Master
                                                Wordpress Quickly
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
                                                <span className="cr-rating">
                                                    4.15 (58 Ratings)
                                                </span>
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
                                            <span className="course-price">
                                                $44.99
                                            </span>
                                            <span className="old-price">
                                                $74.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                        {/* END COURSE #3 */}
                    </div>
                    {/* END COURSES LIST */}
                    {/* COURSES LIST */}
                    <div className="col-lg-6">
                        {/* COURSE #4 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Instagram Marketing 2020: A
                                                Step-By-Step to 10,000 Followers
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
                                                <span className="cr-rating">
                                                    4.08 (164 Reviews)
                                                </span>
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
                                            <span className="course-price">
                                                $39.99
                                            </span>
                                            <span className="old-price">
                                                $84.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                        {/* END COURSE #4 */}
                        {/* COURSE #5 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Computer Networking - Wired
                                                &amp; Wireless Networks
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
                                                <span className="cr-rating">
                                                    4.79 (117 Reviews)
                                                </span>
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
                                            <span className="course-price">
                                                $49.99
                                            </span>
                                            <span className="old-price">
                                                $99.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                        {/* END COURSE #5 */}
                        {/* COURSE #6 */}
                        <div className="cbox-5">
                            <Link href="/course-details">
                                <span>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Diesel Engine Cycles,
                                                Maintenance, &amp; Control
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
                                                <span className="cr-rating">
                                                    4.42 (82 Ratings)
                                                </span>
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
                                            <span className="course-price">
                                                $32.99
                                            </span>
                                            <span className="old-price">
                                                $62.99
                                            </span>
                                        </div>
                                    </div>
                                </span>
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
    );
};

export default Demo8Courses5;
