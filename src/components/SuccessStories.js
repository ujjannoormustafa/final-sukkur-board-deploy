import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home3ReviewProps } from "./sliderProps";
const SuccessStories = () => {
  return (
    <Swiper {...home3ReviewProps}>
      {/* TESTIMONIAL #1 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          Etiam sapien sem at sagittis congue an augue massa and varius egestas
          at suscipit magna tempus and aliquet porta vitae purus congue undo
          cursus magna cubilia augue vitae laoreet
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
      </SwiperSlide>
      {/*END  TESTIMONIAL #1 */}
      {/* TESTIMONIAL #2 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          At sagittis congue augue egestas rhoncus in magna ipsum vitae purus
          ipsum primis cubilia laoreet augue egestas luctus and donec diam ociis
          ultrice ligula magna suscipit
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
      </SwiperSlide>
      {/* END TESTIMONIAL #2 */}
      {/* TESTIMONIAL #3 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          Mauris donec an ociis magnis sapien etiam a sapien congue augue
          egestas et ultrice undo purus and diam integer congue at magna ligula
          an egestas magna suscipit lectus
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
      </SwiperSlide>
      {/* END TESTIMONIAL #3 */}
      {/* TESTIMONIAL #4 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          Sapien etiam sapien congue pretium augue purus and ligula lectus
          aenean magna mauris lectus laoreet tempor and egestas magna vitae
          laoreet
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
            </div>
            <h5 className="h5-xs">Michael Deal</h5>
            <span>UX Designer</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #4 */}
      {/* TESTIMONIAL #5 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          An augue cubilia laoreet and magna suscipit egestas magna ipsum purus
          ipsum primis and augue ultrice ligula egestas suscipit lectus gestas
          integer congue a lectus porta elementum
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
              <i className="fas fa-star-half-alt" />
            </div>
            <h5 className="h5-xs">Mark Paterson</h5>
            <span>Networking Student</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #5 */}
      {/* TESTIMONIAL #6 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          An augue cubilia laoreet undo magna a suscipit egestas magna and ipsum
          ligula vitae purus and ipsum primis in cubilia mollis risus lectus
          rutrum
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
            </div>
            <h5 className="h5-xs">David L.</h5>
            <span>WordPress Student</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #6 */}
      {/* TESTIMONIAL #7 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          Augue egestas volutpat and egestas an augue purus cubilia laoreet
          magna suscipit luctus and dolor blandit vitae purus diam tempus
          aliquet porta at rutrum placerat gestas egestas
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
      </SwiperSlide>
      {/* END TESTIMONIAL #7 */}
      {/* TESTIMONIAL #8 */}
      <SwiperSlide className="review-1">
        {/* Quote Icon */}
        <div className="quote-ico">
          <img src="images/left-quote.png" alt="quote-image" />
        </div>
        {/* Testimonial Text */}
        <p>
          Augue egestas volutpat and egestas augue in cubilia vitae laoreet a
          magna suscipit luctus at dolor blandit purus diam tempus elementum
          massa
        </p>
        {/* Author Data */}
        <div className="review-1-author d-flex align-items-center">
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
            </div>
            <h5 className="h5-xs">Andre Wisdom</h5>
            <span>PHP Student</span>
          </div>
        </div>
      </SwiperSlide>
      {/* END TESTIMONIAL #8 */}
      <div className="owl-dots"></div>
    </Swiper>
  );
};

export default SuccessStories;
