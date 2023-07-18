import React from "react";
import SinglePost from "../src/components/Single Post/SinglePost";
import SinglePostNews2 from "../src/components/Single Post/SinglePostNews2";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const singlePost = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle motherTitle="Back to Blog" pageTitle="Egestas volute..." />
        <SinglePost />
        <SinglePostNews2 />
      </div>
    </Layout>
  );
};

export default singlePost;
