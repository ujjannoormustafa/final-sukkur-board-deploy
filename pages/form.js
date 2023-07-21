import React from "react";
import CoursesListBanner2 from "../src/components/Courses Listing/CoursesListBanner2";
import CoursesListBanner3 from "../src/components/Courses Listing/CoursesListBanner3";
import CoursesListCategories1 from "../src/components/Courses Listing/CoursesListCategories1";
import CoursesListCourses1 from "../src/components/Courses Listing/CoursesListCourses1";
import CoursesListCourses3 from "../src/components/Courses Listing/CoursesListCourses3";
import CoursesListCourses5 from "../src/components/Courses Listing/CoursesListCourses5";
import CoursesListPageHero from "../src/components/Courses Listing/CoursesListPageHero";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const coursesList = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        {/*<PageTitle pageTitle="English Language Courses" />*/}
        <CoursesListPageHero />
        {/* END PAGE HERO */}
        {/* COURSES-1
				============================================= */}
        <CoursesListCourses1 />
        {/* END COURSES-1 */}
        {/* CATEGORIES-1
				============================================= */}
        <CoursesListCategories1 />
        {/* End CATEGORIES-1 */}
        {/* COURSES-3
				============================================= */}
        <CoursesListCourses3 />
        {/* END COURSES-3 */}
        {/* BANNER-2
				============================================= */}
        <CoursesListBanner2 />
        {/* END BANNER-2 */}
        {/* COURSES-5
				============================================= */}
        <CoursesListCourses5 />
        <CoursesListBanner3 />
      </div>
    </Layout>
  );
};

export default coursesList;
