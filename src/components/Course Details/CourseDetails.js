import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { VideoContext } from "../../context/video";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const CourseDetails = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#courseD", sort, active);
    let list = document.querySelectorAll("#courseD");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
      <Fragment>
        <section id="course-details" className="wide-40 course-section division">
          <div className="container">
            <div className="row">
              {/* COURSE DESCRIPTION */}
              <div className="col-lg-8">
                <div className="course-txt pe-30">
                  {/* Course Title */}
                  <h3 className="h3-sm">
                    WordPress for Beginners: Create a Website Step by Step
                  </h3>
                  {/* Course Shot Description */}
                  <p className="p-md">
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae auctor congue magna nihil impedit
                    ligula risus mauris donec magnis
                  </p>
                  {/* Course Short Data */}
                  <p className="course-short-data">
                    Created by: Kally Brooks • Last updated: 2/2020 • Languages:
                    English, German + 7 more
                  </p>
                  {/* Course Rating */}
                  <div className="course-rating clearfix">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span>4.84 (468 Ratings) • 14,425 Students Enrolled</span>
                  </div>
                  {/* WHAT YOU LEARN */}
                  <div className="what-you-learn">
                    {/* Title */}
                    <h5 className="h5-xl">{`What you'll learn`}</h5>
                    {/* What You Learn */}
                    <div className="row">
                      {/* List */}
                      <div className="col-lg-6">
                        <ul className="txt-list">
                          <li>Nullam rutrum eget nunc varius</li>
                          <li>
                            Integer congue magna at pretium purus pretium ligula
                            undo rutrum
                          </li>
                          <li>
                            Risus at congue etiam aliquam sapien an egestas
                            posuere blandit
                          </li>
                        </ul>
                      </div>
                      {/* List */}
                      <div className="col-lg-6">
                        <ul className="txt-list">
                          <li>Pretium ligula at rutrum dolor auctor</li>
                          <li>
                            Ligula at rutrum risus integer congue magna at pretium
                            purus pretium
                          </li>
                          <li>
                            Congue etiam aliquam egestas sapien undo posuere
                            auctor magna
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* END WHAT YOU LEARN */}
                  {/* COURSE REQUIREMENTS */}
                  <div className="cs-requirements cd-block">
                    {/* Small Title */}
                    <h5 className="h5-xl">Requirements</h5>
                    {/* Text */}
                    <p>
                      Lorem ipsum dolor sit amet, lectus laoreet impedit gestas.
                      Aenean magna ligula eget dolor suscipit egestas viverra
                      dolor iaculis luctus magna suscipit egestas
                    </p>
                    {/* List */}
                    <ul className="txt-list">
                      <li>
                        Pretium ligula auctor nulla vitae massa aliqum blandit
                      </li>
                      <li>
                        Rutrum risus integer magna at pretium purus pretium
                        cubilia laoreet
                      </li>
                      <li>
                        Aliquam sapien egestas posuere auctor congue magna aliquet
                        non molestie
                      </li>
                    </ul>
                  </div>
                  {/* END COURSE REQUIREMENTS */}
                  {/* COURSE DESCRIPTION */}
                  <div className="cs-description cd-block">
                    {/* Small Title */}
                    <h5 className="h5-xl">Course description</h5>
                    {/* Text */}
                    <p>
                      Sagittis congue augue egestas volutpat egestas magna
                      suscipit egestas magna ipsum vitae purus efficitur ipsum
                      primis in cubilia laoreet augue egestas luctus donec diam.
                      Curabitur ac dapibus libero. Quisque eu tristique neque.
                      Phasellus blandit tristique justo
                    </p>
                    {/* Text */}
                    <p>Quisque eu tristique neque phasellus:</p>
                    {/* List */}
                    <ul className="txt-list">
                      <li>
                        Pretium ligula dolor auctor nulla vitae massa a purus
                        aliqum blandit
                      </li>
                      <li>
                        Ligula at rutrum risus integer congue magna at pretium
                        purus pretium gravida
                      </li>
                      <li>
                        Congue etiam aliquam sapien egestas posuere auctor congue
                        magna
                      </li>
                      <li>
                        Suscipit egestas viverra dolor iaculis luctus magna
                        suscipit egestas
                      </li>
                      <li>
                        Aliquet elementum massa vestibulum ut sagittis massa lorem
                      </li>
                    </ul>
                  </div>
                  {/* END COURSE DESCRIPTION */}
                  {/* COURSE TARGET */}
                  <div className="cs-target cd-block">
                    {/* Small Title */}
                    <h5 className="h5-xl">Who this course is for:</h5>
                    {/* List */}
                    <ul className="txt-list">
                      <li>
                        Quisque vel laoreet turpis urna augue, viverra a augue
                        eget, dictum
                      </li>
                      <li>
                        Sagittis congue augue egestas volutpat magna suscipit
                        egestas magna ipsum egestas vitae purus efficitur ipsum
                        primis in cubilia laoreet augue luctus donec diam
                      </li>
                      <li>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta
                      </li>
                    </ul>
                  </div>
                  {/* END COURSE TARGET */}
                  {/* COURSE CONTENT */}
                  <div className="cs-content cd-block">
                    {/* Small Title */}
                    <h5 className="h5-xl">Course content</h5>
                    {/* Text */}
                    <p className="p-md">
                      Level Beginner • 13 Lectures • 03:06:14 Total Hours
                    </p>
                    {/* ACCORDION */}
                    <Accordion
                        defaultActiveKey="collapseOne"
                        id="accordion"
                        role="tablist"
                    >
                      {/* CARD #1 */}
                      <div className="card">
                        {/* Card Header */}
                        <div className="card-header" role="tab" id="headingOne">
                          {/* Header Title */}
                          <h5 className="h5-xs">
                            <Accordion.Toggle
                                data-toggle="collapse"
                                as="a"
                                href="#collapseOne"
                                eventKey="collapseOne"
                            >
                              Introducion
                            </Accordion.Toggle>
                          </h5>
                          {/* Header Data */}
                          <div className="hdr-data">
                            <p>3 lectures, 34:51 min</p>
                          </div>
                        </div>
                        {/* Card Body */}
                        <Accordion.Collapse eventKey="collapseOne">
                          <div className="card-body">
                            {/* List */}
                            <ul className="txt-list mb-10">
                              <li>
                                Pretium ligula auctor nulla vitae massa aliqum
                                blandit
                              </li>
                              <li>
                                Rutrum risus integer magna at pretium purus
                                pretium cubilia laoreet
                              </li>
                            </ul>
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">
                                <span
                                    className="video-popup2"
                                    onClick={() => showVideo("7e90gBu4pas")}
                                    href="#"
                                >
                                  <i className="fas fa-play-circle" />
                                  Mauris donec ociis magnis sapien
                                </span>
                              </Link>
                            </p>
                          </div>
                        </Accordion.Collapse>
                      </div>
                      {/* END CARD #1 */}
                      {/* CARD #2 */}
                      <div className="card">
                        {/* Card Header */}
                        <div className="card-header" role="tab" id="headingTwo">
                          <h5 className="h5-xs">
                            <Accordion.Toggle
                                as="a"
                                href="#collapseTwo"
                                data-toggle="collapse"
                                eventKey="collapseTwo"
                            >
                              Getting Started
                            </Accordion.Toggle>
                          </h5>
                          {/* Header Data */}
                          <div className="hdr-data">
                            <p>5 lectures, 01:32:49 hrs</p>
                          </div>
                        </div>
                        {/* Card Body */}
                        <Accordion.Collapse eventKey="collapseTwo">
                          <div className="card-body">
                            {/* Text */}
                            <p>
                              Maecenas gravida porttitor nunc, quis vehicula magna
                              luctus tempor. Quisque vel laoreet turpis. Urna
                              augue, viverra a augue eget, dictum tempor diam.
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-10">
                              <li>
                                Pretium ligula auctor nulla vitae massa aliqum
                                blandit
                              </li>
                              <li>
                                Rutrum risus integer magna at pretium purus
                                pretium cubilia laoreet
                              </li>
                              <li>
                                Aliquam sapien egestas posuere auctor congue magna
                                aliquet non molestie
                              </li>
                              <li>
                                Neque undo luctus feugiat justo integer at odio
                                velna
                              </li>
                            </ul>
                            {/* Download File */}
                            <p className="download-file">
                              <i className="fas fa-file-archive" />
                              <Link href="#">

                                    href="sources/your-file.zip"
                                    download="your-file"
                                >
                                  Download File
                              </Link>
                            </p>
                          </div>
                        </Accordion.Collapse>
                      </div>
                      {/* END CARD #2 */}
                      {/* CARD #3 */}
                      <div className="card">
                        {/* Card Header */}
                        <div className="card-header" role="tab" id="headingThree">
                          <h5 className="h5-xs">
                            <Accordion.Toggle
                                as="a"
                                data-toggle="collapse"
                                href="#collapseThree"
                                eventKey="collapseThree"
                            >
                              User Generated Content
                            </Accordion.Toggle>
                          </h5>
                          {/* Header Data */}
                          <div className="hdr-data">
                            <p>3 lectures, 54:28 min</p>
                          </div>
                        </div>
                        {/* Card Body */}
                        <Accordion.Collapse eventKey="collapseThree">
                          <div className="card-body">
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">
                                <span
                                    className="video-popup2"
                                    onClick={() => showVideo("7e90gBu4pas")}
                                >
                                  <i className="fas fa-play-circle" />
                                  Mauris donec ociis magnis sapien
                                </span>
                              </Link>
                            </p>
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">

                                    className="video-popup1"
                                    onClick={() => showVideo("SZEflIVnhH8")}
                                    href="#"
                                >
                                  <i className="fas fa-play-circle" />
                                  Congue and impedit magna viverra dolor vitae
                              </Link>
                            </p>
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">
                                    className="video-popup3"
                                    onClick={() => showVideo("0gv7OC9L2s8")}
                                    href="#"
                                >
                                  <i className="fas fa-play-circle" />
                                  Efficitur ipsum ligula undo cubilia laoreet
                              </Link>
                            </p>
                          </div>
                        </Accordion.Collapse>
                      </div>
                      {/* END CARD #3 */}
                      {/* CARD #4 */}
                      <div className="card">
                        {/* Card Header */}
                        <div className="card-header" role="tab" id="headingFour">
                          <h5 className="h5-xs">
                            <Accordion.Toggle
                                as="a"
                                data-toggle="collapse"
                                href="#collapseFour"
                                eventKey="collapseFour"
                            >
                              Course Assessment
                            </Accordion.Toggle>
                          </h5>
                          {/* Header Data */}
                          <div className="hdr-data">
                            <p>1 lecture, 26:39 min</p>
                          </div>
                        </div>
                        {/* Card Body */}
                        <Accordion.Collapse eventKey="collapseFour">
                          <div className="card-body">
                            {/* Text */}
                            <p>
                              Curabitur ac dapibus libero. Quisque eu tristique
                              neque. Phasellus blandit tristique justo aliquam.
                              Aliquam vitae molestie nunc. Quisque sapien justo,
                              aliquet non molestie sed purus venenatis semper
                              lacus. Cursus porta a tellus neque dolor primis
                              magna nullam
                            </p>
                            {/* Download File */}
                            <p className="download-file">
                              <i className="fas fa-file-archive" />
                              <Link href="#">

                                    href="sources/your-file.zip"
                                    download="your-file"
                                >
                                  Download File
                              </Link>
                            </p>
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">

                                    className="video-popup1"
                                    onClick={() => showVideo("SZEflIVnhH8")}
                                    href="#"
                                >
                                  <i className="fas fa-play-circle" />
                                  Congue and impedit magna viverra dolor vitae

                              </Link>
                            </p>
                            {/* Video link */}
                            <p className="cb-video">
                              <Link href="#">

                                    className="video-popup3"
                                    onClick={() => showVideo("0gv7OC9L2s8")}
                                    href="#"
                                >
                                  <i className="fas fa-play-circle" />
                                  Efficitur ipsum ligula undo cubilia laoreet

                              </Link>
                            </p>
                          </div>
                        </Accordion.Collapse>
                      </div>
                      {/* END CARD #4 */}
                    </Accordion>
                    {/* END ACCORDION */}
                  </div>
                  {/* END COURSE CONTENT */}
                  {/* COURSE RATING */}
                  <div className="cs-rating cd-block">
                    {/* Small Title */}
                    <h5 className="h5-xl">Course Reviews</h5>
                    {/* Text */}
                    <p>
                      Lorem ipsum dolor sit amet, lectus laoreet impedit gestas.
                      Aenean magna ligula eget dolor suscipit egestas viverra
                      dolor iaculis luctus magna suscipit egestas
                    </p>
                    {/* Rating */}
                    <div className="course-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="cr-rating">4.84 Based on 468 Reviews</span>
                    </div>
                    {/* Progress Bar Rating */}
                    <div className="row d-flex align-items-center">
                      <div className="col-md-9 col-xl-7">
                        <div className="cs-rating-data">
                          <ul>
                            {/* 5 Stars Rating */}
                            <li className="barWrapper clearfix">
                              {/* Stars */}
                              <div className="ratingtext-right">
                                <p className="p-sm">5 stars</p>
                              </div>
                              {/* Rating Data */}
                              <div className="progress-wrapper">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "82%",
                                    }}
                                    aria-valuenow={82}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                              </div>
                              {/* Percentage */}
                              <div className="ratingtext-left">
                                <p className="p-sm">82%</p>
                              </div>
                            </li>
                            {/* 4 Stars Rating */}
                            <li className="barWrapper clearfix">
                              {/* Stars */}
                              <div className="ratingtext-right">
                                <p className="p-sm">4 stars</p>
                              </div>
                              {/* Rating Data */}
                              <div className="progress-wrapper">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "10%",
                                    }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                              </div>
                              {/* Percentage */}
                              <div className="ratingtext-left">
                                <p className="p-sm">10%</p>
                              </div>
                            </li>
                            {/* 3 Stars Rating */}
                            <li className="barWrapper clearfix">
                              {/* Stars */}
                              <div className="ratingtext-right">
                                <p className="p-sm">3 stars</p>
                              </div>
                              {/* Rating Data */}
                              <div className="progress-wrapper">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "4%",
                                    }}
                                    aria-valuenow={4}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                              </div>
                              {/* Percentage */}
                              <div className="ratingtext-left">
                                <p className="p-sm">4%</p>
                              </div>
                            </li>
                            {/* 2 Stars Rating */}
                            <li className="barWrapper clearfix">
                              {/* Stars */}
                              <div className="ratingtext-right">
                                <p className="p-sm">2 stars</p>
                              </div>
                              {/* Rating Data */}
                              <div className="progress-wrapper">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "2%",
                                    }}
                                    aria-valuenow={2}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                              </div>
                              {/* Percentage */}
                              <div className="ratingtext-left">
                                <p className="p-sm">2%</p>
                              </div>
                            </li>
                            {/* 1 Star Rating */}
                            <li className="barWrapper clearfix">
                              {/* Stars */}
                              <div className="ratingtext-right">
                                <p className="p-sm">1 star</p>
                              </div>
                              {/* Rating Data */}
                              <div className="progress-wrapper">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: "2%",
                                    }}
                                    aria-valuenow={2}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                              </div>
                              {/* Percentage */}
                              <div className="ratingtext-left">
                                <p className="p-sm">2%</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Progress Bar Rating */}
                  </div>
                  {/* END COURSE RATING */}
                  {/* TESTIMONIAL #1 */}
                  <div className="review-4">
                    <div className="review-4-txt">
                      {/* Text */}
                      <p>
                        Etiam sapien a sagittis congue and augue massa varius
                        egestas a suscipit magna undo tempus aliquet porta magna
                        ipsum and mauris placerat feugiat primis integer an auctor
                        cursus euismod at purus pretium efficitur ipsum laoreet
                        augue egestas
                      </p>
                      {/* Author Data */}
                      <div className="review-4-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                              className="img-fluid"
                              src="images/review-author-1.jpg"
                              alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          {/* Rating */}
                          <div className="tst-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h5 className="h5-xs">Jim M.</h5>
                          <span>Software Engineer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END  TESTIMONIAL #1 */}
                  {/* TESTIMONIAL #2 */}
                  <div className="review-4">
                    <div className="review-4-txt">
                      {/* Text */}
                      <p>
                        Sagittis congue augue egestas volutpat egestas magna
                        suscipit egestas magna ipsum vitae purus efficitur ipsum
                        primis in cubilia laoreet augue egestas luctus donec.
                        Dapibus curabitur and libero quisque tristique neque
                        phasellus blandit tristique
                      </p>
                      {/* Author Data */}
                      <div className="review-4-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                              className="img-fluid"
                              src="images/review-author-2.jpg"
                              alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          {/* Rating */}
                          <div className="tst-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                          </div>
                          <h5 className="h5-xs">Jennifer</h5>
                          <span>Graphic Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END  TESTIMONIAL #2 */}
                  {/* TESTIMONIAL #3 */}
                  <div className="review-4">
                    <div className="review-4-txt">
                      {/* Text */}
                      <p>
                        Aliqum mullam blandit tempor sapien gravida donec ipsum,
                        at porta justo. Velna vitae auctor congue magna nihil
                        impedit ligula risus. Mauris donec ociis et magnis sapien
                        sagittis sapien sem congue tempor gravida donec enim ipsum
                        a porta justo integer odio velna a purus efficitur ipsum
                        primis in cubilia laoreet augue egestas luctus
                      </p>
                      {/* Author Data */}
                      <div className="review-4-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                              className="img-fluid"
                              src="images/review-author-3.jpg"
                              alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          {/* Rating */}
                          <div className="tst-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h5 className="h5-xs">Joel Peterson</h5>
                          <span>Online Student</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END  TESTIMONIAL #3 */}
                  {/* TESTIMONIAL #4 */}
                  <div className="review-4">
                    <div className="review-4-txt">
                      {/* Text */}
                      <p>
                        In at mauris vel nisl convallis porta at vitae dui. Nam
                        lacus ligula, vulputate mullam molestie bibendum quis,
                        aliquet an elementum massa ut sagittis. Aliqum mullam
                        blandit tempor sapien gravida donec ipsum porta justo.
                        Velna vitae auctor congue magna nihil impedit ligula
                        risus. Mauris donec ociis et sem magnis sapien sagittis
                        sapien
                      </p>
                      {/* Author Data */}
                      <div className="review-4-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                              className="img-fluid"
                              src="images/review-author-4.jpg"
                              alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          {/* Rating */}
                          <div className="tst-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <h5 className="h5-xs">Michael Deal</h5>
                          <span>UX Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END  TESTIMONIAL #4 */}
                </div>
              </div>
              {/* END COURSE DESCRIPTION */}
              {/* COURSE DATA */}
              <div className="col-lg-4">
                <div className="course-data">
                  {/* Image */}
                  <img
                      className="img-fluid"
                      src="images/courses/course-5-img.jpg"
                      alt="course-preview"
                  />
                  {/* Course Price */}
                  <div className="course-data-price text-center">
                    $74.99
                    <span className="old-price">$124.99</span>
                    <p className="p-sm">16 days left at this price!</p>
                  </div>
                  {/* Links */}
                  <div className="course-data-links">
                    <Link href="#">
                      <span className="btn btn-md btn-rose tra-grey-hover">
                        Start Course Now
                      </span>
                    </Link>
                    <Link href="#">
                      <span className="btn btn-md btn-tra-grey rose-hover">
                        Add To List
                      </span>
                    </Link>
                  </div>
                  {/* List */}
                  <div className="course-data-list">
                    <span>This course includes:</span>
                    <p>
                      <i className="fas fa-graduation-cap" />
                      English, German, Italian and 7 more
                    </p>
                    <p>
                      <i className="far fa-play-circle" /> 3 hours on-demand video
                    </p>
                    <p>
                      <i className="fas fa-file-archive" /> 12 downloadable
                      resources
                    </p>
                    <p>
                      <i className="far fa-bookmark" /> Full lifetime access
                    </p>
                    <p>
                      <i className="fas fa-mobile-alt" />
                      Access on mobile and TV
                    </p>
                    <p>
                      <i className="far fa-id-card" />
                      Certificate of Completion
                    </p>
                  </div>
                </div>
              </div>
              {/* END COURSE DATA */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </section>
        <Paggination active={active} setActive={setActive} state={state} />
      </Fragment>
  );
};

export default CourseDetails;
