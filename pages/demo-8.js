import React from "react";
import Demo8About2 from "../src/components/Demo8/Demo8About2";
import Demo8About4 from "../src/components/Demo8/Demo8About4";
import Demo8Banner2 from "../src/components/Demo8/Demo8Banner2";
import Demo8Banner3 from "../src/components/Demo8/Demo8Banner3";
import Demo8Banner5 from "../src/components/Demo8/Demo8Banner5";
import Demo8Categories3 from "../src/components/Demo8/Demo8Categories3";
import Demo8Courses3 from "../src/components/Demo8/Demo8Courses3";
import Demo8Courses5 from "../src/components/Demo8/Demo8Courses5";
import Demo8Hboxes2 from "../src/components/Demo8/Demo8Hboxes2";
import Demo8Hero8 from "../src/components/Demo8/Demo8Hero8";
import Demo8News2 from "../src/components/Demo8/Demo8News2";
import Demo8Newsletter1 from "../src/components/Demo8/Demo8Newsletter1";
import Demo8Reviews1 from "../src/components/Demo8/Demo8Reviews1";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";

const demo8 = () => {
  return (
    <Layout footer={2}>
      <Demo8Hero8 />
      {/* END HERO-8 */}
      {/* HERO BOXES-2
                      ============================================= */}
      <Demo8Hboxes2 />
      {/* End HERO BOXES-2 */}
      {/* ABOUT-2
                      ============================================= */}
      <Demo8About2 />
      {/* End ABOUT-2 */}
      {/* CATEGORIES-3
                      ============================================= */}
      <Demo8Categories3 />
      {/* END CATEGORIES-3 */}
      {/* COURSES-5
                      ============================================= */}
      <Demo8Courses5 />
      {/* END COURSES-5 */}
      {/* BANNER-3
                      ============================================= */}
      <Demo8Banner3 />
      {/* END BANNER-3 */}
      {/* COURSES-3
                      ============================================= */}
      <Demo8Courses3 />
      {/* END COURSES-3 */}
      {/* VIDEO-1
                      ============================================= */}
      <Video1 />
      {/* END VIDEO-1 */}
      {/* ABOUT-4
                      ============================================= */}
      <Demo8About4 />
      {/* End ABOUT-4 */}
      {/* BANNER-2
                      ============================================= */}
      <Demo8Banner2 />
      {/* END BANNER-2 */}
      {/* TESTIMONIALS-1
                      ============================================= */}
      <Demo8Reviews1 />
      {/* END TESTIMONIALS-1 */}
      {/* BANNER-5
                      ============================================= */}
      <Demo8Banner5 />
      {/* END BANNER-5 */}
      {/* NEWS-2
                      ============================================= */}
      <Demo8News2 />
      {/* END NEWS-2 */}
      {/* NEWSLETTER-1
                      ============================================= */}
      <Demo8Newsletter1 />
    </Layout>
  );
};

export default demo8;
