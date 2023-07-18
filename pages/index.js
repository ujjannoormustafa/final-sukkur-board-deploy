import HomeAbout1 from "../src/components/Home/HomeAbout1";
import HomeBanner1 from "../src/components/Home/HomeBanner1";
import HomeFeatures from "../src/components/Home/HomeFeatures";
import HomeHero from "../src/components/Home/HomeHero";
import HomeIPage from "../src/components/Home/HomeIPage";
import HomeSelect from "../src/components/Home/HomeSelect";
const index = () => {
  return (
    <div id="page" className="page-wrapper demo">
      <HomeHero />
      <HomeAbout1 />
      <HomeSelect />
      <HomeFeatures />
      <HomeIPage />
      <HomeBanner1 />
      <footer id="footer" className="footer division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p>
                Designed with <i className="far fa-heart" /> by Jthemes
              </p>
              <p>
                © {new Date().getFullYear()} <span>eTreeks.</span> All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>{" "}
      {/* END FOOTER */}
    </div>
  );
};

export default index;
