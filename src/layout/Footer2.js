import Link from "next/dist/client/link";
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
                src="images/logo.png"
                width={172}
                height={40}
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
                  <Link href="/about">
                    <a>About eTreeks</a>
                  </Link>
                </li>
                <li>
                  <Link href="/reviews">
                    <a>Our Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-listing">
                    <a>From the Blog</a>
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
                    <a>Courses Catalog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/categories-list">Popular Categories</Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a>Premium Learning</a>
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
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Terms &amp; Privacy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Site Map
                    </a>
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
                  <p>© Copyright eTreeks {new Date().getFullYear()}</p>
                </li>
                <li>
                  <p>
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="tel:123456789"
                      >
                        508.746.9892
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="last-li">
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                      >
                        hello@domain.com
                      </a>
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-google-plus"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-tumblr"
                    >
                      <i className="fab fa-tumblr" />
                    </a>
                  </Link>
                </li>
                {/*
                                  <li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
                                  <li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
                                  <li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
                                  <li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                                  <li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
                                  <li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
                                  <li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
                                  <li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
                                  <li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
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
