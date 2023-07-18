import React from "react";
import CourseDetails from "../src/components/Course Details/CourseDetails";
import CourseDetailsCourses5 from "../src/components/Course Details/CourseDetailsCourses5";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const courseDetails = () => {
  return (
    <Layout>
      <div className="inner-page-wrapper">
        <PageTitle motherTitle="Back to Blog" pageTitle="Egestas volute..." />
        <CourseDetails />
        <CourseDetailsCourses5 />
      </div>
    </Layout>
  );
};

export default courseDetails;
