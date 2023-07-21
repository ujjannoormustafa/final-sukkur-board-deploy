import Link from "next/link";
import React from "react";

const HomeBanner1 = () => {
  return (
    <section id="banner-1" className="banner division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-6">
            <div className="banner-txt">
              <h3>70+ ready to use sections for showcasing your courses</h3>
              <p>
                eTreeks includes well designed components which always gives you
                best results as you wanted. Each content element has been
                crafted with terrific attention to details and offers multiple
                options. Combine the content elements to create unique websites
                in minutes. You are free to move the blocks between demos
              </p>
              <Link href="/demo-1">
                <span className="btn btn-tra-rose" target="_blank">
                  Launch Main Demo
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="banner-img">
              <img
                className="img-fluid"
                src="/demo/images/banner-1.png"
                alt="banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner1;
