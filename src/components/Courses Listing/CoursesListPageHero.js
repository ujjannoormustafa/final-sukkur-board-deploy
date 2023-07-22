import React from "react";
import FormDownload from "../formdownload/FormDownload";
import formData from "../../formData/data";
import {HiFolderDownload} from "react-icons/hi";

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
                        <a  download='Duplicate' href='/pdf/form/DuplicatePacca Certificate Profarma2022_2.pdf' className='text-white display-4 pointer'>< HiFolderDownload/></a>
                    </div>
                </div>
            </div>

            <div className="container pt-40">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Certificate of Eligibility
                        </h4>
                        <a  download='Eligibility' href='/pdf/form/Eligibility Certificate.pdf' className='text-white display-4 pointer'>< HiFolderDownload/></a>
                    </div>
                </div>
            </div>

            <div className="container pt-40">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Certificate of Migration</h4>
                        <a  download='Migration' href='/pdf/form/MigrationCertificate.pdf' className='text-white display-4 pointer'>< HiFolderDownload/></a>
                    </div>
                </div>
            </div>

            <div className="container pt-40">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>Application form for Enrollment</h4>
                        <a  download='Enrollment' href='/pdf/form/Enrollment Form.pdf' className='text-white display-4 pointer'>< HiFolderDownload/></a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CoursesListPageHero;
