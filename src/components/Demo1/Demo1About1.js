import React from "react";
const Demo1About1 = () => {
    return (
        <section id="about-1" className="bg-05 about-section division">
            <div className="container white-color">
                <div className="row d-flex align-items-center">
                    {/* ABOUT BOX #1 */}
                    <div className="col-md-4">
                        <div className="abox-1 icon-xs">
                            {/* Icon */}
                            <span className="flaticon-004-computer" />
                            {/* Text */}
                            <div className="abox-1-txt">
                                <h5 className="h5-md">2,769 online courses</h5>
                                <p className="p-md">
                                    Explore a variety of fresh topics
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END ABOUT BOX #1 */}
                    {/* ABOUT BOX #2 */}
                    <div className="col-md-4">
                        <div className="abox-1 icon-xs">
                            {/* Icon */}
                            <span className="flaticon-028-learning-1" />
                            {/* Text */}
                            <div className="abox-1-txt">
                                <h5 className="h5-md">Expert instruction</h5>
                                <p className="p-md">
                                    Find the right instructor for you
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END ABOUT BOX #2 */}
                    {/* ABOUT BOX #3 */}
                    <div className="col-md-4">
                        <div className="abox-1 icon-xs">
                            {/* Icon */}
                            <span className="flaticon-032-tablet" />
                            {/* Text */}
                            <div className="abox-1-txt">
                                <h5 className="h5-md">Lifetime access</h5>
                                <p className="p-md">Learn on your schedule</p>
                            </div>
                        </div>
                    </div>
                    {/* END ABOUT BOX #3 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo1About1;
