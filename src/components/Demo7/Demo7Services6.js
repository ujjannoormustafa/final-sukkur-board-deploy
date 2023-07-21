import Link from "next/link";
import React from "react";

const Demo7Services6 = () => {
    return (
        <section
            id="services-6"
            className="bg-03 wide-60 services-section division"
        >
            <div className="container white-color">
                {/* SERVICES TEXT */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="services-6-txt">
                            {/* Title */}
                            <h3 className="h3-md">
                                Get Quality Education with eTreeks
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                                Integer congue magna at pretium purus pretium
                                ligula at rutrum luctus risus eros dolor auctor
                                ipsum blandit luctus purus vehicula magna a
                                tempor laoreet
                            </p>
                            {/* Button */}
                            <Link href="/categories-list">
                                <span className="btn btn-md btn-rose tra-white-hover">
                                    Start Learning Now!
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* END SERVICES TEXT */}
                {/* SERVICE BOXES */}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            {/* SERVICE BOX #1 */}
                            <div className="sbox-6 icon-xl">
                                <span className="flaticon-031-select" />
                                <h5 className="h5-xs">Trending Courses</h5>
                            </div>
                            {/* SERVICE BOX #2 */}
                            <div className="sbox-6 icon-xl">
                                <span className="flaticon-028-learning-1" />
                                <h5 className="h5-xs">Certified Teachers</h5>
                            </div>
                            {/* SERVICE BOX #3 */}
                            <div className="sbox-6 icon-xl">
                                <span className="flaticon-006-diploma" />
                                <h5 className="h5-xs">
                                    Graduation Certificate
                                </h5>
                            </div>
                            {/* SERVICE BOX #4 */}
                            <div className="sbox-6 icon-xl">
                                <span className="flaticon-013-elearning-5" />
                                <h5 className="h5-xs">
                                    Online Course Facilities
                                </h5>
                            </div>
                            {/* SERVICE BOX #5 */}
                            <div className="sbox-6 icon-xl">
                                <span className="flaticon-001-book" />
                                <h5 className="h5-xs">
                                    Free Books &amp; Library
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END SERVICE BOXES */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo7Services6;
