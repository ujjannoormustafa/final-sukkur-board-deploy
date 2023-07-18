import Link from "next/link";
import React from "react";

const Demo7Video1 = () => {
    return (
        <section
            id="video-1"
            className="bg-lightgrey bg-map video-ection division"
        >
            <div className="container">
                <div className="video-1-holder">
                    <div className="row d-flex align-items-center">
                        {/* VIDEO LINK */}
                        <div className="col-md-6">
                            <div className="video-link text-center">
                                {/* Change the link HERE!!! */}
                                <div className="play-btn play-btn-rose text-center">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="video-popup3 video-play-button"
                                            href="https://www.youtube.com/embed/0gv7OC9L2s8"
                                        >
                                            <span />
                                        </a>
                                    </Link>
                                    {/* Preview Image */}
                                    <img
                                        className="img-fluid"
                                        src="images/video-1-img.jpg"
                                        alt="video-preview"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* END VIDEO LINK */}
                        {/* VIDEO TEXT */}
                        <div className="col-md-6">
                            <div className="video-txt">
                                {/* Title */}
                                <h4 className="h4-xl">
                                    Take the first step to knowledge with
                                    <span>eTreeks</span>
                                </h4>
                                {/* Text */}
                                <p className="p-md">
                                    Cursus porta, feugiat primis in ultrice
                                    ligula risus auctor tempus dolor feugiat,
                                    felis lacinia risus
                                </p>
                                {/* Button */}
                                <Link href="/courses-list">
                                    <a className="btn btn-tra-rose rose-hover">
                                        Find Out More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/* END VIDEO TEXT */}
                    </div>
                    {/* End row */}
                </div>
                {/* End video-1-holder */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo7Video1;
