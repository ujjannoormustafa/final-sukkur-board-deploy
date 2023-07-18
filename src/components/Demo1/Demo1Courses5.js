import Link from "next/link";
import React from "react";
const Demo1Courses5 = () => {
    return (
        <section
            id="courses-5"
            className="bg-lightgrey courses-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h3 className="h3-sm">
                                Best Online Courses of 2019
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* COURSES LIST */}
                    <div className="col-lg-6">
                        {/* COURSE #1 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                English for Beginners: Intensive
                                                English Speaking Course
                                            </h5>
                                            <p className="p-sm grey-color">
                                                54 Total Hours - Updated 2/2020
                                            </p>
                                            {/* Rating */}
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span className="cr-rating">
                                                    4.89 (331 Reviews)
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
                                                $34.99
                                            </span>
                                            <span className="old-price">
                                                $64.99
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END COURSE #1 */}
                        {/* COURSE #2 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Computer Networking - Wired
                                                &amp; Wireless Networks
                                            </h5>
                                            <p className="p-sm grey-color">
                                                83 Total Hours - Updated 12/2019
                                            </p>
                                            {/* Rating */}
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                                <span className="cr-rating">
                                                    4.19 (276 Reviews)
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
                                                $49.99
                                            </span>
                                            <span className="old-price">
                                                $72.99
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END COURSE #2 */}
                        {/* COURSE #3 */}
                        <div className="cbox-5">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Spanish for Beginners. The
                                                Complete Method. Level 2
                                            </h5>
                                            <p className="p-sm grey-color">
                                                62 Total Hours - Updated 01/2020
                                            </p>
                                            {/* Rating */}
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <span className="cr-rating">
                                                    4.15 (458 Ratings)
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
                                                $29.99
                                            </span>
                                            <span className="old-price">
                                                $74.99
                                            </span>
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
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                IT Management - Building
                                                Information Systems
                                            </h5>
                                            <p className="p-sm grey-color">
                                                48 Total Hours - Updated 2/2020
                                            </p>
                                            {/* Rating */}
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                                <span className="cr-rating">
                                                    4.08 (264 Reviews)
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
                                                $22.99
                                            </span>
                                            <span className="old-price">
                                                $44.99
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END COURSE #4 */}
                        {/* COURSE #5 */}
                        <div className="cbox-5 b-bottom">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Hidden Secrets Of Sales &amp;
                                                Marketing - Revised 2019
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
                                                    4.79 (417 Reviews)
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
                                                $56.99
                                            </span>
                                            <span className="old-price">
                                                $84.99
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END COURSE #5 */}
                        {/* COURSE #6 */}
                        <div className="cbox-5">
                            <Link href="/course-details">
                                <a>
                                    <div className="row">
                                        {/* Course Description */}
                                        <div className="col-sm-7 cbox-5-txt">
                                            <h5 className="h5-xs">
                                                Biology - Evolution, Natural
                                                Selection and DNA
                                            </h5>
                                            <p className="p-sm grey-color">
                                                28 Total Hours - Updated 11/2019
                                            </p>
                                            {/* Rating */}
                                            <div className="course-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                                <span className="cr-rating">
                                                    4.42 (282 Ratings)
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
                                                $38.99
                                            </span>
                                            <span className="old-price">
                                                $62.99
                                            </span>
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
    );
};

export default Demo1Courses5;
