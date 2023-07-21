import Link from "next/link";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { VideoContext } from "../../context/video";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const CourseDetails = () => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#courseD", sort, active);
    let list = document.querySelectorAll("#courseD");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
      <Fragment>
       <div>this is detail page</div>
      </Fragment>
  );
};

export default CourseDetails;
