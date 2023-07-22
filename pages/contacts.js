import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const contacts = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">

        <section id="contacts-2" className="wide-100 contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Contact Us</h3>
                  {/* Text */}
                  <p className="p-md">
                  Contact with us
                  </p>
                </div>
              </div>
            </div>
            <div className="contacts-2-holder">
              <div className="row d-flex align-items-center">
                {/* CONTACT BOX #1 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Title */}
                    <h5 className="h5-md">MR. RAFIQUE AHMED PALH</h5>
                    {/* Text */}
                    <p className='text-primary'>Chairman</p>
                    <p>Office : 071-9310620</p>
                    <p>Residence : 071-9310621</p>
                    <p>Fax : 071-9310637</p>

                    {/* Button */}
                    <Link href="#">
                      <span
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href="chairman@bisesuksindh.edu.pk"
                          className="btn btn-tra-grey hoverbtn"
                      >
                        Email: chairman@bisesuksindh.edu.pk
                      </span>
                    </Link>

                  </div>
                </div>
                {/* CONTACT BOX #2 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">

                    {/* Title */}
                    <h5 className="h5-md">MR. MUHAMMAD SALMAN KHAN</h5>
                    {/* Text */}
                    <p className='text-primary'>Secretary</p>
                    <p>Office: 071-9310622</p>
                    <p>Fax: 071-5632730</p>
                    {/* Button */}
                    <Link href="#">
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="secretary@bisesuksindh.edu.pk"
                        className="btn btn-tra-grey hoverbtn"
                      >
                        Email: secretary@bisesuksindh.edu.pk
                      </span>
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #3 */}
                <div className="col-lg-4">
                  <div className="contact-box">


                    {/* Title */}
                    <h5 className="h5-md">MR. IMTIAZ ALI BHATTI</h5>
                    {/* Text */}
                    <p className='text-primary'>
                    Computer Programmer
                    </p>
                    {/* Button */}
                    <p>Office:071-5630522</p>


                    <Link href="#">
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="info@bisesuksindh.edu.pk"
                        className="btn btn-tra-grey hoverbtn"
                      >
                       Email: info@bisesuksindh.edu.pk
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
        {/* END CONTACTS-2 */}

      </div>
    </Layout>
  );
};

export default contacts;
