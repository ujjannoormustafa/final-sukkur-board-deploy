import Link from "next/link";
import React from "react";

const Demo2Categories4 = () => {
    return (
        <section
            id="categories-4"
            className="bg-whitesmoke wide-60 categories-section division"
        >
            <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-80">
                            {/* Title 	*/}
                            <h3 className="h3-sm">Top Trending Categories</h3>
                            {/* Text */}
                            <p className="p-md">
                                Aliquam a augue suscipit, luctus neque purus
                                ipsum neque dolor primis libero tempus, blandit
                                posuere and ligula varius magna a porta
                            </p>
                            {/* Button */}
                            <div className="title-btn">
                                <Link href="/categories-list">
                                    <a className="btn btn-tra-grey rose-hover">
                                        View All Categorie
                                    </a>
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
                                            <a>Artificial Intelligence,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Internet of Things,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>
                                                Algorithms &amp; Data
                                                Structures,
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Information,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Technology,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>
                                                Blockchain &amp; Cryptocurrency,
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Quantum Computing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Machine Learning,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>DevOps,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Network &amp; Security,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Core IT Skills</a>
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
                                            <a>Human Resources,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Project Management,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Entrepreneurship,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Tourism &amp; Hospitality,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Finance,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Sales,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Communications,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>E-Commerce,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Leadership &amp; Management,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Business Strategy</a>
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
                                            <a>Arts &amp; Crafts,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Food &amp; Beverage,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Beauty &amp; Makeup,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Home Improvement,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Travel,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Pet Care &amp; Training,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Gaming,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Photography,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Skilled Trades</a>
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
                                            <a>History,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Literature,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Foreign Language,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Grammar &amp; Writing,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Philosophy,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Religion,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>ESL,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Culture,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Sports,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Journalism,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Ethics</a>
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
                                            <a>Mobile Development,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Web Development,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Game Development,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Software Testing,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Programming Languages,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Databases,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Cloud Computing,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Software Development,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Development Tools</a>
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
                                            <a>Anatomy,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Veterinary Science,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Care Nursing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Nutrition &amp; Wellness,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Disease &amp; Disorders,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Public Health,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Mental Health,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Fitness,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Yoga,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Meditation,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Safety &amp; First Aid,</a>
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
                                            <a>Discrete Math,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Statistics &amp; Probability,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Spatial Analysis,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Algebra &amp; Geometry,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Foundations of Mathematics,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Calculus,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Trigonometry,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Probability</a>
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
                                            <a>Chemical Engineering,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Civil Engineering,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Electrical Engineering,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Mechanical Engineering,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Robotics,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Nanotechnology,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Manufacturing,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Textiles,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Structural Engineering</a>
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
                                            <a>Sociology,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Economics,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Psychology,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Anthropology,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Political Science,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Urban Planning,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Human Rights,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Law,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Sustainability,</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses-list">
                                            <a>Public Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* END CATEGORIE BOX #9 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo2Categories4;
