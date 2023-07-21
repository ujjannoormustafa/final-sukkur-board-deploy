import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamcarousel } from "../sliderProps";

const Aboutteam2 = () => {
  return (
    <section
      id="team-2"
      className="bg-whitesmoke wide-100 team-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title title-centered mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Meet Our Expert Teachers</h3>

              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
            </div>
          </div>
        </div>
        {/* TEAM MEMBERS CAROUSEL */}
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...teamcarousel}
              className="owl-carousel owl-theme owl-loaded team-carousel"
            >
              {/* TEAM MEMBER #1 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-1.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Sam Richardson</span>
                    </Link>
                  </h5>
                  <span>Head Of Department</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.89</span>
                  </div>
                  <p className="p-sm">31 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-1 */}
              {/* TEAM MEMBER #2 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-2.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Kally Brooks</span>
                    </Link>
                  </h5>
                  <span>Business &amp; Management</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="tm-rating">4.38</span>
                  </div>
                  <p className="p-sm">17 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-2 */}
              {/* TEAM MEMBER #3 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-3.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Robert Coronado</span>
                    </Link>
                  </h5>
                  <span>Engineering &amp; Technology</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="tm-rating">4.64</span>
                  </div>
                  <p className="p-sm">23 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-3 */}
              {/* TEAM MEMBER #4 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-4.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Becky Reed</span>
                    </Link>
                  </h5>
                  <span>Design &amp; Art</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.78</span>
                  </div>
                  <p className="p-sm">31 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-4 */}
              {/* TEAM MEMBER #5 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-5.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>David Smith</span>
                    </Link>
                  </h5>
                  <span>IT &amp; Software</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.64</span>
                  </div>
                  <p className="p-sm">62 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-5 */}
              {/* TEAM MEMBER #6 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-6.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Linda J. Ross</span>
                    </Link>
                  </h5>
                  <span>Teacher of English</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="tm-rating">4.33</span>
                  </div>
                  <p className="p-sm">59 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-6 */}
              {/* TEAM MEMBER #7 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-7.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Sergio Arriero</span>
                    </Link>
                  </h5>
                  <span>Teacher of Spanish</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.19</span>
                  </div>
                  <p className="p-sm">42 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-7 */}
              {/* TEAM MEMBER #8 */}
              <SwiperSlide className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-8.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <span href="#" className="ico-facebook">
                          <i className="fab fa-facebook-f" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-twitter">
                          <i className="fab fa-twitter" />
                        </span>
                      </li>
                      <li>
                        <span href="#" className="ico-youtube">
                          <i className="fab fa-youtube" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>Linda Ferell</span>
                    </Link>
                  </h5>
                  <span>Healt &amp; Fitness</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.81</span>
                  </div>
                  <p className="p-sm">74 Reviews</p>
                </div>
              </SwiperSlide>
              {/* END TEAM MEMBER-8 */}
            </Swiper>
          </div>
        </div>
        {/* END TEAM MEMBERS CAROUSEL */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Aboutteam2;
