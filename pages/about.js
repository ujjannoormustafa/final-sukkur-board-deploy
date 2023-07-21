import React from "react";
import About2 from "../src/components/About/About2";
import Aboutbanner2 from "../src/components/About/Aboutbanner2";
import Aboutbanner3 from "../src/components/About/Aboutbanner3";
import Aboutcategories4 from "../src/components/About/Aboutcategories4";
import Aboutcourses3 from "../src/components/About/Aboutcourses3";
import Aboutnews1 from "../src/components/About/Aboutnews1";
import Aboutreviews1 from "../src/components/About/Aboutreviews1";
import Aboutservices5 from "../src/components/About/Aboutservices5";
import AboutStatistic1 from "../src/components/About/AboutStatistic-1";
import Aboutteam2 from "../src/components/About/Aboutteam2";
import Video1 from "../src/components/Video1";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const about = () => {
  return (
    <Layout>
      <div className="inner-page-wrapper">
        <PageTitle pageTitle="About eTreeks" />
        <spanbout2 />
        {/* End ABOUT-2 */}
        {/* STATISTIC-1
				============================================= */}
        <spanboutStatistic1 />
        {/* END STATISTIC-1 */}
        {/* COURSES-3
				============================================= */}
        <spanboutcourses3 />
        {/* END COURSES-3 */}
        {/* VIDEO-1
				============================================= */}
        <Video1 />
        {/* END VIDEO-1 */}
        {/* CATEGORIES-4
				============================================= */}
        <spanboutcategories4 />
        {/* END CATEGORIES-4 */}
        {/* BANNER-2
				============================================= */}
        <spanboutbanner2 />
        {/* END BANNER-2 */}
        {/* SERVICES-5
				============================================= */}
        <spanboutservices5 />
        {/* End SERVICES-5 */}
        {/* TEAM-2
				============================================= */}
        <spanboutteam2 />
        {/* END TEAM-2 */}
        {/* NEWS-1
				============================================= */}
        <spanboutnews1 />
        {/* End NEWS-1 */}
        {/* TESTIMONIALS-1
				============================================= */}
        <spanboutreviews1 />
        {/* END TESTIMONIALS-1 */}
        {/* BANNER-3
				============================================= */}
        <spanboutbanner3 />
      </div>
    </Layout>
  );
};

export default about;
