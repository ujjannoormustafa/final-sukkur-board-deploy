import React from "react";
import Demo2About2 from "../src/components/Demo2/Demo2About2";
import Demo2About3 from "../src/components/Demo2/Demo2About3";
import Demo2Banner3 from "../src/components/Demo2/Demo2Banner3";
import Demo2Banner5 from "../src/components/Demo2/Demo2Banner5";
import Demo2Categories4 from "../src/components/Demo2/Demo2Categories4";
import Demo2Courses1 from "../src/components/Demo2/Demo2Courses1";
import Demo2Courses3 from "../src/components/Demo2/Demo2Courses3";
import Demo2Courses5 from "../src/components/Demo2/Demo2Courses5";
import Demo2Hero2 from "../src/components/Demo2/Demo2Hero2";
import Demo2News2 from "../src/components/Demo2/Demo2News2";
import Demo2NewsLetter1 from "../src/components/Demo2/Demo2NewsLetter1";
import Demo2Pricing2 from "../src/components/Demo2/Demo2Pricing2";
import Demo2Reviews1 from "../src/components/Demo2/Demo2Reviews1";
import Layout from "../src/layout/Layout";

const demo2 = () => {
  return (
    <Layout footer={2}>
      <Demo2Hero2 />
      {/* END HERO-2 */}
      {/* ABOUT-2
                  ============================================= */}
      <Demo2About2 />
      {/* End ABOUT-2 */}
      {/* CATEGORIES-4
                  ============================================= */}
      <Demo2Categories4 />
      {/* END CATEGORIES-4 */}
      {/* COURSES-1
                  ============================================= */}
      <Demo2Courses1 />
      {/* END COURSES-1 */}
      {/* BANNER-3
                  ============================================= */}
      <Demo2Banner3 />
      {/* END BANNER-3 */}
      {/* COURSES-3
                  ============================================= */}
      <Demo2Courses3 />
      {/* END COURSES-3 */}
      {/* PAGE PAGINATION
                  ============================================= */}

      <Demo2Courses5 />
      {/* END COURSES-5 */}
      {/* ABOUT-3
                  ============================================= */}
      <Demo2About3 />
      {/* End ABOUT-3 */}
      {/* PRICING-2
                  ============================================= */}
      <Demo2Pricing2 />
      {/* END PRICING-2 */}
      {/* TESTIMONIALS-1
                  ============================================= */}
      <Demo2Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* BANNER-5
                  ============================================= */}
      <Demo2Banner5 />
      {/* END BANNER-5 */}
      {/* NEWS-2
                  ============================================= */}
      <Demo2News2 />
      {/* END NEWS-2 */}
      {/* NEWSLETTER-1
                  ============================================= */}
      <Demo2NewsLetter1 />
    </Layout>
  );
};

export default demo2;
