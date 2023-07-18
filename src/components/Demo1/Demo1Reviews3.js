import React from "react";
const Demo1Reviews3 = () => {
    return (
        <section id="reviews-3" className="bg-01 reviews-section division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* TESTIMONIAL TEXT */}
                        <div className="review-3">
                            {/* Quote Icon */}
                            <div className="quote-ico">
                                <img
                                    src="images/left-quote.png"
                                    alt="quote-image"
                                />
                            </div>
                            {/* Testimonial Text */}
                            <p>
                                An enim nullam tempor sapien gravida donec
                                eTreeks - enim ipsum porta justo integer at odio
                                velna and vitae auctor integer congue magna at
                                pretium purus pretium ligula rutrum luctus risus
                                ultrice luctus blandit congue magna. Sagittis
                                congue augue egestas volutpat egestas magna
                                consequat posuere nunc, eu porttitor neque
                            </p>
                            {/* Testimonial Author */}
                            <div className="review-3-author">
                                {/* Rating */}
                                <div className="tst-rating clearfix">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                                <h5 className="h5-md">Jennifer S.</h5>
                                <span>Online Student (Public Relations)</span>
                            </div>
                        </div>
                        {/* END TESTIMONIAL TEXT */}
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo1Reviews3;
