import Link from "next/link";
import React from "react";

const HomeSelect = () => {
  return (
    <section id="select" className="bg-fixed select-section division">
      <div className="container-fluid">
        <div className="st-content">
          <div className="row">
            <div className="col-md-12 section-title p-0">
              <h3>Creative Templates That Impress</h3>
              <p>
                eTreeks comes with 9 ready to use stunning demos to help people
                build nice and fancy website without being a professional
                designers
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-1">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-1.jpg"
                      alt="layout-1-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #1</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-2">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-2.jpg"
                      alt="layout-2-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #2</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-3">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-3.jpg"
                      alt="layout-3-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #3</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-4">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-4.jpg"
                      alt="layout-4-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #4</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-5">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-5.jpg"
                      alt="layout-5-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #5</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-6">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-6.jpg"
                      alt="layout-6-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #6</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-7">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-7.jpg"
                      alt="layout-7-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #7</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-8">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-8.jpg"
                      alt="layout-8-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #8</h4>
            </div>
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-9">
                  <a target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-9.jpg"
                      alt="layout-9-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Home Page #9</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSelect;
