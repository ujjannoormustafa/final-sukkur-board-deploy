import React from "react";
import Faqs1 from "../src/components/Faqs/Faqs1";
import FaqsContacts1 from "../src/components/Faqs/FaqsContacts1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const faqs = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="FAQs" />
        <Faqs1 />
        <FaqsContacts1 />
      </div>
    </Layout>
  );
};

export default faqs;
