import Link from "next/link";
import React from "react";

const ReviewsPagePagination = () => {
    return (
        <div className="page-pagination division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                            tabIndex={-1}
                                        >
                                            <i className="fas fa-angle-left" />
                                        </span>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            1
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            2
                                        </span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            3
                                        </span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            4
                                        </span>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            <i className="fas fa-angle-right" />
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </div>
    );
};

export default ReviewsPagePagination;
