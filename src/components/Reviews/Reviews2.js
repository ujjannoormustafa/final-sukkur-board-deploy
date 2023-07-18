import React, { Fragment, useEffect, useState } from "react";
import { getPagination, isotopLayout, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const Reviews2 = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    isotopLayout();
    pagination(".masonry-item", sort, active);
    let list = document.querySelectorAll(".masonry-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="reviews-2" className="wide-60 reviews-section division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 reviews-grid">
              <div className="masonry-wrap grid-loaded">
                {/* TESTIMONIAL #1 */}
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Etiam sapien a sagittis congue and augue massa varius
                      egestas a suscipit magna tempus aliquet porta magna ipsum
                      and mauris placerat a feugiat primis integer auctor cursus
                      euismod at purus pretium efficitur ipsum orci ligula
                      cubilia laoreet magna
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
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
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Sagittis congue augue egestas volutpat egestas magna
                      suscipit egestas magna ipsum vitae purus efficitur ipsum
                      primis in cubilia laoreet augue egestas luctus donec diam.
                      Curabitur dapibus and libero quisque tristique neque
                      phasellus blandit tristique justo aliquam justo suscipit
                      in magna dignissim
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
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
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Aliqum mullam blandit tempor sapien gravida donec ipsum,
                      at porta justo. Velna vitae auctor congue magna nihil
                      impedit ligula risus. Mauris donec ociis et magnis sapien
                      sagittis sapien sem congue tempor gravida donec enim ipsum
                      a porta justo integer odio velna a purus efficitur ipsum
                      primis in cubilia laoreet augue egestas luctus donec purus
                      and blandit sodales
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
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
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      In at mauris vel nisl convallis porta at vitae dui. Nam
                      lacus ligula, vulputate mullam molestie bibendum quis,
                      aliquet an elementum massa ut sagittis. Aliqum mullam
                      blandit tempor sapien gravida donec ipsum porta justo.
                      Velna vitae auctor congue magna nihil impedit ligula
                      risus. Mauris donec ociis et magnis sapien sagittis sapien
                      sem congue tempor gravida donec an enim ipsum porta justo
                      integer odio velna a purus efficitur ipsum primis in
                      cubilia laoreet augue egestas luctus donec
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
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
                {/* TESTIMONIAL #5 */}
                <div className="review-2 masonry-item">
                  <div className="review-5-txt">
                    {/* Text */}
                    <p>
                      Payment data vitae auctor a congue magna tempor sapien
                      eget gravida laoreet turpis urna augue, viverra an augue
                      eget, dictum tempor diam pulvinar consectetur purus
                      efficitur ipsum primis in cubilia laoreet augue donec,
                      dictum tempor
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/review-author-5.jpg"
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
                        </div>
                        <h5 className="h5-xs">Mark Paterson</h5>
                        <span>Networking Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Ut non mauris libero. Sed consequat posuere nunc, eu
                      porttitor neque dignissim nec. Donec bibendum sodales elit
                      eu blandit. Suspendisse at finibus metus. Integer nulla
                      pulvinar commodo nec, pulvinar sed nisi. Sed augue turpis,
                      mollis a vehicula ornare, dapibus. Mauris donec ociis et
                      magnis sapien sagittis
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/review-author-6.jpg"
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
                        <h5 className="h5-xs">David L.</h5>
                        <span>WordPress Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Sagittis congue augue egestas volutpat egestas magna
                      suscipit egestas magna ipsum vitae purus efficitur ipsum
                      primis in cubilia laoreet augue egestas luctus donec diam.
                      Curabitur ac dapibus libero. Quisque eu tristique neque.
                      Phasellus blandit at tristique justo ut aliquam vitae
                      molestie nunc sapien justo, aliquet purus molestie
                      venenatis aliquam eget lacinia elit
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/review-author-7.jpg"
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
                        <h5 className="h5-xs">Aaron Wall</h5>
                        <span>Online Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-2 masonry-item">
                  <div className="review-2-txt">
                    {/* Text */}
                    <p>
                      Etiam sapien a sagittis congue and augue massa varius
                      egestas a suscipit magna tempus aliquet porta magna ipsum
                      and mauris placerat a feugiat primis integer auctor cursus
                      euismod at purus pretium efficitur ipsum orci ligula
                      cubilia laoreet magna
                    </p>
                    {/* Author Data */}
                    <div className="review-2-author d-flex align-items-center">
                      {/* Author Avatar */}
                      <div className="author-avatar">
                        <img
                          className="img-fluid"
                          src="images/review-author-8.jpg"
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
                        <h5 className="h5-xs">Andre Wisdom</h5>
                        <span>PHP Student</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END  TESTIMONIAL #8 */}
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <Paggination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default Reviews2;
