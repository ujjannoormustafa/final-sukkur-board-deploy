import React from "react";

const Demo9Banner1 = () => {
    return (
        <section id="banner-1" className="bg-yellow banner-section division">
            <div className="container">
                <div className="row">
                    {/* BANNER TEXT */}
                    <div className="col-md-12">
                        <div className="banner-1-txt text-center">
                            {/* Title */}
                            <h5 className="h5-md">
                                Don’t miss the chance to learn the skills you
                                need for less.
                                <span>Starting at $13.99</span>
                            </h5>
                            {/* COUNTDOWN ELEMENT */}
                            <div className="countdown">
                                <span className="countdown-txt">Ends in</span>
                                <div id="clock" />
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo9Banner1;
