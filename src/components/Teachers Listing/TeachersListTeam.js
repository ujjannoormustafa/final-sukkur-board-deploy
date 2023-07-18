import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const TeachersListTeam = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#teamMember", sort, active);
    let list = document.querySelectorAll("#teamMember");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="team-1" className="wide-60 team-ection division">
        <div className="container">
          <div className="row">
            {/* TEAM MEMBER #1 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                    className="img-fluid"
                    src="images/team-1.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-linkedin"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Sam Richardson</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #1 */}
            {/* TEAM MEMBER #2 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-google-plus"
                          >
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Kally Brooks</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #2 */}
            {/* TEAM MEMBER #3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-linkedin"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Robert Coronado</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #3 */}
            {/* TEAM MEMBER #4 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Becky Reed</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #4 */}
            {/* TEAM MEMBER #5 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>David Smith</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #5 */}
            {/* TEAM MEMBER #6 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Linda J. Ross</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #6 */}
            {/* TEAM MEMBER #7 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Sergio Arriero</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #7 */}
            {/* TEAM MEMBER #8 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
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
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Linda Ferell</a>
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
              </div>
            </div>
            {/* END TEAM MEMBER #8 */}
            {/* TEAM MEMBER #9 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-9.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Lea Victoria</a>
                    </Link>
                  </h5>
                  <span>Life Science</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.82</span>
                  </div>
                  <p className="p-sm">51 Reviews</p>
                </div>
              </div>
            </div>
            {/* END TEAM MEMBER #9 */}
            {/* TEAM MEMBER #10 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-10.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Anthony Backer</a>
                    </Link>
                  </h5>
                  <span>Photography</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.91</span>
                  </div>
                  <p className="p-sm">86 Reviews</p>
                </div>
              </div>
            </div>
            {/* END TEAM MEMBER #10 */}
            {/* TEAM MEMBER #11 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-11.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Jorge Stucky</a>
                    </Link>
                  </h5>
                  <span>Science &amp; Math</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="tm-rating">4.38</span>
                  </div>
                  <p className="p-sm">70 Reviews</p>
                </div>
              </div>
            </div>
            {/* END TEAM MEMBER #11 */}
            {/* TEAM MEMBER #12 */}
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo">
                  <img
                    className="img-fluid"
                    src="images/team-12.jpg"
                    alt="team-member-foto"
                  />
                  {/* Social Icons */}
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="ico-youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/teacher-profile">
                      <a>Jilly Buchanan</a>
                    </Link>
                  </h5>
                  <span>Real Estate</span>
                  {/* Rating */}
                  <div className="tm-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="tm-rating">4.46</span>
                  </div>
                  <p className="p-sm">96 Reviews</p>
                </div>
              </div>
            </div>
            {/* END TEAM MEMBER #12 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <Paggination active={active} setActive={setActive} state={state} />
    </Fragment>
  );
};

export default TeachersListTeam;
