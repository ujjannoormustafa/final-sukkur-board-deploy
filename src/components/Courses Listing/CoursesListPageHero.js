import Link from "next/link";
import React from "react";
import {HiFolderDownload} from 'react-icons/hi';

const CoursesListPageHero = () => {
    return (
        <section className='bg-light pt-20'>
            <h1 className="text-center mt-5"> Download Forms</h1>
            <p className="text-center mb-40">
                Download the application forms for various certificates.
            </p>
            <div className="container pt-40">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Duplicate Pacca Certificate</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>

                    </div>
                </div>
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'> Application form for Certificate of Eligibility</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>

                    </div>
                </div>
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Certificate of Migration</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>

                    </div>
                </div>
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Enrollment</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>

                    </div>
                </div>

            </div>


        </section>


        // <section className="bg-05 page-hero-section division">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="hero-txt white-color">
        //                     {/* Title */}
        //                     <h3 className="h3-xs">English Language Courses</h3>
        //                     {/* Share Icons */}
        //                     <div className="share-list">
        //                         <ul className="share-social-icons text-center clearfix">
        //                             <li>
        //                                 <p>
        //                                     <span>289 courses</span> found
        //                                 </p>
        //                                 <p />
        //                             </li>
        //                             <li>
        //                                 <Link href="#">
        //                                     <a
        //                                         onClick={(e) => {
        //                                             e.preventDefault();
        //                                         }}
        //                                         className="share-ico ico-facebook"
        //                                     >
        //                                         <i className="fab fa-facebook-f" />
        //                                     </a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#">
        //                                     <a
        //                                         onClick={(e) => {
        //                                             e.preventDefault();
        //                                         }}
        //                                         className="share-ico ico-twitter"
        //                                     >
        //                                         <i className="fab fa-twitter" />
        //                                     </a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#">
        //                                     <a
        //                                         onClick={(e) => {
        //                                             e.preventDefault();
        //                                         }}
        //                                         href="mailto:yourdomain@mail.com"
        //                                         className="share-ico ico-mail"
        //                                     >
        //                                         <i className="far fa-envelope" />
        //                                     </a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#">
        //                                     <a
        //                                         onClick={(e) => {
        //                                             e.preventDefault();
        //                                         }}
        //                                         className="share-ico ico-bookmark"
        //                                     >
        //                                         <i className="far fa-bookmark" />
        //                                         8.4k
        //                                     </a>
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     {/* Text */}
        //                     <p>
        //                         <span>9,463 students</span> are learning English
        //                         Language on eTreeks
        //                     </p>
        //                 </div>
        //             </div>
        //             {/* END PAGE HERO TEXT */}
        //         </div>
        //         {/* End row */}
        //     </div>
        //     {/* End container */}
        // </section>


    );
};

export default CoursesListPageHero;
