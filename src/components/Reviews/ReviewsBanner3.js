import Link from "next/link";
import React from "react";

const ReviewsBanner3 = () => {
    return (
        <section
            id="banner-3"
            className="bg-lightgrey bg-map banner-section division"
        >
            <div className="container">
                <div className="banner-3-holder bg-lightdark">
                    <div className="row d-flex align-items-center">
                        {/* BANNER IMAGE */}
                        <div className="col-lg-8">
                            <div className="banner-3-img">
                                <img
                                    className="img-fluid"
                                    src="images/banner-3-img.jpg"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                        {/* END BANNER IMAGE */}
                        {/* BANNER TEXT */}
                        <div className="col-lg-4">
                            <div className="banner-3-txt white-color">
                                {/* Title */}
                                <h4 className="h4-xs">
                                    Learn something new every day with
                                    <span>eTreeks</span>
                                </h4>
                                {/* Button */}
                                <Link href="/courses-list">
                                    <a className="btn btn-rose tra-white-hover">
                                        Find Out More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* END BANNER TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End banner-3-holder */}
            </div>
            {/* End container */}
        </section>
    );
};

export default ReviewsBanner3;
