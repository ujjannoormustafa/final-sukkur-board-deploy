import Link from "next/link";
import React from "react";
const Demo3News1 = () => {
    return (
        <section id="news-1" className="pt-100 news-section division">
            {/* SECTION TITLE */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-60">
                            {/* Title 	*/}
                            <h4 className="h4-xl">
                                Our Stories &amp; Latest News
                            </h4>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/results">
                                    <span className="btn btn-tra-grey rose-hover">
                                        Read More Stories
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* NEWS GRID */}
            <div className="row news-grid">
                {/* ARTICLE #1 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-1.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Speaker Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Integer congue magna and pretium
                                            purus pretium magnis nulla dolor
                                            blandit ipsum
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #1 */}
                {/* ARTICLE #2 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-2.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Speaker Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Pretium purus pretium magnis nulla
                                            dolor - primis in cubilia
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #2 */}
                {/* ARTICLE #3 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-3.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Speaker Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Massa varius egestas magna suscipit
                                            at tempus aliquet
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #3 */}
                {/* ARTICLE #4 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-4.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Speaker Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Etiam sapien sem at sagittis congue
                                            an augue massa varius
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #4 */}
                {/* ARTICLE #5 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-5.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Article Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Meque purus ipsum - neque dolor a
                                            primis libero tempus
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #5 */}
                {/* ARTICLE #6 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-6.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Article Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Integer congue magna and pretium
                                            purus pretium magnis nulla dolor
                                            blandit ipsum
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #6 */}
                {/* ARTICLE #7 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-7.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Article Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Luctus neque purus an ipsum neque
                                            dolor primis libero
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #7 */}
                {/* ARTICLE #8 */}
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="article-1">
                        {/* Link */}
                        <Link href="/single-post">
                            <span>
                                {/* Article Preview */}
                                <div className="hover-overlay">
                                    <img
                                        className="img-fluid"
                                        src="images/blog/article-8.jpg"
                                        alt="article-preview"
                                    />
                                    <div className="item-overlay" />
                                </div>
                                {/* Article Meta */}
                                <div className="article-meta">
                                    <h5 className="h5-md">
                                        <span>
                                            Congue magna pretium purus pretium
                                            magnis nulla
                                        </span>
                                    </h5>
                                </div>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* END ARTICLE #8 */}
            </div>
            {/* END NEWS GRID */}
        </section>
    );
};

export default Demo3News1;
