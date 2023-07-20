import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const CoursesListCourses5 = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#coursesList", sort, active);
    let list = document.querySelectorAll("#coursesList");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      {/*<section id="courses-5" className="courses-section division">*/}
      {/*  <div className="container">*/}
      {/*    /!* SECTION TITLE *!/*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-md-12">*/}
      {/*        <div className="section-title mb-40">*/}
      {/*          /!* Title 	*!/*/}
      {/*          <h4 className="h4-xl">All English Language Courses</h4>*/}
      {/*          /!* Text *!/*/}
      {/*          <p className="p-md">*/}
      {/*            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor*/}
      {/*            primis libero tempus, blandit posuere and ligula varius magna*/}
      {/*            a porta*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="row">*/}
      {/*      /!* COURSES LIST *!/*/}
      {/*      <div className="cbox-5 b-bottom col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  English for Beginners: Intensive English Speaking Course*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  54 Total Hours - Updated 2/2020*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.89 (331 Reviews)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  7348*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$24.99</span>*/}
      {/*                <span className="old-price">$59.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #1 *!/*/}
      {/*      /!* COURSE #2 *!/*/}
      {/*      <div className="cbox-5 b-bottom col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  English: Master 120 Common Phrasal Verbs*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  83 Total Hours - Updated 12/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star-half-alt" />*/}
      {/*                  <span className="cr-rating">4.19 (276 Reviews)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  12035*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$39.99</span>*/}
      {/*                <span className="old-price">$72.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #2 *!/*/}
      {/*      /!* COURSE #3 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  English for Beginners. The Complete Method. Level 2*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  62 Total Hours - Updated 01/2020*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.15 (458 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  10651*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$52.99</span>*/}
      {/*                <span className="old-price">$74.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #3 *!/*/}
      {/*      /!* COURSE #4 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  English for Beginners: Intensive English Speaking Course*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  28 Total Hours - Updated 11/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.72 (303 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  11169*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$49.99</span>*/}
      {/*                <span className="old-price">$92.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #4 *!/*/}
      {/*      /!* COURSE #5 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  Practice and Perfect Your English - Intermediate Level*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  51 Total Hours - Updated 11/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star-half-alt" />*/}
      {/*                  <span className="cr-rating">4.29 (165 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  9751*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$43.99</span>*/}
      {/*                <span className="old-price">$74.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #5 *!/*/}

      {/*      /!* END COURSES LIST *!/*/}
      {/*      /!* COURSES LIST *!/*/}
      {/*      <div className="cbox-5 b-bottom col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  Complete English Course: Learn English Language |*/}
      {/*                  Beginners*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  48 Total Hours - Updated 2/2020*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star-half-alt" />*/}
      {/*                  <span className="cr-rating">4.08 (264 Reviews)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  15491*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$19.99</span>*/}
      {/*                <span className="old-price">$44.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #6 *!/*/}
      {/*      /!* COURSE #7 *!/*/}
      {/*      <div className="cbox-5 b-bottom col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  English - Course 2 | Language Lessons For Beginners*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  36 Total Hours - Updated 12/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.79 (417 Reviews)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  17035*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$44.99</span>*/}
      {/*                <span className="old-price">$69.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #7 *!/*/}
      {/*      /!* COURSE #8 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  Practice and Perfect Your English - Intermediate Level*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  28 Total Hours - Updated 11/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star-half-alt" />*/}
      {/*                  <span className="cr-rating">4.42 (282 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  8163*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$29.99</span>*/}
      {/*                <span className="old-price">$62.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #8 *!/*/}
      {/*      /!* COURSE #9 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  Practice and Perfect Your English - Intermediate Level*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  28 Total Hours - Updated 11/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.32 (371 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  10368*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$34.99</span>*/}
      {/*                <span className="old-price">$59.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #9 *!/*/}
      {/*      /!* COURSE #10 *!/*/}
      {/*      <div className="cbox-5 col-lg-6">*/}
      {/*        <Link href="/course-details">*/}
      {/*          <a>*/}
      {/*            <div className="row">*/}
      {/*              /!* Course Description *!/*/}
      {/*              <div className="col-sm-7 cbox-5-txt">*/}
      {/*                <h5 className="h5-xs">*/}
      {/*                  Beginner Level English - Foundations*/}
      {/*                </h5>*/}
      {/*                <p className="p-sm grey-color">*/}
      {/*                  62 Total Hours - Updated 11/2019*/}
      {/*                </p>*/}
      {/*                /!* Rating *!/*/}
      {/*                <div className="course-rating">*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <i className="fas fa-star" />*/}
      {/*                  <span className="cr-rating">4.91 (418 Ratings)</span>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              /!* Course Data *!/*/}
      {/*              <div className="col-sm-3 cbox-5-data text-center clearfix">*/}
      {/*                <p className="grey-color">*/}
      {/*                  <i className="fas fa-users" />*/}
      {/*                  12047*/}
      {/*                </p>*/}
      {/*              </div>*/}
      {/*              /!* Course Price *!/*/}
      {/*              <div className="col-sm-2 cbox-5-price text-right clearfix">*/}
      {/*                <span className="course-price">$24.99</span>*/}
      {/*                <span className="old-price">$54.99</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*      /!* END COURSE #10 *!/*/}

      {/*      /!* END COURSES LIST *!/*/}
      {/*    </div>*/}
      {/*    /!* End row *!/*/}
      {/*  </div>*/}
      {/*  /!* End container *!/*/}
      {/*</section>*/}
      {/*<Paggination active={active} setActive={setActive} state={state} />*/}
      <></>
    </Fragment>
  );
};

export default CoursesListCourses5;
