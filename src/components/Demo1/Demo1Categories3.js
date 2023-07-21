import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CategoryProps } from "../sliderProps";
const Demo1Categories3 = () => {
  return (
    <section id="categories-3" className="wide-100 categories-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Top Trending Categories</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link href="/categories-list">
                  <span className="btn btn-tra-grey rose-hover">
                    View All Categorie
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* CATEGORIE BOXES CAROUSEL */}
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...home1CategoryProps}>
              {/* CATEGORIE BOX #1 */}
              <SwiperSlide className="bg-blue c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/development.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Development</h5>
                      <p>36 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #1 */}
              {/* CATEGORIE BOX #2 */}
              <SwiperSlide className="bg-green c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/money.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Finance</h5>
                      <p>28 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #2 */}
              {/* CATEGORIE BOX #3 */}
              <SwiperSlide className="bg-red c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/chip.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">IT &amp; Software</h5>
                      <p>54 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #3 */}
              {/* CATEGORIE BOX #4 */}
              <SwiperSlide className="bg-teal c3-box text-center white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/gear.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Engineering</h5>
                      <p>68 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #4 */}
              {/* CATEGORIE BOX #5 */}
              <SwiperSlide className="bg-yellow c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/science.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Science</h5>
                      <p>59 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #5 */}
              {/* CATEGORIE BOX #6 */}
              <SwiperSlide className="bg-violet c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/marketing.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Marketing</h5>
                      <p>28 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #6 */}
              {/* CATEGORIE BOX #7 */}
              <SwiperSlide className="bg-orange c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/translation.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Languages</h5>
                      <p>137 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #7 */}
              {/* CATEGORIE BOX #8 */}
              <SwiperSlide className="bg-lightgreen c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/heartbeat.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Health &amp; Fitness</h5>
                      <p>94 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #8 */}
              {/* CATEGORIE BOX #9 */}
              <SwiperSlide className="bg-skyblue c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/design.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Design &amp; Arts</h5>
                      <p>72 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #9 */}
              {/* CATEGORIE BOX #10 */}
              <SwiperSlide className="bg-yellow c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/human-mind.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Life Science</h5>
                      <p>72 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #10 */}
              {/* CATEGORIE BOX #11 */}
              <SwiperSlide className="bg-red c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/calculator.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Mathematics</h5>
                      <p>63 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #11 */}
              {/* CATEGORIE BOX #12 */}
              <SwiperSlide className="bg-olive c3-box text-center icon-md white-color">
                <Link href="/category-details">
                  <span>
                    {/* Icon */}
                    <div className="c3-box-icon">
                      <img
                        src="images/icons/categories/photo.png"
                        alt="category-icon"
                      />
                    </div>
                    {/* Text */}
                    <div className="cbox-3-txt">
                      <h5 className="h5-md">Photography</h5>
                      <p>106 Courses</p>
                    </div>
                  </span>
                </Link>
              </SwiperSlide>
              {/* END CATEGORIE BOX #13 */}
              <div className="owl-nav mt-5">
                <button type="button" className="owl-prev">
                  <span>
                    <img src="images/prev.png" alt="image" />
                  </span>
                </button>
                <button type="button" className="owl-next">
                  <span>
                    <img src="images/next.png" alt="image" />
                  </span>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        {/* END CATEGORIE BOXES CAROUSEL */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1Categories3;
