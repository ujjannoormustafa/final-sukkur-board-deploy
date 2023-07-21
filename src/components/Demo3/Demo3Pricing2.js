import Link from "next/link";
import React from "react";
const Demo3Pricing2 = () => {
    return (
        <section
            id="pricing-2"
            className="bg-03 wide-60 pricing-section division"
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* PRICING TEXT */}
                    <div className="col-lg-7">
                        <div className="pricing-txt pc-25 white-color mb-40">
                            {/* Title */}
                            <h3 className="h3-lg">
                                Go eTreeks Premium. Transform your life through
                                online education.
                            </h3>
                            {/* List */}
                            <ul className="txt-list mt-25">
                                <li>
                                    Sagittis congue augue egestas volutpat
                                    egestas magna suscipit egestas magna ipsum
                                    vitae purus efficitur ipsum primis and
                                    cubilia laoreet
                                </li>
                                <li>
                                    Integer congue magna 1,000 free courses
                                    pretium ligula at rutrum risus luctus dolor
                                    auctor ipsum blandit purus. Curabitur ac
                                    dapibus libero mauris donec ociis and neque.
                                    Blandit non molestie sapien tristique justo
                                    ut aliquam
                                </li>
                                <li>
                                    Feugiat 50% off ligula risus auctor egestas
                                    an augue mauri viverra tortor in iaculis
                                    placerat eugiat mauris ipsum in viverra
                                    tortor and gravida
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END PRICING TEXT */}
                    {/* PRICE PLAN PREMIUM */}
                    <div className="col-lg-5">
                        <div className="pricing-table">
                            {/* Plan Price  */}
                            <div className="pricing-plan text-center">
                                <img
                                    className="img-75"
                                    src="images/crown.png"
                                    alt="price-icon"
                                />
                                <h5 className="h5-md">Premium Monthly</h5>
                                <p className="grey-color">
                                    For just $11.99 per month, you get:
                                </p>
                            </div>
                            {/* Pricing Plan Features */}
                            <ul className="features">
                                <li>
                                    Exclusive Monthly Discounts
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    Your Discounts Never Expire
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    Up To 50% Off Your Certification
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    High Resolution Videos
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    Offline Viewing
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    Uninterrupted Ad-Free Learning
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                                <li>
                                    24/7 Premium Support
                                    <span>
                                        <i className="fas fa-check" />
                                    </span>
                                </li>
                            </ul>
                            {/* Pricing Table Button */}
                            <div className="pricing-plan-btn text-center">
                                <Link href="#">
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-rose tra-black-hover"
                                    >
                                        Go Premium
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END PRICE PLAN PREMIUM */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo3Pricing2;
