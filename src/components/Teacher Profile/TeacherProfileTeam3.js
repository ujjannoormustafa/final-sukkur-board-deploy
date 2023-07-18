import Link from "next/link";
import React from "react";

const TeacherProfileTeam3 = () => {
    return (
        <section id="team-3" className="pt-100 team-section division">
            <div className="container">
                <div className="row">
                    {/* TEACHER PHOTO */}
                    <div className="col-md-4">
                        <div className="team-3-photo text-center">
                            {/* Teacher Photo */}
                            <div className="t-3-photo mb-25">
                                <img
                                    className="img-fluid"
                                    src="images/team-5.jpg"
                                    alt="team-member-foto"
                                />
                            </div>
                            {/* Social Icons */}
                            <div className="tm-3-social clearfix">
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
                            {/* Links */}
                            <div className="t-3-links">
                                <Link href="#">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-tra-grey rose-hover"
                                    >
                                        Website
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        href="mailto:yourdomain@mail.com"
                                        className="btn btn-md btn-tra-grey rose-hover"
                                    >
                                        hello@yourdomain.com
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END TEACHER PHOTO */}
                    {/* TEACHER DATA */}
                    <div className="col-md-8">
                        <div className="team-3-txt pc-45">
                            {/* Name */}
                            <h3 className="h3-xs">David Smith</h3>
                            <span>IT &amp; Software Courses</span>
                            {/* Data */}
                            <p className="teacher-data">
                                14,622 Total Students • 9 Courses • 4.63 Rating
                                (738 Reviews)
                            </p>
                            {/* Small Title */}
                            <h5 className="h5-xl mt-40">About Me</h5>
                            {/* Text */}
                            <p>
                                Aliqum mullam blandit tempor sapien gravida
                                donec ipsum porta justo. Velna vitae auctor
                                congue magna nihil impedit ligula risus. Mauris
                                donec ociis magnis sapien sagittis sapien sem
                                congue tempor gravida donec an enim ipsum porta
                                justo integer odio velna a purus efficitur ipsum
                                primis in cubilia laoreet
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    Maecenas gravida porttitor nunc tempor
                                    laoreet turpis
                                </li>
                                <li>
                                    Integer congue magna at pretium purus
                                    pretium ligula at rutrum risus luctus dolor
                                    auctor ipsum blandit purus aliqum mullam
                                    blandit tempor
                                </li>
                                <li>
                                    Risus at congue etiam aliquam sapien egestas
                                    posuere gravida
                                </li>
                                <li>
                                    Porttitor nunc, quis vehicula magna luctus
                                    tempor laoreet
                                </li>
                                <li>
                                    Magna at pretium purus pretium ligula at
                                    rutrum risus luctus dolor auctor ipsum
                                    blandit purus aliqum mullam blandit tempor
                                </li>
                            </ul>
                            {/* Text */}
                            <p>
                                Maecenas gravida porttitor nunc, quis vehicula
                                magna luctus tempor. Quisque laoreet turpis urna
                                augue, viverra a augue eget, dictum tempor
                                magnis. Pulvinar consectetur and placerat
                                imperdiet dui varius viverr ac massa lorem fusce
                            </p>
                        </div>
                    </div>
                    {/* END TEACHER DATA */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default TeacherProfileTeam3;
