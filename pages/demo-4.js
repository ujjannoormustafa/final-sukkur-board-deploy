import React from "react";
import Demo4About3 from "../src/components/Demo4/Demo4About3";
import Demo4About4 from "../src/components/Demo4/Demo4About4";
import Demo4Banner2 from "../src/components/Demo4/Demo4Banner2";
import Demo4Banner3 from "../src/components/Demo4/Demo4Banner3";
import Demo4Categories1 from "../src/components/Demo4/Demo4Categories1";
import Demo4Courses1 from "../src/components/Demo4/Demo4Courses1";
import Demo4Courses3 from "../src/components/Demo4/Demo4Courses3";
import Demo4Courses5 from "../src/components/Demo4/Demo4Courses5";
import Demo4Hero4 from "../src/components/Demo4/Demo4Hero4";
import Demo4News2 from "../src/components/Demo4/Demo4News2";
import Demo4Reviews1 from "../src/components/Demo4/Demo4Reviews1";
import Demo4Statistic1 from "../src/components/Demo4/Demo4Statistic1";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";
const demo4 = () => {
  return (
    <Layout>
      <Demo4Hero4 />
      {/* END HERO-4 */}
      {/* COURSES-1
			============================================= */}
      <Demo4Courses1 />
      {/* END COURSES-1 */}
      {/* CATEGORIES-1
			============================================= */}
      <Demo4Categories1 />
      {/* End CATEGORIES-1 */}
      {/* ABOUT-4
			============================================= */}
      <Demo4About4 />
      {/* End ABOUT-4 */}
      {/* BANNER-2
			============================================= */}
      <Demo4Banner2 />
      {/* END BANNER-2 */}
      {/* COURSES-3
			============================================= */}
      <Demo4Courses3 />
      {/* END PAGE PAGINATION */}
      {/* VIDEO-1
			============================================= */}
      <Video1 />
      {/* END VIDEO-1 */}
      {/* ABOUT-3
			============================================= */}
      <Demo4About3 />
      {/* End ABOUT-3 */}
      {/* STATISTIC-1
			============================================= */}
      <Demo4Statistic1 />
      {/* END STATISTIC-1 */}
      {/* COURSES-5
			============================================= */}
      <Demo4Courses5 />
      {/* END COURSES-5 */}
      {/* TESTIMONIALS-1
			============================================= */}
      <Demo4Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* NEWS-2
			============================================= */}
      <Demo4News2 />
      {/* END NEWS-2 */}
      {/* BANNER-3
			============================================= */}
      <Demo4Banner3 />
    </Layout>
  );
};

export default demo4;
