import React from "react";
import Demo5About3 from "../src/components/Demo5/Demo5About3";
import Demo5Banner2 from "../src/components/Demo5/Demo5Banner2";
import Demo5Banner5 from "../src/components/Demo5/Demo5Banner5";
import Demo5Categories1 from "../src/components/Demo5/Demo5Categories1";
import Demo5Categories4 from "../src/components/Demo5/Demo5Categories4";
import Demo5Courses1 from "../src/components/Demo5/Demo5Courses1";
import Demo5Courses3 from "../src/components/Demo5/Demo5Courses3";
import Demo5Courses5 from "../src/components/Demo5/Demo5Courses5";
import Demo5Hero5 from "../src/components/Demo5/Demo5Hero5";
import Demo5News2 from "../src/components/Demo5/Demo5News2";
import Demo5Pricing2 from "../src/components/Demo5/Demo5Pricing2";
import Demo5Reviews1 from "../src/components/Demo5/Demo5Reviews1";
import Demo5Services2 from "../src/components/Demo5/Demo5Services2";
import Demo5Statistic2 from "../src/components/Demo5/Demo5Statistic2";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";

const demo5 = () => {
  return (
    <Layout>
      <Demo5Hero5 />
      {/* END HERO-5 */}
      {/* ABOUT-3
			============================================= */}
      <Demo5About3 />
      {/* End ABOUT-3 */}
      {/* SERVICES-2
			============================================= */}
      <Demo5Services2 />
      {/* End SERVICES-2 */}
      {/* CATEGORIES-4
			============================================= */}
      <Demo5Categories4 />
      {/* END CATEGORIES-4 */}
      {/* STATISTIC-2
			============================================= */}
      <Demo5Statistic2 />
      {/* END STATISTIC-2 */}
      {/* COURSES-1
			============================================= */}
      {/* <Demo5Courses1 /> */}
      <Demo5Courses1 />
      {/* END COURSES-1 */}
      {/* VIDEO-1
			============================================= */}
      <Video1 />
      {/* END VIDEO-1 */}
      {/* COURSES-3
			============================================= */}
      <Demo5Courses3 />
      {/* END COURSES-3 */}
      {/* BANNER-2
			============================================= */}
      <Demo5Banner2 />
      {/* END BANNER-2 */}
      {/* COURSES-5
			============================================= */}
      <Demo5Courses5 />
      {/* END COURSES-5 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <Demo5Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* CATEGORIES-1
			============================================= */}
      <Demo5Categories1 />
      {/* End CATEGORIES-1 */}
      {/* PRICING-2
			============================================= */}
      <Demo5Pricing2 />
      {/* END PRICING-2 */}
      {/* NEWS-2
			============================================= */}
      <Demo5News2 />
      {/* END NEWS-2 */}
      {/* BANNER-5
			============================================= */}
      <Demo5Banner5 />
      {/* END BANNER-5 */}
    </Layout>
  );
};

export default demo5;
