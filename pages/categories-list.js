import React from "react";
import CategoriesListAbout4 from "../src/components/Categories Listing/CategoriesListAbout4";
import CategoriesListBanner3 from "../src/components/Categories Listing/CategoriesListBanner3";
import CategoriesListCategories2 from "../src/components/Categories Listing/CategoriesListCategories2";
import CategoriesListPageHero from "../src/components/Categories Listing/CategoriesListPageHero";
import CategoriesListPricing2 from "../src/components/Categories Listing/CategoriesListPricing2";
import CategoriesListReviews1 from "../src/components/Categories Listing/CategoriesListReviews1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const categoriesList = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Course Categories" />
        {/* END BREADCRUMB */}
        {/* PAGE HERO
				============================================= */}
        <CategoriesListPageHero />
        {/* END PAGE HERO */}
        {/* CATEGORIES-2
				============================================= */}
        <CategoriesListCategories2 />
        {/* End CATEGORIES-2 */}
        {/* ABOUT-4
				============================================= */}
        <CategoriesListAbout4 />
        {/* End ABOUT-4 */}
        {/* PRICING-2
				============================================= */}
        <CategoriesListPricing2 />
        {/* END PRICING-2 */}
        {/* TESTIMONIALS-1
				============================================= */}
        <CategoriesListReviews1 />
        {/* END TESTIMONIALS-1 */}
        {/* BANNER-3
				============================================= */}
        <CategoriesListBanner3 />
      </div>
    </Layout>
  );
};

export default categoriesList;
