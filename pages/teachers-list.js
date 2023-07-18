import React from "react";
import TeachersListBanner5 from "../src/components/Teachers Listing/TeachersListBanner5";
import TeachersListTeam from "../src/components/Teachers Listing/TeachersListTeam";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const teachersList = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Our Teachers" />

        <TeachersListTeam />
        <TeachersListBanner5 />
      </div>
    </Layout>
  );
};

export default teachersList;
