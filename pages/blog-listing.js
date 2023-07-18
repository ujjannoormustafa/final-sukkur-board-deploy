import React from "react";
import BlogListingNews3 from "../src/components/Blog Listing/BlogListingNews3";
import BlogListingNewsLetter1 from "../src/components/Blog Listing/BlogListingNewsLetter1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const blogListing = () => {
  return (
    <Layout>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Blog Listing" />
        <BlogListingNews3 />
        <BlogListingNewsLetter1 />
      </div>
    </Layout>
  );
};

export default blogListing;
