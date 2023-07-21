import Link from "next/link";
import React from "react";

import { useContext } from "react";
import { VideoContext } from "../../context/video";

const Demo9Video2 = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <div id="video-2" className="bg-scroll video-section division">
      <div className="container white-color">
        <div className="row">
          <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            {/* Change the link HERE!!! */}
            <div className="play-btn play-btn-rose text-center">
              <Link href="#">
                <span
                  className="video-popup2 video-play-button"
                  onClick={() => showVideo()}
                >
                  <span />
                </span>
              </Link>
            </div>
            {/* Text */}
            <div className="video-txt text-center">
              {/* Title */}
              <h3 className="h3-sm">Watch Campus Life Video Tour</h3>
              {/* Text */}
              <p className="p-md">
                Cursus porta, feugiat primis in ultrice ligula risus auctor
                tempus dolor feugiat, felis lacinia risus tempus at blandit
                massa
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Demo9Video2;
