import React from "react";
const Demo3About3 = () => {
    return (
        <section id="about-3" className="pt-80 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6">
                        <div className="txt-block pc-25">
                            {/* Title */}
                            <h3 className="h3-sm">
                                Learn new personal &amp; professional skills
                                online
                            </h3>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec porta
                                and blandit ipsum enim justo integer velna vitae
                                auctor integer congue magna and purus pretium
                                risus ligula rutrum luctus ultrice
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    Nullam rutrum eget nunc varius etiam mollis
                                    risus undo
                                </li>
                                <li>
                                    Integer congue magna at pretium purus
                                    pretium ligula at rutrum risus luctus dolor
                                    auctor ipsum blandit purus
                                </li>
                                <li>
                                    Risus at congue etiam aliquam sapien egestas
                                    posuere
                                </li>
                                <li>
                                    Etiam sapien sem at sagittis congue an augue
                                    massa and varius egestas at suscipit magna
                                    tempus and aliquet porta vitae
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6">
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/image-02.png"
                                alt="about-image"
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

export default Demo3About3;
