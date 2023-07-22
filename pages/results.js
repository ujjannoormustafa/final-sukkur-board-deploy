import React from "react";
import BlogListingNews3 from "../src/components/Blog Listing/BlogListingNews3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const results = () => {
    return (
        <Layout>
            <div className="inner-page-wrapper">
                <div className='container overflow-auto p-5'>
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


                            <td><a href="/pdf/Results/HSc/SUK_PE.pdf" className='link-primary'>Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/HSc/SUK_PM.pdf" className='link-primary'>Pre-Medical</a></td>
                            <td><a href="/pdf/Results/HSc/SUK_HUM.pdf" className='link-primary'> Humanities</a></td>
                            <td><a href="/pdf/Results/HSc/SUK_COM.pdf" className='link-primary'>Commerce</a></td>

                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/HSc/KHP_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/HSc/KHP_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/HSc/KHP_HUM.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/HSc/KHP_COM.pdf" className="link-primary">Commerce</a></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/HSc/GHT_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/HSc/GHT_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/HSc/GHT_HUM.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/HSc/GHT_COM.pdf" className="link-primary">Commerce</a></td>
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


                            <td><a href="/pdf/Results/BSC/SUK_SC.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/BSC/SUK_GEN.pdf" className='link-primary'>General</a></td>


                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>SSC-I</td>
                            <td><a href="/pdf/Results/BSC/KHP_SC.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/BSC/KHP_GEN.pdf" className='link-primary'>General</a></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>SSC-I</td>
                            <td><a href="/pdf/Results/BSC/GHT_SC.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/BSC/GHT_GEN.pdf" className='link-primary'>General</a></td>
                        </tr>
                        </tbody>
                    </table>

                    {/* HSC Part I */}

                    <h3 className="text-center mt-80 mb-4">HIGHER SECONDARY SCHOOL CERTIFICATE PART-II<br/>
                        ANNUAL EXAMINATION, 2022

                    </h3>
                    <h3 className='text-center my-2'>(Pre-Medical , Pre-Engineering, Humanities, Commerce & Home Economics) Groups</h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics P.E</a></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics P.M</a></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Humanities</span></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics Commerce</a></th>

                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>HSC-II</td>


                            <td><a href="/pdf/Results/hsscpartI/SUK_PE.pdf" className='link-primary'>Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartI/SUK_PM.pdf" className='link-primary'>Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartI/SUK_HUM.pdf" className='link-primary'> Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartI/SUK_COM.pdf" className='link-primary'>Commerce</a></td>

                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/hsscpartI/KHP_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartI/KHP_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartI/KHP_HUM.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartI/KHP_COM.pdf" className="link-primary">Commerce</a></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/hsscpartI/GHT_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartI/GHT_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartI/GHT_HUM.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartI/GHT_COM.pdf" className="link-primary">Commerce</a></td>
                        </tr>

                        <tr>
                            <th scope="row"></th>
                            <td>ALL District</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/hsscpartI/Home%20Economis%20-%20I.pdf" className="link-primary">Home Economics</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        </tbody>
                    </table>


                    {/*HSC part 2*/}

                    <h3 className="text-center mt-80 mb-4">HIGHER SECONDARY SCHOOL CERTIFICATE PART-II<br/>
                        ANNUAL EXAMINATION, 2022

                    </h3>
                    <h3 className='text-center my-2'>(Pre-Medical , Pre-Engineering, Humanities & Commerce) Groups</h3>
                    <table className="table mt-60">
                        <thead>
                        <tr className='bg-primary text-white p-2 text-white'>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics P.E</a></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics P.M</a></th>
                            <th scope="col"><span href='#' className='text-white'>Statistics Humanities</span></th>
                            <th scope="col"><a href='#' className='text-white'>Statistics Commerce</a></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>


                            <td><a href="/pdf/Results/hsscpartII/POSITIONS%20HSC%20PE%20Annual%202022%20colour.doc" className='link-primary'>	Positions P.E</a></td>
                            <td><a href="3eb46242aad791aefa762d89a01f631aa5c09f1c73c3bae55df33bcaaa769c33caeea5adbc48" className='link-primary'>	Positions P.M</a></td>
                            <td><a href="#" className='link-primary'> </a></td>
                            <td><a href="/pdf/Results/hsscpartII/POSITIONS%20HSC%20COMMERCE%20Annual%20%202022%20colour.doc" className='link-primary'>	Positions</a></td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>HSC-II</td>


                            <td><a href="/pdf/Results/hsscpartII/SUK_PE.pdf" className='link-primary'>Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartII/SUK_PM.pdf" className='link-primary'>Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartII/HUM_SUK.pdf" className='link-primary'> Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartII/COM_SUK.pdf" className='link-primary'>Commerce</a></td>

                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/hsscpartII/KHP_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartII/KHP_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartII/HUM_KHP.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartII/COM_KHP.pdf" className="link-primary">Commerce</a></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>HSC-II</td>
                            <td><a href="/pdf/Results/hsscpartII/GHT_PE.pdf" className="link-primary">Pre-Engineering</a></td>
                            <td><a href="/pdf/Results/hsscpartII/GHT_PM.pdf" className="link-primary">Pre-Medical</a></td>
                            <td><a href="/pdf/Results/hsscpartII/HUM_GHT.pdf" className="link-primary">Humanities</a></td>
                            <td><a href="/pdf/Results/hsscpartII/COM_GHT.pdf" className="link-primary">Commerce</a></td>
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
                            <td><a href="/pdf/Results/sscpartII/POSITION.pdf" className='link-primary'>Position</a></td>


                            <td><span href="#" className='link-primary'></span></td>
                            <td><span href="#" className='link-primary'></span></td>


                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sukkur</td>
                            <td>SSC-I</td>


                            <td><a href="/pdf/Results/sscpartII/SUK_SC_FEX.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/sscpartII/SUK_GEN_FEX.pdf" className='link-primary'>General</a></td>


                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>Khairpur</td>
                            <td>SSC-I</td>
                            <td><a href="/pdf/Results/sscpartII/KHP_SC_FEX.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/sscpartII/KHP_GEN_FEX.pdf" className='link-primary'>General</a></td>


                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ghotki</td>
                            <td>SSC-I</td>
                            <td><a href="/pdf/Results/sscpartII/GHT_SC_FEX.pdf" className='link-primary'>Science</a></td>
                            <td><a href="/pdf/Results/sscpartII/GHT_GEN_FEX.pdf" className='link-primary'>General</a></td>
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
