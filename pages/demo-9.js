import React from "react";
import Demo9About2 from "../src/components/Demo9/Demo9About2";
import Demo9About3 from "../src/components/Demo9/Demo9About3";
import Demo9About4 from "../src/components/Demo9/Demo9About4";
import Demo9Banner1 from "../src/components/Demo9/Demo9Banner1";
import Demo9Banner5 from "../src/components/Demo9/Demo9Banner5";
import Demo9Categories4 from "../src/components/Demo9/Demo9Categories4";
import Demo9Courses2 from "../src/components/Demo9/Demo9Courses2";
import Demo9Courses5 from "../src/components/Demo9/Demo9Courses5";
import Demo9Hero9 from "../src/components/Demo9/Demo9Hero9";
import Demo9News2 from "../src/components/Demo9/Demo9News2";
import Demo9Pricing2 from "../src/components/Demo9/Demo9Pricing2";
import Demo9Reviews1 from "../src/components/Demo9/Demo9Reviews1";
import Demo9Services2 from "../src/components/Demo9/Demo9Services2";
import Demo9Services6 from "../src/components/Demo9/Demo9Services6";
import Demo9Statistic1 from "../src/components/Demo9/Demo9Statistic1";
import Demo9Video2 from "../src/components/Demo9/Demo9Video2";
import Layout from "../src/layout/Layout";
const demo9 = () => {
  return (
    <Layout footer={2}>
      <Demo9Hero9 />
      {/* END HERO-9 */}
      {/* BANNER-1
			============================================= */}
      <Demo9Banner1 />
      {/* END BANNER-1 */}
      {/* ABOUT-2
			============================================= */}
      <Demo9About2 />
      {/* End ABOUT-2 */}
      {/* SERVICES-2
			============================================= */}
      <Demo9Services2 />
      {/* End SERVICES-2 */}
      {/* CATEGORIES-4
			============================================= */}
      <Demo9Categories4 />
      {/* END CATEGORIES-4 */}
      {/* SERVICES-6
			============================================= */}
      <Demo9Services6 />
      {/* End SERVICES-6 */}
      {/* COURSES-2
			============================================= */}
      <Demo9Courses2 />
      {/* END COURSES -2 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <Demo9Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* ABOUT-3
			============================================= */}
      <Demo9About3 />
      {/* End ABOUT-3 */}
      {/* VIDEO-2
			============================================= */}
      <Demo9Video2 />
      {/* END VIDEO-2 */}
      {/* COURSES-5
			============================================= */}
      <Demo9Courses5 />
      {/* END COURSES-5 */}
      {/* STATISTIC-1
			============================================= */}
      <Demo9Statistic1 />
      {/* END STATISTIC-1 */}
      {/* ABOUT-4
			============================================= */}
      <Demo9About4 />
      {/* End ABOUT-4 */}
      {/* PRICING-2
			============================================= */}
      <Demo9Pricing2 />
      {/* END PRICING-2 */}
      {/* NEWS-2
			============================================= */}
      <Demo9News2 />
      {/* END NEWS-2 */}
      {/* BANNER-5
			============================================= */}
      <Demo9Banner5 />
    </Layout>
  );
};

export default demo9;
