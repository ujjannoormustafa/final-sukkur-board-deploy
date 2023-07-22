import Link from "next/link";
import React from "react";

import {RiDownloadLine} from 'react-icons/ri'
import {HiFolderDownload} from "react-icons/hi";

const News = () => {
    return (
        <section className='bg-light pt-20'>
            <h1 className="text-center mt-5">News & Updates</h1>
            <p className="text-center mb-20">
                Download the application forms for various certificates.
            </p>
            <div className="container pt-40  ">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>TENDER NOTICE</h4>
                        <div><a  href="/pdf/news/NIT.jpg" target="_blank" className='text-white display-4 '> < HiFolderDownload/></a></div>

                    </div>
                </div>
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>CRC</h4>
                        <a href='/pdf/news/CRC.jpg' target="_blank" className='text-white display-4 '> <HiFolderDownload/></a>

                    </div>
                </div>
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>App</h4>
                        <a href='/pdf/news/APP%20Automatiom.pdf' className='text-white display-4 '> <HiFolderDownload/></a>

                    </div>
                </div>
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>BID Document </h4>
                        <a href='/pdf/news/TENDER%20DOCUMENT.pdf' className='text-white display-4 '> <HiFolderDownload/></a>

                    </div>
                </div>

                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>PC-5</h4>
                        <a href='/pdf/news/P.C-V.jpg' target="_blank" className='text-white display-4 '> <HiFolderDownload/></a>

                    </div>
                </div>

                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>SITUATIONS VACANT 2023</h4>
                        <a href='/pdf/news/BISE,%20Sukkur%20(Situation%20Vacant).pdf' className='text-white display-4 '> <HiFolderDownload/></a>
                    </div>
                </div>

                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'> Notification Examination Form submission HSC PART-I&II ANNUAL EXAMINATION 2023</h4>
                        <a href='/pdf/news/EXAM_FORM_SUB_HSC_AE_2023.pdf' className='text-white display-4 '> <HiFolderDownload/></a>
                    </div>
                </div>
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Notification Examination Form submission SSC PART-I&II ANNUAL EXAMINATION 2023</h4>
                        <a href='/pdf/news/EXAM_FORM_SUB_SSC_AE_2023.pdf' className='text-white display-4 '> <HiFolderDownload/></a>
                    </div>
                </div>



                            <h1 className="text-center mt-5 mb-5">Bid Evaluation report 2022-23</h1>

                {/* Examination */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Examination</h4>
                        <a href='/pdf/news/bid/BER%20Exam.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Office Stationary */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3  box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Office Stationary</h4>
                        <a href='/pdf/news/bid/BER%20Stat.jpg.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Computer */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Computer</h4>
                        <a href='/pdf/news/bid/BER%20Com.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                <h1 className="text-center mt-5 mb-5">Comparative statement 2022-23</h1>

                {/* Examination */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Examination</h4>
                        <a href='/pdf/news/Examination/Comparative%20Exam.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Office Stationary */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3  box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Office Stationary</h4>
                        <a href='/pdf/news/Examination/Comparative%20Stat.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Computer */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Computer</h4>
                        <a href='/pdf/news/Examination/Comparative%20Computer.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                <h1 className="text-center mt-5 mb-5">Bidders Qualifying report 2022-23</h1>


                {/* Examination */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Examination</h4>
                        <a href='/pdf/news/Examination/Bidder/BQR%20Exam.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Office Stationary */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3  box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Office Stationary</h4>
                        <a href='/pdf/news/Examination/Bidder/BQR%20Stat.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Computer */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Computer</h4>
                        <a href='/pdf/news/Examination/Bidder/BQR%20Com.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Tender Notice Solar2022-23 */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Tender Notice Solar2022-23</h4>
                        <a href='/pdf/news/Examination/Bidder/2519.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* APP Solar 2022-23 */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>APP Solar 2022-23</h4>
                        <a href='/pdf/news/Examination/Bidder/APP%20SOLAR.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* Bid Document Solar 2022-23 */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>Bid Document Solar 2022-23</h4>
                        <a href='/pdf/news/Examination/Bidder/Bid%20Document%20Solar.pdf' className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* CRC Solar 2022-23 */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>CRC Solar 2022-23</h4>
                        <a href='/pdf/news/Examination/Bidder/CRC%20SOLAR.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>

                {/* PC Solar 2022-23 */}
                <div className="row mx-auto mb-2 px-5 bg-lightdark rounded-3 box zoom-effect ">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>PC Solar 2022-23</h4>
                        <a href='/pdf/news/Examination/Bidder/PC%20SOLAR.jpg' target="_blank" className='text-white display-4'> <HiFolderDownload /></a>
                    </div>
                </div>
            {/* container end div */}
            </div>
        </section>
    );
};

export default News;
