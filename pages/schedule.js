import React from "react";
import Layout from "../src/layout/Layout";
import Schedule from "../src/components/Courses Listing/Schedule";

const coursesList = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">

        <Schedule />
           </div>
    </Layout>
  );
};

export default coursesList;
