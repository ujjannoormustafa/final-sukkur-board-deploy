import React from "react";
import TeacherProfileBanner5 from "../src/components/Teacher Profile/TeacherProfileBanner5";
import TeacherProfileCourses3 from "../src/components/Teacher Profile/TeacherProfileCourses3";
import TeacherProfileTeam3 from "../src/components/Teacher Profile/TeacherProfileTeam3";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const controllingAuthority = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        {/*<PageTitle*/}
        {/*  motherTitle="All Teachers"*/}
        {/*  url="teachers-list"*/}
        {/*  pageTitle="David Smith"*/}
        {/*/>*/}

        {/* END BREADCRUMB */}
        {/* TEAM-3
				============================================= */}
        <TeacherProfileTeam3 />
        {/* END TEAM-3 */}
        {/* COURSES-3
				============================================= */}
        {/*<TeacherProfileCourses3 />*/}
        {/*<TeacherProfileBanner5 />*/}
      </div>
    </Layout>
  );
};

export default controllingAuthority;
