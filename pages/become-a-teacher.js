import React from "react";
import BecomeATeacherAbout3 from "../src/components/Become a Teacher/BecomeATeacherAbout3";
import BecomeATeacherAbout4 from "../src/components/Become a Teacher/BecomeATeacherAbout4";
import BecomeATeacherBanner5 from "../src/components/Become a Teacher/BecomeATeacherBanner5";
import BecomeATeacherContacts1 from "../src/components/Become a Teacher/BecomeATeacherContacts1";
import BecomeATeacherNews2 from "../src/components/Become a Teacher/BecomeATeacherNews2";
import BecomeATeacherServices4 from "../src/components/Become a Teacher/BecomeATeacherServices4";
import BecomeATeacherStatistic1 from "../src/components/Become a Teacher/BecomeATeacherStatistic1";
import BecomeATeacherTeam1 from "../src/components/Become a Teacher/BecomeATeacherTeam1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const becomeATeacher = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Become a Teacher" />

        {/* END BREADCRUMB */}
        {/* SERVICES-4
				============================================= */}
        <BecomeATeacherServices4 />
        {/* End SERVICES-4 */}
        {/* ABOUT-4
				============================================= */}
        <BecomeATeacherAbout4 />
        {/* End ABOUT-4 */}
        {/* ABOUT-3
				============================================= */}
        <BecomeATeacherAbout3 />
        {/* End ABOUT-3 */}
        {/* STATISTIC-1
				============================================= */}
        <BecomeATeacherStatistic1 />
        {/* END STATISTIC-1 */}
        {/* TEAM-1
				============================================= */}
        <BecomeATeacherTeam1 />
        {/* END TEAM-1 */}
        {/* BANNER-5
				============================================= */}
        <BecomeATeacherBanner5 />
        {/* END BANNER-5 */}
        {/* NEWS-2
				============================================= */}
        <BecomeATeacherNews2 />
        {/* END NEWS-2 */}
        {/* CONTACTS-1
				============================================= */}
        <BecomeATeacherContacts1 />
      </div>
    </Layout>
  );
};

export default becomeATeacher;
