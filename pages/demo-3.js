import React from "react";
import Demo3About3 from "../src/components/Demo3/Demo3About3";
import Demo3About4 from "../src/components/Demo3/Demo3About4";
import Demo3Banner1 from "../src/components/Demo3/Demo3Banner1";
import Demo3Banner5 from "../src/components/Demo3/Demo3Banner5";
import Demo3Categories2 from "../src/components/Demo3/Demo3Categories2";
import Demo3Courses3 from "../src/components/Demo3/Demo3Courses3";
import Demo3Courses5 from "../src/components/Demo3/Demo3Courses5";
import Demo3Hboxes from "../src/components/Demo3/Demo3Hboxes";
import Demo3Hero3 from "../src/components/Demo3/Demo3Hero3";
import Demo3News1 from "../src/components/Demo3/Demo3News1";
import Demo3Pricing2 from "../src/components/Demo3/Demo3Pricing2";
import Demo3Reviews1 from "../src/components/Demo3/Demo3Reviews1";
import Demo3Services6 from "../src/components/Demo3/Demo3Services6";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";
const demo3 = () => {
  return (
    <Layout>
      {/* HERO-3
			============================================= */}
      <Demo3Hero3 />
      {/* END HERO-3 */}
      {/* HERO BOXES-1
			============================================= */}
      <Demo3Hboxes />
      {/* End HERO BOXES-1 */}
      {/* ABOUT-3
			============================================= */}
      <Demo3About3 />
      {/* End ABOUT-3 */}
      {/* CATEGORIES-2
			============================================= */}
      <Demo3Categories2 />
      {/* End CATEGORIES-2 */}
      {/* BANNER-1
			============================================= */}
      <Demo3Banner1 />
      {/* END BANNER-1 */}
      {/* COURSES-5
			============================================= */}
      <Demo3Courses5 />
      {/* END COURSES-5 */}
      {/* SERVICES-6
			============================================= */}
      <Demo3Services6 />
      {/* End SERVICES-6 */}
      {/* COURSES-3
			============================================= */}
      <Demo3Courses3 />
      {/* END COURSES-3 */}
      {/* PAGE PAGINATION
			============================================= */}
      {/* <Demo3PagePagination /> */}
      {/* END PAGE PAGINATION */}
      {/* VIDEO-1
			============================================= */}
      <Video1 />
      {/* END VIDEO-1 */}
      {/* ABOUT-4
			============================================= */}
      <Demo3About4 />
      {/* End ABOUT-4 */}
      {/* PRICING-2
			============================================= */}
      <Demo3Pricing2 />
      {/* END PRICING-2 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <Demo3Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* BANNER-5
			============================================= */}
      <Demo3Banner5 />
      {/* END BANNER-5 */}
      {/* NEWS-1
			============================================= */}
      <Demo3News1 />
    </Layout>
  );
};

export default demo3;
