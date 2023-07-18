import React from "react";

const Demo8About4 = () => {
    return (
        <section id="about-4" className="wide-70 about-section division">
            <div className="container">
                {/* ABOUT TEXT */}
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="a4-txt">
                            {/* Title */}
                            <h5 className="h5-xl text-center">
                                Our goal is to make online education work for
                                everyone
                            </h5>
                            {/* Text */}
                            <p>
                                Sagittis congue augue egestas volutpat egestas
                                magna suscipit egestas magna ipsum vitae purus
                                efficitur ipsum primis and cubilia laoreet augue
                                egestas luctus donec diam. Curabitur ac dapibus
                                libero mauris donec ociis and neque. Phasellus
                                blandit tristique justo ut aliquam. Aliquam
                                vitae molestie nunc sapien justo, aliquet non
                                molestie augue tempor sapien
                            </p>
                        </div>
                    </div>
                </div>
                {/* END ABOUT TEXT */}
                {/* ABOUT IMAGE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/image-03.jpg"
                                alt="about-image"
                            />
                        </div>
                    </div>
                </div>
                {/* ABOUT BOXES */}
                <div className="a4-boxes">
                    <div className="row d-flex align-items-center">
                        {/* BOX #1 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-004-computer" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-md">Trusted Content</h5>
                                    <p>
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #1 */}
                        {/* BOX #2 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-028-learning-1" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-md">
                                        Certified Teachers
                                    </h5>
                                    <p>
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #2 */}
                        {/* BOX #3 */}
                        <div className="col-md-4">
                            <div className="abox-4 icon-sm">
                                {/* Icon */}
                                <span className="flaticon-032-tablet" />
                                {/* Text */}
                                <div className="abox-4-txt">
                                    <h5 className="h5-md">Lifetime Access</h5>
                                    <p>
                                        Congue augue egestas magna volutpat
                                        dictum suscipit ipsum egestas magna
                                        vitae purus
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* END BOX #3 */}
                    </div>
                    {/* End row */}
                </div>
                {/* END ABOUT BOXES */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo8About4;
