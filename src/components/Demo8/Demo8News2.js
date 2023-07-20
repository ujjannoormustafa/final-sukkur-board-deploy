import Link from "next/link";
import React from "react";

const Demo8News2 = () => {
    return (
        <section id="news-2" className="wide-60 news-section division">
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-70">
                            {/* Title 	*/}
                            <h3 className="h3-sm">
                                Our Stories &amp; Latest News
                            </h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/results">
                                    <a className="btn btn-tra-grey rose-hover">
                                        Read More Stories
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NEWS GRID */}
                <div className="row d-flex align-items-center">
                    {/* ARTICLE #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-1" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">March 11, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">
                                    <a>
                                        Integer congue magna at pretium purus
                                        pretium
                                    </a>
                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec enim
                                blandit ipsum porta justo integer odio velna
                                vitae auctor integer
                            </p>
                            {/* Post Author */}
                            <span>By Joel Peterson</span>
                        </div>
                    </div>
                    {/* END ARTICLE #1 */}
                    {/* ARTICLE #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-2" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">March 04, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">
                                    <a>
                                        Congue magna eTreeks purus pretium
                                        magnis
                                    </a>
                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Donec enim blandit and ipsum porta justo integer
                                odio a velna vitae auctor an integer congue
                                magna at pretium nulla
                            </p>
                            {/* Post Author */}
                            <span>By Jennifer K.</span>
                        </div>
                    </div>
                    {/* END ARTICLE #2 */}
                    {/* ARTICLE #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-3" className="article-2 b-right">
                            {/* Post Data */}
                            <p className="p-sm">February 24, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">
                                    <a>
                                        8 neque dolor primis a libero tempus
                                        blandit
                                    </a>
                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Porta justo integer odio velna vitae an auctor
                                integer congue magna at pretium purus ligula
                                rutrum luctus risus ultrice
                            </p>
                            {/* Post Author */}
                            <span>By Michael Deal</span>
                        </div>
                    </div>
                    {/* END ARTICLE #3 */}
                    {/* ARTICLE #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div id="a2-4" className="article-2">
                            {/* Post Data */}
                            <p className="p-sm">February 19, 2020</p>
                            {/* Title */}
                            <h5 className="h5-sm">
                                <Link href="/single-post">
                                    <a>
                                        Ligula varius magna and porta a laoreet
                                        pretium
                                    </a>
                                </Link>
                            </h5>
                            {/* Text */}
                            <p>
                                Vitae auctor integer a congue magna undo pretium
                                at purus pretium ligula a rutrum luctus risus
                                and ultrice blandit
                            </p>
                            {/* Post Author */}
                            <span>By Aaron Wall</span>
                        </div>
                    </div>
                    {/* END ARTICLE #4 */}
                </div>
                {/* END NEWS GRID */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo8News2;
