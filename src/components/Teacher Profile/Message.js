import Link from "next/link";
import React from "react";

const Message = () => {
    return (
        <section id="team-3" className="pt-100 team-section division">
            <div className="container">
                <h1 className='text-center display-7 py-4'>Message</h1>
                <div className="row">
                    {/* TEACHER PHOTO */}
                    <div className="col-md-4">
                        <div className="team-3-photo text-center">
                            {/* Teacher Photo */}
                            <div className="t-3-photo mb-25">
                                <img
                                    className="img-fluid"
                                    src="images/officer/officer-1.jpg"
                                    alt="Profile Picture"
                                />
                            </div>
                            {/* Social Icons */}
                            <div className="tm-3-social clearfix">
                                <ul className="text-center clearfix">
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-facebook"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-twitter"
                                            >
                                                <i className="fab fa-twitter" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-google-plus"
                                            >
                                                <i className="fab fa-google-plus-g" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-linkedin"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Links */}
                            <div className="t-3-links">
                                {/*<Link href="#">*/}
                                {/*    <span*/}
                                {/*        onClick={(e) => {*/}
                                {/*            e.preventDefault();*/}
                                {/*        }}*/}
                                {/*        className="btn btn-md btn-tra-grey custom-button"*/}
                                {/*    >*/}
                                {/*        Website*/}
                                {/*    </span>*/}
                                {/*</Link>*/}
                                {/*<Link href="#">*/}
                                {/*    <span*/}
                                {/*        onClick={(e) => {*/}
                                {/*            e.preventDefault();*/}
                                {/*        }}*/}
                                {/*        href="mailto:yourdomain@mail.com"*/}
                                {/*        className="btn btn-md btn-tra-grey rose-hover"*/}
                                {/*    >*/}
                                {/*        hello@yourdomain.com*/}
                                {/*    </span>*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                    </div>
                    {/* END TEACHER PHOTO */}
                    {/* TEACHER DATA */}
                    <div className="col-md-8">
                        <div className="team-3-txt pc-45">
                            {/* Name */}
                            <h3 className="h3-xs">
                                Mr. Rafique Ahmed Palh      </h3>
                            <span className={"text-primary my-2"}> Chairman of the Board.</span>
                            {/* Data */}

                            {/* Small Title */}

                            {/* Text */}
                            <p className='mt-15'>
                                The Information Technology is the crying need of the day;  hence in the evolved situation it is inevitable to set into motion  a fast communication system and interaction with the students, teachers, parents and the public through the modern methods of communication such as website
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    It gives me immense pleasure to launch the website of the Board to achieve the above objectives which will be obviously helpful for every one concerned.
                                </li>
                                <li>
                                    The Chief Minister Sindh, Syed Murad Ali Shah, has desired to ensure the transparency in the examination system and to establish the credibility of the Boards.
                                </li>

                            </ul>
                            {/* Text */}
                            <p>

                                INSHAALLAH, the Almighty Allah will guide us in achieving the above goals with the help of teachers of Schools & Colleges and staff of the Board.
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

export default Message;
