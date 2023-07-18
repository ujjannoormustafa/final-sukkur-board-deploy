import Link from "next/link";
import React from "react";

const Demo4Categories1 = () => {
  return (
    <section
      id="categories-1"
      className="bg-whitesmoke categories-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-40">
              {/* Title 	*/}
              <h4 className="h4-xs">Select language you want to learn</h4>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            {/* CATEGORIE BOX #1 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img src="images/icons/flags/uk.png" alt="flag-icon" />
                    {/* Text */}
                    <h5 className="h5-xs">English</h5>
                    <p>84 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #1 */}
            {/* CATEGORIE BOX #2 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/germany.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Deutch</h5>
                    <p>75 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #2 */}
            {/* CATEGORIE BOX #3 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/spain.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Español</h5>
                    <p>54 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #3 */}
            {/* CATEGORIE BOX #4 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/france.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Français</h5>
                    <p>68 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #4 */}
            {/* CATEGORIE BOX #5 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/italy.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Italiano</h5>
                    <p>61 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #5 */}
            {/* CATEGORIE BOX #6 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/portugal.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Português</h5>
                    <p>78 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #6 */}
            {/* CATEGORIE BOX #7 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/russia.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">Русский</h5>
                    <p>57 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #7 */}
            {/* CATEGORIE BOX #8 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/china.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">繁體中文</h5>
                    <p>45 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #8 */}
            {/* CATEGORIE BOX #9 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/india.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">हिन्दी</h5>
                    <p>43 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #9 */}
            {/* CATEGORIE BOX #10 */}
            <div className="c1-box">
              <Link href="/courses-list">
                <a>
                  <div className="c1-box-txt">
                    {/* Icon */}
                    <img
                      className="img-40"
                      src="images/icons/flags/japan.png"
                      alt="flag-icon"
                    />
                    {/* Text */}
                    <h5 className="h5-xs">日本語</h5>
                    <p>21 Courses</p>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #10 */}
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4Categories1;
