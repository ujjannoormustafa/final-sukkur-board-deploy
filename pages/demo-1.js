import React from "react";
import Demo1About1 from "../src/components/Demo1/Demo1About1";
import Demo1About2 from "../src/components/Demo1/Demo1About2";
import Demo1About3 from "../src/components/Demo1/Demo1About3";
import Demo1About4 from "../src/components/Demo1/Demo1About4";
import Demo1Banner3 from "../src/components/Demo1/Demo1Banner3";
import Demo1Banner5 from "../src/components/Demo1/Demo1Banner5";
import Demo1Categories3 from "../src/components/Demo1/Demo1Categories3";
import Demo1Courses1 from "../src/components/Demo1/Demo1Courses1";
import Demo1Courses3 from "../src/components/Demo1/Demo1Courses3";
import Demo1Courses5 from "../src/components/Demo1/Demo1Courses5";
import Demo1Hero1 from "../src/components/Demo1/Demo1Hero1";
import Demo1News2 from "../src/components/Demo1/Demo1News2";
import Demo1Reviews3 from "../src/components/Demo1/Demo1Reviews3";
import Demo1Services5 from "../src/components/Demo1/Demo1Services5";
import Demo1Services6 from "../src/components/Demo1/Demo1Services6";
import Demo1Video3 from "../src/components/Demo1/Demo1Video3";
import Layout from "../src/layout/Layout";
const demo1 = () => {
  return (
    <Layout>
      <Demo1Hero1 />
      <Demo1About1 />
      <Demo1About2 />
      <Demo1Courses3 />
      <Demo1About3 />
      <Demo1Services6 />
      <Demo1Categories3 />
      <Demo1Courses5 />
      <Demo1Reviews3 />
      {/* <Demo1Courses1 /> */}
      <Demo1Courses1 />
      <Demo1Banner5 />
      <Demo1About4 />
      <Demo1Video3 />
      <Demo1Services5 />
      <Demo1News2 />
      <Demo1Banner3 />
    </Layout>
  );
};

export default demo1;
