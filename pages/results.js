import React from "react";
import BlogListingNews3 from "../src/components/Blog Listing/BlogListingNews3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const results = () => {
    return (
        <Layout>
            <div className="inner-page-wrapper">
                <div className='container p-5'>
                    <h2 className="text-center mb-4">Examination Results</h2>
                    {/*  HSC Part 1*/}
                    <h3 className="text-center mb-4">HIGHER SECONDARY SCHOOL CERTIFICATE PART-II
                        SUPPLEMENTARY <br/>EXAMINATION, 2022</h3>
                    <h3 className='text-center my-2'>(Pre-Medical, Pre-Engineering, Humanities and Commerce )
                        Groups</h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics P.E</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics P.M</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Humanities</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Commerce</span></th>

                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>HSC-II</td>


                            <td><span href="#" className='link-primary'>Pre-Engineering</span></td>
                            <td><span href="#" className='link-primary'>Pre-Medical</span></td>
                            <td><span href="#" className='link-primary'> Humanities</span></td>
                            <td><span href="#" className='link-primary'>Commerce</span></td>

                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>HSC-II</td>
                            <td><span href="#" className="link-primary">Pre-Engineering</span></td>
                            <td><span href="#" className="link-primary">Pre-Medical</span></td>
                            <td><span href="#" className="link-primary">Humanities</span></td>
                            <td><span href="#" className="link-primary">Commerce</span></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>HSC-II</td>
                            <td><span href="#" className="link-primary">Pre-Engineering</span></td>
                            <td><span href="#" className="link-primary">Pre-Medical</span></td>
                            <td><span href="#" className="link-primary">Humanities</span></td>
                            <td><span href="#" className="link-primary">Commerce</span></td>
                        </tr>
                        </tbody>
                    </table>

                    {/* SSC Part-1*/}
                    <h3 className="text-center mb-4 mt-80">SECONDARY SCHOOL CERTIFICATE PART-I</h3>
                    <h3 className="text-center mb-4">ANNUAL EXAMINATION, 2022 </h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><span href='#' className='text-white'> Statistics Science</span></th>
                            <th scope="col"><span href='#' className='text-white'> Statistics General</span></th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>SSC-I</td>


                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>


                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>SSC-I</td>
                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>SSC-I</td>
                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>
                        </tr>
                        </tbody>
                    </table>


                    {/*HSC part 2*/}

                    <h3 className="text-center mt-80 mb-4">HIGHER SECONDARY SCHOOL CERTIFICATE PART-I
                        <br/>
                        ANNUAL EXAMINATION, 2022
                    </h3>
                    <h3 className='text-center my-2'>(Pre-Medical , Pre-Engineering, Humanities,<br/> Commerce & Home
                        Economics) Groups</h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics P.E</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics P.M</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Humanities</span></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Commerce</span></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>


                            <td><span href="#" className='link-primary'>	Positions P.E</span></td>
                            <td><span href="#" className='link-primary'>	Positions P.M</span></td>
                            <td><span href="#" className='link-primary'> </span></td>
                            <td><span href="#" className='link-primary'>	Positions</span></td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>HSC-II</td>


                            <td><span href="#" className='link-primary'>Pre-Engineering</span></td>
                            <td><span href="#" className='link-primary'>Pre-Medical</span></td>
                            <td><span href="#" className='link-primary'> Humanities</span></td>
                            <td><span href="#" className='link-primary'>Commerce</span></td>

                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>HSC-II</td>
                            <td><span href="#" className="link-primary">Pre-Engineering</span></td>
                            <td><span href="#" className="link-primary">Pre-Medical</span></td>
                            <td><span href="#" className="link-primary">Humanities</span></td>
                            <td><span href="#" className="link-primary">Commerce</span></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>HSC-II</td>
                            <td><span href="#" className="link-primary">Pre-Engineering</span></td>
                            <td><span href="#" className="link-primary">Pre-Medical</span></td>
                            <td><span href="#" className="link-primary">Humanities</span></td>
                            <td><span href="#" className="link-primary">Commerce</span></td>
                        </tr>
                        </tbody>
                    </table>

                {/* SHC Part 2*/}

                    <h3 className="text-center mb-4 mt-80"> SECONDARY SCHOOL CERTIFICATE PART-II</h3>
                    <h3 className="text-center mb-4">ANNUAL EXAMINATION, 2022 </h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"> </th>
                            <th scope="col"><span href='#' className='text-white'> Statistics Science</span></th>
                            <th scope="col"><span href='#' className='text-white'> Statistics General</span></th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td><span href="#" className='link-primary'>Position</span></td>


                            <td><span href="#" className='link-primary'></span></td>
                            <td><span href="#" className='link-primary'></span></td>


                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>SSC-I</td>


                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>


                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>SSC-I</td>
                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>SSC-I</td>
                            <td><span href="#" className='link-primary'>Science</span></td>
                            <td><span href="#" className='link-primary'>General</span></td>
                        </tr>
                        </tbody>
                    </table>






















                </div>
               {/*  <PageTitle pageTitle="Blog Listing" />*/}
                {/*  <BlogListingNews3 />*/}
                {/*  <BlogListingNewsLetter1 />*/}
            </div>
        </Layout>
    );
};

export default results;
