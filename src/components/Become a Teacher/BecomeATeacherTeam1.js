import Link from "next/link";
import React from "react";

const BecomeATeacherTeam1 = () => {
    return (
        <section id="team-1" className="wide-60 team-ection division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h3 className="h3-sm">
                                Join Our Professional Team
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/teachers-list">
                                    <a className="btn btn-tra-grey rose-hover">
                                        Meet All Teachers
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    src="images/team-13.jpg"
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
                                    <Link href="/contacts">
                                        <a>Grow with eTreeks</a>
                                    </Link>
                                </h5>
                                <span>
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            href="mailto:youremail@mail.com"
                                        >
                                            hireme@domain.com
                                        </a>
                                    </Link>
                                </span>
                                {/* Rating */}
                                <div className="tm-rating grey-stars">
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <span className="tm-rating">0.00</span>
                                </div>
                                <p className="p-sm">0 Reviews</p>
                            </div>
                        </div>
                    </div>
                    {/* END TEAM MEMBER #4 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default BecomeATeacherTeam1;
