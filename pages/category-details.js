import React from "react";
import CategoryDetailsBanner2 from "../src/components/Category Details/CategoryDetailsBanner2";
import CategoryDetailsBanner3 from "../src/components/Category Details/CategoryDetailsBanner3";
import CategoryDetailsCategories1 from "../src/components/Category Details/CategoryDetailsCategories1";
import CategoryDetailsCourses1 from "../src/components/Category Details/CategoryDetailsCourses1";
import CategoryDetailsCourses3 from "../src/components/Category Details/CategoryDetailsCourses3";
import CategoryDetailsCourses5 from "../src/components/Category Details/CategoryDetailsCourses5";
import CategoryDetailsPageHero from "../src/components/Category Details/CategoryDetailsPageHero";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const categoryDetails = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle
          motherTitle="All Categories"
          pageTitle="Languages"
          url="categories-list"
        />
        <CategoryDetailsPageHero />
        {/* END PAGE HERO */}
        {/* COURSES-1
				============================================= */}
        <CategoryDetailsCourses1 />
        {/* END COURSES-1 */}
        {/* CATEGORIES-1
				============================================= */}
        <CategoryDetailsCategories1 />
        {/* End CATEGORIES-1 */}
        {/* COURSES-5
				============================================= */}
        <CategoryDetailsCourses5 />
        {/* END COURSES-5 */}
        {/* BANNER-2
				============================================= */}
        <CategoryDetailsBanner2 />
        {/* END BANNER-2 */}
        {/* COURSES-3
				============================================= */}
        <CategoryDetailsCourses3 />
        {/* BANNER-3
				============================================= */}
        <CategoryDetailsBanner3 />
        {/* END BANNER-3 */}
        {/* FOOTER-2
				============================================= */}

        {/* END FOOTER-2 */}
      </div>
    </Layout>
  );
};

export default categoryDetails;
