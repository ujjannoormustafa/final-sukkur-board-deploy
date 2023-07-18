import Link from "next/link";
import React, { useContext } from "react";
import { VideoContext } from "../../context/video";
import {Swiper,SwiperSlide} from "swiper/react"
import { brandcarousel } from "../sliderProps";
const Demo1Video3 = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <section id="video-3" className="bg-scroll video-section division">
      {/* VIDEO TEXT */}
      <div className="bg-scroll video-3-txt division">
        <div className="container white-color">
          <div id="video-3-content" className="row">
            <div className="col-lg-8 offset-lg-2 video-txt text-center">
              {/* Title */}
              <h3 className="h3-md">
                Find the right instructor for you from over 10,000 teachers
              </h3>
              {/* Text */}
              <p className="p-lg">
                Feugiat primis ligula risus auctor laoreet augue egestas
              </p>
            </div>
          </div>
        </div>
        {/* End container */}
      </div>
      {/* END VIDEO TEXT */}
      {/* VIDEO LINK */}
      <div className="video-3-link mb-40 division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 video-link text-center">
              {/* Change the link HERE!!! */}
              <div className="play-btn play-btn-rose text-center">
                <Link href="#">
                  <a
                    onClick={() => showVideo()}
                    className="video-popup3 video-play-button"
                  >
                    <span />
                  </a>
                </Link>
                {/* Preview Image */}
                <img
                  className="img-fluid"
                  src="images/video-3-img.jpg"
                  alt="video-preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VIDEO-3 BRANDS */}
      <div className="video-3-brands division">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              {/* Title */}
              <p className="p-md">Trusted by companies of all sizes:</p>
              {/* Brands Carousel */}
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
              </Swiper>
              {/* Brands Carousel */}
            </div>
            {/* End col */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
      {/* END VIDEO-3 BRANDS */}
    </section>
  );
};

export default Demo1Video3;
