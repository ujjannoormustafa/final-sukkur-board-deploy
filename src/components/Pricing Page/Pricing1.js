import Link from "next/link";
import React from "react";

const Pricing1 = () => {
    return (
        <section id="pricing-1" className="wide-60 pricing-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title title-centered mb-70">
                            {/* Title 	*/}
                            <h3 className="h3-lg">
                                Our Transparent Pricing Plans
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                        </div>
                    </div>
                </div>
                {/* PRICING TABLES HOLDER */}
                <div className="row pricing-row">
                    {/* PRICE PLAN MONTHLY */}
                    <div className="col-md-4 col-lg-4">
                        <div className="pricing-table">
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <h5 className="h5-md">Monthly</h5>
                                <sup>$</sup>
                                <span className="price">29</span>
                                <sup className="coins">99</sup>
                                <p className="p-sm">per month</p>
                            </div>
                            {/* Pricing Plan Features */}
                            <ul className="features">
                                <li>5 Courses Included</li>
                                <li>Course Learning Checks</li>
                                <li>High Resolution Videos</li>
                                <li>Certificate After Completion</li>
                                <li className="disabled-option">
                                    Interactive Courses
                                </li>
                                <li className="disabled-option">
                                    Extra Exercises
                                </li>
                                <li className="disabled-option">
                                    Offline Viewing
                                </li>
                            </ul>
                            {/* Pricing Table Button */}
                            <div className="pricing-plan-btn">
                                <Link href="#">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-tra-grey rose-hover"
                                    >
                                        Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END PRICE PLAN STARTER */}
                    {/* PRICE PLAN ANNUAL */}
                    <div className="col-md-4 col-lg-4">
                        <div className="pricing-table">
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <h5 className="h5-md">Annual</h5>
                                <sup>$</sup>
                                <span className="price">249</span>
                                <sup className="coins">99</sup>
                                <p className="p-sm">per year</p>
                            </div>
                            {/* Pricing Plan Features */}
                            <ul className="features">
                                <li>10 Courses Included</li>
                                <li>Course Learning Checks</li>
                                <li>High Resolution Videos</li>
                                <li>Certificate After Completion</li>
                                <li>Interactive Courses</li>
                                <li>Extra Exercises</li>
                                <li className="disabled-option">
                                    Offline Viewing
                                </li>
                            </ul>
                            {/* Pricing Table Button */}
                            <div className="pricing-plan-btn">
                                <Link href="#">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-rose black-hover"
                                    >
                                        Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END PRICE PLAN ANNUAL */}
                    {/* PRICE PLAN BUSINESS */}
                    <div className="col-md-4 col-lg-4">
                        <div className="pricing-table">
                            {/* Plan Price  */}
                            <div className="pricing-plan">
                                <h5 className="h5-md">Business</h5>
                                <sup>$</sup>
                                <span className="price">499</span>
                                <sup className="coins">99</sup>
                                <p className="p-sm">per year</p>
                            </div>
                            {/* Pricing Plan Features */}
                            <ul className="features">
                                <li>15 Courses Included</li>
                                <li>Course Learning Checks</li>
                                <li>High Resolution Videos</li>
                                <li>Certificate After Completion</li>
                                <li>Interactive Courses</li>
                                <li>Extra Exercises</li>
                                <li>Offline Viewing</li>
                            </ul>
                            {/* Pricing Table Button */}
                            <div className="pricing-plan-btn">
                                <Link href="#">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-tra-grey rose-hover"
                                    >
                                        Get Started
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END PRICE PLAN BUSINESS */}
                </div>
                {/* END PRICING TABLES HOLDER */}
                {/* PRICING NOTICE TEXT */}
                <div className="row">
                    <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                        <div className="pricing-notice text-center mb-40">
                            <p className="p-md">
                                <span>Note!</span> Prices may vary from location
                                to location due to local taxation laws and
                                conversion rates from U.S. Dollars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End container */}
        </section>
    );
};

export default Pricing1;
