import Link from "next/link";
import React from "react";
import {HiFolderDownload} from 'react-icons/hi';

const Schedule = () => {
    return (

        <section className='bg-light pt-20'>
            <h1 className="text-center mt-5">Examination Schedule</h1>
            <p className="text-center mb-20">
                Download the Examination Schedule.
            </p>
            <div className="container pt-40  ">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>SCHEDULE OF SSC PART-I&II ANNUAL EXAMINATION 2023</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>
                    </div>
                </div>
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center text-white p-3'>
                        <h4 className='text-white'>SCHEDULE OF HSC PART-I&II ANNUAL EXAMINATION 2023</h4>
                        <div><a href="#" className='text-white display-4 '> < HiFolderDownload/></a></div>
                    </div>
                </div>




                {/* container end div */}

            </div>
        </section>
        // <section className='bg-light pt-20'>
        //     <h1 className="text-center mt-5">Examination Schedule</h1>
        //     <p className="text-center mb-40">
        //         Download The Examination Schedule From Below Links.
        //     </p>
        //     <div className="container-fluid p-5">
        //         <div className="row d-flex flex-column align justify-content-center align-items-center">
        //             <div className="col-md-6 my-3">
        //                 <div
        //                     className="box  rounded-20 border d-flex justify-content-between rounded align-content-center bg-lightdark border-gray p-4 text-center zoom-effect">
        //                     <p className="mb-0 font-20 text-white mt-25 ">SCHEDULE OF HSC PART-I&II ANNUAL EXAMINATION 2023</p>
        //                     <div><a href="#" className='text-white display-4 hovereffect'> < HiFolderDownload/></a></div>
        //                 </div>
        //             </div>
        //             <div className="col-md-6 my-3">
        //                 <div
        //                     className="box  rounded-20 border d-flex justify-content-between rounded align-content-center bg-lightdark border-gray p-4 text-center zoom-effect"
        //
        //                 >
        //                     <p className="mb-0 font-20 text-white mt-25 ">Application SCHEDULE OF HSC PART-I&II ANNUAL EXAMINATION 2023</p>
        //                     <div><a href="#" className='text-white display-4 '> <HiFolderDownload/></a></div>
        //                 </div>
        //             </div>
        //
        //         </div>
        //     </div>
        // </section>

    );
};

export default Schedule;
