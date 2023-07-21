import Link from "next/dist/client/link";
import React from "react";
const Footer2 = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-12 col-xl-3">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
              <img
                  src="images/logo.jpg"
                width={65}
                height={65}
                alt="footer-logo"
              />
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link href="/home">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <span>News & Update</span>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <span>Results</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link href="/categories-list">
                    <span>Courses Catalog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/categories-list">Popular Categories</Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <span>Premium Learning</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Terms &amp; Privacy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Site Map
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <p>© Copyright by BISE Sukkur, Sindh-Pakistan. {new Date().getFullYear()}</p>
                </li>

                <li>
                  <h6>Powered By <span target={"_blank"} href="https://www.fastechsystem.com">
                    FasTech System
                  </span></h6>

                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-google-plus"
                    >
                      <i className="fab fa-google-plus-g" />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-tumblr"
                    >
                      <i className="fab fa-tumblr" />
                    </span>
                  </Link>
                </li>
                {/*
                                  <li><span href="#" class="ico-behance"><i class="fab fa-behance"></i></span></li>
                                  <li><span href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></span></li>
                                  <li><span href="#" class="ico-instagram"><i class="fab fa-instagram"></i></span></li>
                                  <li><span href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></span></li>
                                  <li><span href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></span></li>
                                  <li><span href="#" class="ico-youtube"><i class="fab fa-youtube"></i></span></li>
                                  <li><span href="#" class="ico-vk"><i class="fab fa-vk"></i></span></li>
                                  <li><span href="#" class="ico-yelp"><i class="fab fa-yelp"></i></span></li>
                                  <li><span href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></span></li>
                                  */}
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

export default Footer2;
