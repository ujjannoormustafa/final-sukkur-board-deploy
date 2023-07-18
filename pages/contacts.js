import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const contacts = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Contact Us" />
        <section id="contacts-2" className="wide-100 contacts-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-12">
                <div className="section-title title-centered mb-60">
                  {/* Title 	*/}
                  <h3 className="h3-sm">Need Help? Get in Touch</h3>
                  {/* Text */}
                  <p className="p-md">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta
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
                    <h5 className="h5-md">Our Location</h5>
                    {/* Text */}
                    <p>121 King Street, Melbourne, Victoria 3000 Australia</p>
                    {/* Button */}
                    <Link href="/contacts">
                      <a className="btn btn-tra-grey rose-hover">
                        Find Location On Map
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
                    <h5 className="h5-md">Partnership Request</h5>
                    {/* Text */}
                    <p>For partnership and business development inquiries</p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        hello@yourdomain.com
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
                    <h5 className="h5-md">Need Help?</h5>
                    {/* Text */}
                    <p>
                      Have questions about teaching and career opportunities?
                    </p>
                    {/* Button */}
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                        className="btn btn-tra-grey rose-hover"
                      >
                        hello@yourdomain.com
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838357620288!2d144.95358331497258!3d-37.81725497975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2zMTIxIEtpbmcgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg0JDQstGB0YLRgNCw0LvQuNGP!5e0!3m2!1sru!2sua!4v1584204664155!5m2!1sru!2sua" />
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
