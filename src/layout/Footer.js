import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row d-flex justify-content-between">
          {/* FOOTER INFO */}
          <div className="col-md-5 col-lg-5 col-xl-4 ">
            <div className="footer-info mb-40">

              <img
                src="images/logo.jpg"
                width={65}
                height={65}
                alt="footer-logo"
              />
              {/* Text */}
              <p>Empowering Minds, Inspiring Futures: Board of Intermediate & Secondary Education Sukkur, Sindhi Pakistan
              </p>
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Quick Links</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link href="/index">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <span>New & Updates</span>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <span>Results</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span>Contact</span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}


        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer text-center">
          <div className="row text-center d-flex justify-content-center">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <p>© Copyright  by BISE Sukkur, Sindh-Pakistan. {new Date().getFullYear()}</p>
                </li>

                <li>
                  <h6>Powered By <span target={"_blank"} href="https://www.fastechsystem.com">
                    FasTech System
                  </span></h6>

                </li>
                <li>
                  <p className="last-li">
                    <Link href="#">
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                      >
                        | mail@bisesuksindh.edu.pk
                      </span>
                    </Link>
                  </p>
                </li>
              </ul>
            </div>


          </div>
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
