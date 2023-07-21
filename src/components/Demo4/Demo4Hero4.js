import Link from "next/link";
import React from "react";

const Demo4Hero4 = () => {
    return (
        <section id="hero-4" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row">
                    {/* HERO TEXT */}
                    <div className="col-md-8 col-lg-6">
                        <div className="hero-txt white-color1">
                            {/* Title */}
                            <h2 className="h2-md">
                                Improve your practical language skills with
                                <span>eTreeks</span>
                            </h2>
                            {/* Text */}
                            <p className="p-md">
                                Feugiat primis ligula risus auctor egestas an
                                augue mauri viverra tortor in iaculis placerat
                                eugiat mauris ipsum viverra tortor and gravida
                                purus lorem in tortor viverra dolor
                            </p>
                            {/* Button */}
                            <Link href="/categories-list">
                                <span className="btn btn-md btn-rose tra-black-hover">
                                    View All Categories
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo4Hero4;
