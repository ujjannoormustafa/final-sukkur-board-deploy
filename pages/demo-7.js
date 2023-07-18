import React from "react";
import Demo7About3 from "../src/components/Demo7/Demo7About3";
import Demo7About4 from "../src/components/Demo7/Demo7About4";
import Demo7Banner5 from "../src/components/Demo7/Demo7Banner5";
import Demo7Categories2 from "../src/components/Demo7/Demo7Categories2";
import Demo7Courses3 from "../src/components/Demo7/Demo7Courses3";
import Demo7Hboxes1 from "../src/components/Demo7/Demo7Hboxes1";
import Demo7Hero7 from "../src/components/Demo7/Demo7Hero7";
import Demo7News1 from "../src/components/Demo7/Demo7News1";
import Demo7Reviews1 from "../src/components/Demo7/Demo7Reviews1";
import Demo7Services6 from "../src/components/Demo7/Demo7Services6";
import Demo7Statistic1 from "../src/components/Demo7/Demo7Statistic1";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";

const demo7 = () => {
  return (
    <Layout>
      <Demo7Hero7 />
      {/* END HERO-7 */}
      {/* HERO BOXES-1
                      ============================================= */}
      <Demo7Hboxes1 />
      {/* End HERO BOXES-1 */}
      {/* CATEGORIES-2
                      ============================================= */}
      <Demo7Categories2 />
      {/* End CATEGORIES-2 */}
      {/* VIDEO-1
                      ============================================= */}
      <Video1 />
      {/* END VIDEO-1 */}
      {/* ABOUT-3
                      ============================================= */}
      <Demo7About3 />
      {/* End ABOUT-3 */}
      {/* STATISTIC-1
                      ============================================= */}
      <Demo7Statistic1 />
      {/* END STATISTIC-1 */}
      {/* COURSES-3
                      ============================================= */}
      <Demo7Courses3 />
      {/* END COURSES-3 */}
      {/* SERVICES-6
                      ============================================= */}
      <Demo7Services6 />
      {/* End SERVICES-6 */}
      {/* ABOUT-4
                      ============================================= */}
      <Demo7About4 />
      {/* End ABOUT-4 */}
      {/* NEWS-1
                      ============================================= */}
      <Demo7News1 />
      {/* End NEWS-1 */}
      {/* TESTIMONIALS-1
                      ============================================= */}
      <Demo7Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* BANNER-5
                      ============================================= */}
      <Demo7Banner5 />
    </Layout>
  );
};

export default demo7;
