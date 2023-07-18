import React from "react";
import Pricing1 from "../src/components/Pricing Page/Pricing1";
import PricingAbout4 from "../src/components/Pricing Page/PricingAbout4";
import PricingBrands1 from "../src/components/Pricing Page/PricingBrands1";
import PricingContacts1 from "../src/components/Pricing Page/PricingContacts1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const pricing = () => {
  return (
    <Layout headerBtn>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="Pricing Plans" />

        {/* END BREADCRUMB */}
        {/* PRICING-1
				============================================= */}
        <Pricing1 />
        {/* END PRICING-1 */}
        {/* BRANDS-1
				============================================= */}
        <PricingBrands1 />
        {/* END BRANDS-1 */}
        {/* ABOUT-4
				============================================= */}
        <PricingAbout4 />
        {/* End ABOUT-4 */}
        {/* CONTACTS-1
				============================================= */}
        <PricingContacts1 />
        {/* END CONTACTS-1 */}
        {/* FOOTER-2
				============================================= */}
      </div>
    </Layout>
  );
};

export default pricing;
