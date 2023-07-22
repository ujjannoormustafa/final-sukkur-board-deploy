import React from 'react';
import {HiFolderDownload} from "react-icons/hi";
import Link from "next/link";

const FormDownload = ({downloadlink, title}) => {

    const handleDownload = () => {
        // Replace 'example.pdf' with the actual PDF file name you want to download
        const pdfURL = {downloadlink};

        // Create an anchor element to initiate the download
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = '/public/pdf/form/MigrationCertificate.pdf'; // Set the desired filename for the downloaded file
        link.click();
    };
    return (
        <>
            <div className="container pt-40">
                <div className="row mx-auto px-5 mb-2 bg-lightdark rounded-3 box box zoom-effect">
                    <div className='d-flex justify-content-between align-items-center  text-white p-3'>
                        <h4 className='text-white'>{title}</h4>
                        <a  onClick={handleDownload} className='text-white display-4 pointer'>< HiFolderDownload/></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormDownload;