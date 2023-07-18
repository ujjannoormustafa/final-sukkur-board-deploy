import React from "react";
import Reviews2 from "../src/components/Reviews/Reviews2";
import ReviewsBanner3 from "../src/components/Reviews/ReviewsBanner3";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const reviews = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Reviews" />
        <Reviews2 />
        <ReviewsBanner3 />
      </div>
    </Layout>
  );
};

export default reviews;
