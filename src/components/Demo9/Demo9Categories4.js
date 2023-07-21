import Link from "next/link";
import React from "react";

const Demo9Categories4 = () => {
  return (
    <section id="categories-4" className="wide-60 categories-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-80">
              {/* Title 	*/}
              <h3 className="h3-sm">Our Course Categories</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link href="/categories-list">
                  <span className="btn btn-tra-grey rose-hover">
                    View All Categorie
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* CATEGORIE BOX #1 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-blue">
                  <img
                    src="images/icons/categories/development.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Computer Science</h5>
                <p>341 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Artificial Intelligence,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Internet of Things,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Algorithms &amp; Data Structures,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Information,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Technology,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Blockchain &amp; Cryptocurrency,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Quantum Computing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Machine Learning,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>DevOps,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Network &amp; Security,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Core IT Skills</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #1 */}
          {/* CATEGORIE BOX #2 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-green">
                  <img
                    src="images/icons/categories/money.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Business</h5>
                <p>428 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Human Resources,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Project Management,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Entrepreneurship,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Tourism &amp; Hospitality,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Finance,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Sales,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Communications,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>E-Commerce,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Leadership &amp; Management,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Business Strategy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #2 */}
          {/* CATEGORIE BOX #3 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-red">
                  <img
                    src="images/icons/categories/design.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Lifestyle</h5>
                <p>268 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Arts &amp; Crafts,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Food &amp; Beverage,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Beauty &amp; Makeup,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Home Improvement,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Travel,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Pet Care &amp; Training,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Gaming,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Photography,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Skilled Trades</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #3 */}
          {/* CATEGORIE BOX #4 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-teal">
                  <img
                    src="images/icons/categories/human-mind.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Humanities</h5>
                <p>417 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>History,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Literature,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Foreign Language,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Grammar &amp; Writing,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Philosophy,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Religion,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>ESL,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Culture,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Sports,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Journalism,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Ethics</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #4 */}
          {/* CATEGORIE BOX #5 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-yellow">
                  <img
                    src="images/icons/categories/chip.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Programming</h5>
                <p>284 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Mobile Development,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Web Development,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Game Development,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Software Testing,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Programming Languages,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Databases,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Cloud Computing,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Software Development,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Development Tools</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #5 */}
          {/* CATEGORIE BOX #6 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-violet">
                  <img
                    src="images/icons/categories/heartbeat.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Health &amp; Medicine</h5>
                <p>179 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Anatomy,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Veterinary Science,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Care Nursing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Nutrition &amp; Wellness,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Disease &amp; Disorders,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Public Health,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Mental Health,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Fitness,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Yoga,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Meditation,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Safety &amp; First Aid,</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #6 */}
          {/* CATEGORIE BOX #7 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-orange">
                  <img
                    src="images/icons/categories/calculator.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Mathematics</h5>
                <p>369 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Discrete Math,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Statistics &amp; Probability,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Spatial Analysis,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Algebra &amp; Geometry,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Foundations of Mathematics,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Calculus,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Trigonometry,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Probability</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #7 */}
          {/* CATEGORIE BOX #8 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-lightgreen">
                  <img
                    src="images/icons/categories/gear.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Engineering</h5>
                <p>219 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Chemical Engineering,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Civil Engineering,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Electrical Engineering,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Mechanical Engineering,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Robotics,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Nanotechnology,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Manufacturing,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Textiles,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Structural Engineering</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #8 */}
          {/* CATEGORIE BOX #9 */}
          <div className="col-md-6 col-lg-4">
            <div className="c4-box">
              {/* Icon */}
              <div className="c4-box-ico mb-15 clearfix">
                <div className="c4-ico bg-skyblue">
                  <img
                    src="images/icons/categories/science.png"
                    alt="category-icon"
                  />
                </div>
                <h5 className="h5-md">Social Sciences</h5>
                <p>370 Courses</p>
              </div>
              {/* List */}
              <div className="c4-box-txt">
                <ul className="c4-box-list">
                  <li>
                    <Link href="/courses-list">
                      <span>Sociology,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Economics,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Psychology,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Anthropology,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Political Science,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Urban Planning,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Human Rights,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Law,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Sustainability,</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses-list">
                      <span>Public Policy</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END CATEGORIE BOX #9 */}
        </div>
        {/* End row */}
        {/* ALL COURSES BUTTON */}
        <div className="row">
          <div className="col-md-12">
            <div className="all-courses-btn">
              <Link href="/categories-list">
                <span className="btn btn-md btn-tra-grey rose-hover">
                  Browse All Courses
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo9Categories4;
