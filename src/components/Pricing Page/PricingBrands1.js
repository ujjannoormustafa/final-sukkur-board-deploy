import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandcarousel } from "../sliderProps";

const PricingBrands1 = () => {
  return (
    <div id="brands-1" className="bg-whitesmoke brands-section division">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Swiper {...brandcarousel} className="owl-carousel brands-carousel">
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-1.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-2.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-3.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-4.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-5.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-6.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-7.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-8.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
              {/* BRAND LOGO IMAGE */}
              <SwiperSlide className="brand-logo">
                <img
                  className="img-fluid"
                  src="images/brand-9.png"
                  alt="brand-logo"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default PricingBrands1;
