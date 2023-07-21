import Link from "next/link";
import React from "react";

const CategoryDetailsPageHero = () => {
    return (
        <section className="bg-05 page-hero-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-txt white-color">
                            {/* Title */}
                            <h3 className="h3-xs">Language Courses</h3>
                            {/* Share Icons */}
                            <div className="share-list">
                                <ul className="share-social-icons text-center clearfix">
                                    <li>
                                        <p>
                                            <span>386 courses</span> found
                                        </p>
                                        <p />
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="share-ico ico-facebook"
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
                                                className="share-ico ico-twitter"
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
                                                href="mailto:yourdomain@mail.com"
                                                className="share-ico ico-mail"
                                            >
                                                <i className="far fa-envelope" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="share-ico ico-bookmark"
                                            >
                                                <i className="far fa-bookmark" />
                                                19.7k
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}
                            <p>
                                <span>24,648 students</span> are learning
                                Foreign Language on eTreeks
                            </p>
                        </div>
                    </div>
                    {/* END PAGE HERO TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default CategoryDetailsPageHero;
