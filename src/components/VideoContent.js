import { Fragment, useContext } from "react";
import { VideoContext } from "../context/video";

const VideoImage = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <span
        className="video-popup1"
        href="#"
        onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
      >
        <div
          className={
            extraClass
              ? extraClass
              : "video-btn video-btn-xl bg-orange-red ico-90"
          }
        >
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </span>
      <img
        className="img-fluid"
        src={img ? img : "images/dashboard-07.png"}
        alt="video-preview"
      />
    </Fragment>
  );
};

const VideoImage2 = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <span
        className="video-popup1"
        href="#"
        onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
      >
        <div className="video-btn video-btn-xl bg-orange-red ico-90">
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </span>
      <img
        className="img-fluid"
        src="/images/img-01.png"
        alt="video-preview"
      ></img>
    </Fragment>
  );
};

const VideoWithBtn = ({ id, extraClass, defText }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <span
      href="#"
      className={
        extraClass
          ? extraClass
          : "video-popup2 btn btn-md btn-transparent ico-20 ico-left"
      }
      onClick={() => showVideo(id ? id : "7e90gBu4pas")}
    >
      <span className="flaticon-play"></span>{" "}
      {defText ? defText : "See OLMO in Action"}
    </span>
  );
};

export { VideoImage, VideoWithBtn, VideoImage2 };
