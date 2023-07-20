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
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/pin.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">MR. RAFIQUE AHMED PALH</h5>
                    {/* Text */}
                    <p>Chairman</p>
                    {/* Button */}
                    <Link href="#">
                      <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href="chairman@bisesuksindh.edu.pk"
                          className="btn btn-tra-grey hoverbtn"
                      >
                        Email: chairman@bisesuksindh.edu.pk
                      </a>
                    </Link>

                  </div>
                </div>
                {/* CONTACT BOX #2 */}
                <div className="col-lg-4">
                  <div className="contact-box b-right">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/world-map.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">MR. MUHAMMAD SALMAN KHAN</h5>
                    {/* Text */}
                    <p>Secretary</p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="secretary@bisesuksindh.edu.pk"
                        className="btn btn-tra-grey hoverbtn"
                      >
                        Email: secretary@bisesuksindh.edu.pk
                      </a>
                    </Link>
                  </div>
                </div>
                {/* CONTACT BOX #3 */}
                <div className="col-lg-4">
                  <div className="contact-box">
                    {/* Icon */}
                    <img
                      className="img-75"
                      src="images/icons/request.png"
                      alt="contacts-icon"
                    />
                    {/* Title */}
                    <h5 className="h5-md">MR. RAFIQUE AHMED PALH</h5>
                    {/* Text */}
                    <p>
                      Controller of Examinations
                    </p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="controller@bisesuksindh.edu.pk"
                        className="btn btn-tra-grey hoverbtn"
                      >
                        Email: controller@bisesuksindh.edu.pk
                      </a>
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
        {/* GOOGLE MAP
				============================================= */}
        <div id="gmap" className="map-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="google-map">
                  {/* Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! */}
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.434075053734!2d68.8284709606033!3d27.713935513611712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4e9aec54e79%3A0xb5f709bf8e3bd855!2sBoard%20of%20Intermediate%20and%20Secondary%20Education%20Sukkur!5e0!3m2!1sen!2s!4v1689870349621!5m2!1sen!2s"
                      ></iframe>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>
      </div>
    </Layout>
  );
};

export default contacts;
