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
import News from "../src/components/Courses Listing/News";

const news = () => {
    return (
        <Layout headerBtn>
            <div className="inner-page-wrapper">
                <News />
            </div>
        </Layout>
    );
};

export default news;
