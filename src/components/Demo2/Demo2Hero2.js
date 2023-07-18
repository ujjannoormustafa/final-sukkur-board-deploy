import Link from "next/link";
import React from "react";

const Demo2Hero2 = () => {
    return (
        <section id="hero-2" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* HERO TEXT */}
                    <div className="col-md-8 col-lg-6">
                        <div className="hero-txt mb-40 white-color">
                            <h5 className="h5-lg">eTreeks Learning Center</h5>
                            {/* Title */}
                            <h3>2,769 Online Courses From The Best Tutors</h3>
                            {/* Text */}
                            <p className="p-md">
                                Feugiat primis ligula risus auctor egestas an
                                augue mauri viverra tortor in iaculis placerat
                                eugiat mauris ipsum viverra in tortor and
                                gravida purus lorem in tortor dolor and iaculis
                            </p>
                            {/* Button */}
                            <Link href="/categories-list">
                                <a className="btn btn-md btn-rose tra-white-hover">
                                    View All Categories
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="col-md-4 col-lg-6">
                        <div className="hero-2-img mb-40 text-center">
                            <img
                                className="img-fluid"
                                src="images/hero-2-img.png"
                                alt="hero-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo2Hero2;
