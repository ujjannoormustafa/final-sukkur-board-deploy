import React from "react";

const Demo8Hero8 = () => {
    return (
        <section id="hero-8" className="bg-scroll hero-section division">
            <div className="container">
                <div className="row">
                    {/* HERO TEXT */}
                    <div className="col-md-12">
                        <div className="hero-txt text-center white-color">
                            {/* Title */}
                            <h4 className="h4-xs">
                                Welcome to eTreeks Learning Center
                            </h4>
                            <h2 className="h2-md">
                                Online and on-campus learning from industry
                                experts
                            </h2>
                            {/* Button */}
                            <span
                                href="#categories-3"
                                className="btn btn-md btn-rose tra-white-hover"
                            >
                                Start Learning Now
                            </span>
                        </div>
                    </div>
                    {/* END HERO TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo8Hero8;
