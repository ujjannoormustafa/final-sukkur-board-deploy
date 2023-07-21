import Link from "next/link";
import React from "react";

const Demo8Banner5 = () => {
    return (
        <section
            id="banner-5"
            className="bg-whitesmoke wide-60 banner-section division"
        >
            <div className="container">
                <div className="row">
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/image-04.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">Become a Teacher</h4>
                                {/* Text */}
                                <p>
                                    Feugiat primis ligula a risus auctor egestas
                                    an augue mauri and viverra tortor iaculis an
                                    eugiat viverra
                                </p>
                                {/* Button */}
                                <Link href="/become-a-teacher">
                                    <span className="btn btn-rose tra-black-hover">
                                        Find Out More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* END BANNER TEXT */}
                    {/* BANNER TEXT */}
                    <div className="col-md-6">
                        <div className="banner-5-txt">
                            {/* Icon */}
                            <img src="images/image-05.png" alt="banner-icon" />
                            {/* Text */}
                            <div className="b5-txt">
                                {/* Title */}
                                <h4 className="h4-xs">eTreeks for Business</h4>
                                {/* Text */}
                                <p>
                                    Feugiat primis ligula a risus auctor egestas
                                    an augue mauri and viverra tortor iaculis an
                                    eugiat viverra
                                </p>
                                {/* Button */}
                                <Link href="/courses-list">
                                    <span className="btn btn-rose tra-black-hover">
                                        Find Out More
                                    </span>
                                </Link>
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

export default Demo8Banner5;
