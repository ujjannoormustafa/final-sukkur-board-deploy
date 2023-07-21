import Link from "next/link";
import React from "react";

const BecomeATeacherContacts1 = () => {
    return (
        <section id="contacts-1" className="contacts-section division">
            <div className="container">
                <div className="bg-03 bg-fixed contacts-1-holder">
                    <div className="row d-flex align-items-center">
                        {/* CONTACTS TEXT */}
                        <div className="col-lg-8 offset-lg-2">
                            <div className="contacts-txt text-center white-color">
                                {/* Title */}
                                <h3 className="h3-sm">
                                    Need Help? Get in Touch
                                </h3>
                                {/* Text */}
                                <p className="p-md">
                                    Have questions about teaching and career
                                    opportunities?
                                </p>
                                {/* Button */}
                                <Link href="#">
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-rose tra-white-hover"
                                        href="mailto:yourdomain@mail.com"
                                    >
                                        hello@yourdomain.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End contacts-holder */}
            </div>
            {/* End container */}
        </section>
    );
};

export default BecomeATeacherContacts1;
