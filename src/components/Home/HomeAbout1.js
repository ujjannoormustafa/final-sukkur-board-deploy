import React from "react";

const HomeAbout1 = () => {
  return (
    <section
      id="about-1"
      className="about-section division"
      style={{ backgroundImage: `url('/demo/images/about-1.jpg')` }}
    >
      <div className="container white-color">
        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              <img src="/demo/images/icons/responsive.png" alt="about-icon" />
              <div className="abox-1-txt">
                <h5 className="h5-md">Ultra Responsive</h5>
                <p className="p-md">Fully functional on all devices</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              <img src="/demo/images/icons/target.png" alt="about-icon" />
              <div className="abox-1-txt">
                <h5 className="h5-md">9 Stunning Demos</h5>
                <p className="p-md">Ready to use flexible concepts</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="abox-1 icon-xs">
              <img src="/demo/images/icons/ui.png" alt="about-icon" />
              <div className="abox-1-txt">
                <h5 className="h5-md">14 Inner Pages</h5>
                <p className="p-md">Creative pages that impress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout1;
