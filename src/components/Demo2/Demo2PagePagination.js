import Link from "next/link";
import React from "react";

const Demo2PagePagination = () => {
    return (
        <div className="page-pagination division">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                            tabIndex={-1}
                                        >
                                            <i className="fas fa-angle-left" />
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            1
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            2
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            3
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            4
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                            className="page-link"
                                        >
                                            <i className="fas fa-angle-right" />
                                        </a>
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

export default Demo2PagePagination;
