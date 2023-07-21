import Link from "next/link";
import React, { useState } from "react";
const Header = ({ headerBtn }) => {
  const [openSubMen, setOpenSubMen] = useState(null);
  const onClick = () => {
    const body = document.querySelector("body");
    body.classList.toggle("wsactive");
  };
  const activeFun = (name) => setOpenSubMen(name === openSubMen ? "" : name);
  const activeLi = (name) =>
    name === openSubMen ? "d-block" : "d-md-block d-sm-none";
  const iconChange = (name) => (name === openSubMen ? "ws-activearrow" : "");

  return (
    <header id="header" className="header white-menu navbar-dark">
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <Link href="#">
            <span
              onClick={() => onClick()}
              id="wsnavtoggle"
              className="wsanimated-arrow"
            >
              <span />
            </span>
          </Link>
          <span className="smllogo smllogo-black">
            <img
              src="images/logo.jpg"
              width={172}
              height={40}
              alt="mobile-logo"
            />
          </span>
          <span className="smllogo smllogo-white">
            <img
              src="images/logo-white.png"
              width={172}
              height={40}
              alt="mobile-logo"
            />
          </span>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix" id="wsmainfull">
          <div className="wsmainwp clearfix">
            {/* LOGO IMAGE */}
            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
            <div className="desktoplogo">
              <Link href="/demo-1">
                <span href="#hero-3" className="logo-black">
                  <img
                    src="images/logo.jpg"
                    width={65}
                    height={65}
                    alt="header-logo"
                  />
                </span>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="#">
                <span href="d#hero-3" className="logo-white">
                  <img
                    src="images/logo-white.png"
                    width={172}
                    height={40}
                    alt="header-logo"
                  />
                </span>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix" style={{ maxHeight: "700px" }}>
              <div className="overlapblackbg" onClick={() => onClick()} />
              <ul className="wsmenu-list">
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="home">Home</Link>
                </li>

                <li onClick={() => activeFun("Categories")}>
                  <span className={`wsmenu-click ${iconChange("Categories")}`}>
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="/news">
                    News & Updates <span className="wsarrow" />
                  </Link>
                  <ul className={`sub-menu ${activeLi("Categories")}`}>
                    <li>
                      <Link href="form">Forms</Link>
                    </li>
                    <li>
                      <Link href="message">Messages</Link>
                    </li>
                    <li>
                      <Link href="courses-list">Sports</Link>
                    </li>
                    <li>
                      <Link href="schedule">Schedule</Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Office Productivity</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Photography</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Math &amp; Science</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Languages</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Marketing</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Health &amp; Fitness</Link>*/}
                    {/*</li>*/}
                  </ul>
                </li>{" "}


                {/*Messages*/}
                <li onClick={() => activeFun("Categories")}>
                  <span className={`wsmenu-click ${iconChange("Categories")}`}>
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href="controlling-authority">
                    Controlling Authority <span className="wsarrow" />
                  </Link>
                  <ul className={`sub-menu ${activeLi("Categories")}`}>
                    <li>
                      <Link href="officers">Officers of the Board</Link>
                    </li>
                    <li>
                      <Link href="courses-list">IBCC Meeting</Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Schedule</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Office Productivity</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Photography</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Math &amp; Science</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Languages</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Marketing</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="courses-list">Health &amp; Fitness</Link>*/}
                    {/*</li>*/}
                  </ul>
                </li>{" "}

                {/* END DROPDOWN MENU */}
                {/* MEGAMENU */}
                {/*<li onClick={() => activeFun("Mega")}>*/}
                {/*  <span className={`wsmenu-click ${iconChange("Mega")}`}>*/}
                {/*    <i className="wsmenu-arrow" />*/}
                {/*  </span>*/}
                {/*  <span href="#">*/}
                {/*    Controlling Authority <span className="wsarrow" />*/}
                {/*  </span>*/}
                {/*  <div className={`wsmegamenu clearfix ${activeLi("Mega")}`}>*/}
                {/*    <div className="container">*/}
                {/*      <div className="row">*/}
                {/*        /!* MEGAMENU QUICK LINKS *!/*/}
                {/*        <div className="col-md-12 col-lg-3">*/}
                {/*          /!* Title *!/*/}
                {/*          <h3 className="title">Top 5 Online Courses:</h3>*/}
                {/*          <ul className="link-list clearfix">*/}
                {/*            <li>*/}
                {/*              <Link href="course-details">*/}
                {/*                English for Tourism*/}
                {/*              </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*              <Link href="course-details">*/}
                {/*                Python Programming - Working with Lists and*/}
                {/*                Files*/}
                {/*              </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*              <Link href="course-details">*/}
                {/*                Computer Networking - Wired and Wireless*/}
                {/*                Networks*/}
                {/*              </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*              <Link href="course-details">*/}
                {/*                Digital Marketing: The Ultimate Guide to*/}
                {/*                Strategic*/}
                {/*              </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*              <Link href="course-details">*/}
                {/*                The Complete iOS 10 &amp; Swift 3 Developer*/}
                {/*                Course*/}
                {/*              </Link>*/}
                {/*            </li>*/}
                {/*          </ul>*/}
                {/*        </div>{" "}*/}
                        {/* END MEGAMENU QUICK LINKS */}
                        {/* MEGAMENU FEATURED NEWS */}
                        {/*<div className="col-md-12 col-lg-5">*/}
                        {/*  /!* Title *!/*/}
                        {/*  <h3 className="title">Featured News:</h3>*/}
                        {/*  /!* Image *!/*/}
                        {/*  <div className="fluid-width-video-wrapper mb-15">*/}
                        {/*    <img*/}
                        {/*      src="images/blog/featured-news.jpg"*/}
                        {/*      alt="featured-news"*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*  /!* Text *!/*/}
                        {/*  <h5 className="h5-md">*/}
                        {/*    <Link href="single-post">*/}
                        {/*      Study smart and save time with these 5 tips*/}
                        {/*    </Link>*/}
                        {/*  </h5>*/}
                        {/*  <p className="wsmwnutxt">*/}
                        {/*    Porta semper lacus cursus, feugiat primis ultrice in*/}
                        {/*    ligula risus auctor tempus feugiat dolor impedit*/}
                        {/*    magna...*/}
                        {/*  </p>*/}
                        {/*</div>{" "}*/}
                        {/* END MEGAMENU FEATURED NEWS */}
                        {/* MEGAMENU LATEST NEWS */}
                        {/*<div className="col-md-12 col-lg-4">*/}
                        {/*  /!* Title *!/*/}
                        {/*  <h3 className="title">Latest News:</h3>*/}
                        {/*  /!* Latest News *!/*/}
                        {/*  <ul className="latest-news">*/}
                        {/*    /!* Post #1 *!/*/}
                        {/*    <li className="clearfix d-flex align-items-center">*/}
                        {/*      /!* Image *!/*/}
                        {/*      <img*/}
                        {/*        className="img-fluid"*/}
                        {/*        src="images/blog/latest-post-1.jpg"*/}
                        {/*        alt="blog-post-preview"*/}
                        {/*      />*/}
                        {/*      /!* Text *!/*/}
                        {/*      <div className="post-summary">*/}
                        {/*        <Link href="single-post">*/}
                        {/*          Etiam sapien risus ante auctor tempus an*/}
                        {/*          accumsan...*/}
                        {/*        </Link>*/}
                        {/*        <p>18 hours ago</p>*/}
                        {/*      </div>*/}
                        {/*    </li>*/}
                        {/*    /!* Post #2 *!/*/}
                        {/*    <li className="clearfix d-flex align-items-center">*/}
                        {/*      /!* Image *!/*/}
                        {/*      <img*/}
                        {/*        className="img-fluid"*/}
                        {/*        src="images/blog/latest-post-2.jpg"*/}
                        {/*        alt="blog-post-preview"*/}
                        {/*      />*/}
                        {/*      /!* Text *!/*/}
                        {/*      <div className="post-summary">*/}
                        {/*        <Link href="single-post">*/}
                        {/*          Blandit tempor sapien ipsum, porta risus*/}
                        {/*          auctor justo...*/}
                        {/*        </Link>*/}
                        {/*        <p>Feb 17, 2020</p>*/}
                        {/*      </div>*/}
                        {/*    </li>*/}
                        {/*    /!* Post #3 *!/*/}
                        {/*    <li className="clearfix d-flex align-items-center">*/}
                        {/*      /!* Image *!/*/}
                        {/*      <img*/}
                        {/*        className="img-fluid"*/}
                        {/*        src="images/blog/latest-post-3.jpg"*/}
                        {/*        alt="blog-post-preview"*/}
                        {/*      />*/}
                        {/*      /!* Text *!/*/}
                        {/*      <div className="post-summary">*/}
                        {/*        <Link href="single-post">*/}
                        {/*          Cursus risus an auctor risus laoreet undo*/}
                        {/*          auctor varius...*/}
                        {/*        </Link>*/}
                        {/*        <p>Feb 07, 2020</p>*/}
                        {/*      </div>*/}
                        {/*    </li>*/}
                        {/*  </ul>*/}
                        {/*</div>{" "}*/}
                        {/* END MEGAMENU LATEST NEWS */}
                {/*      </div>{" "}*/}
                {/*      /!* End row *!/*/}
                {/*    </div>{" "}*/}
                {/*    /!* End container *!/*/}
                {/*  </div>{" "}*/}
                {/*  /!* End wsmegamenu *!/*/}
                {/*</li>{" "}*/}
                {/* END MEGAMENU */}
                {/* SIMPLE NAVIGATION LINK */}

                {/*Messages*/}
                <li className="nl-simple">
                  <Link href="results">Results</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="contacts">Contacts</Link>
                </li>
                {/* DROPDOWN MENU */}
                {/*{headerBtn ? (*/}
                {/*  <li className="nl-simple" aria-haspopup="true">*/}
                {/*    <Link href="/pricing">*/}
                {/*      <span className="btn btn-rose tra-black-hover last-link">*/}
                {/*        Get Started*/}
                {/*      </span>*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*) : (*/}
                {/*  <li onClick={() => activeFun("En")}>*/}
                {/*    <span className={`wsmenu-click ${iconChange("En")}`}>*/}
                {/*      <i className="wsmenu-arrow" />*/}
                {/*    </span>*/}
                {/*    <span href="#" className="lang-select">*/}
                {/*      <img src="images/icons/flags/uk.png" alt="flag-icon" /> En{" "}*/}
                {/*      <span className="wsarrow" />*/}
                {/*    </span>*/}
                {/*    <ul className={`sub-menu last-sub-menu ${activeLi("En")}`}>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/germany.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          Deutch*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/spain.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          Español*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/france.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          Français*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/italy.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          Italiano*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/russia.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          Русский*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*      <li>*/}
                {/*        <span href="#">*/}
                {/*          <img*/}
                {/*            src="images/icons/flags/china.png"*/}
                {/*            alt="flag-icon"*/}
                {/*          />{" "}*/}
                {/*          简体中文*/}
                {/*        </span>*/}
                {/*      </li>*/}
                {/*    </ul>*/}
                {/*  </li>*/}
                {/*)}{" "}*/}
                {/* END DROPDOWN MENU */}
                {/* HEADER BUTTON 
								    <li class="nl-simple" >
								    	<span href="#" class="btn btn-rose tra-black-hover last-link">Get Started</span>
								    </li> */}
              </ul>
            </nav>

            {/* END MAIN MENU */}
          </div>
        </div>
        {/* END NAVIGATION MENU */}
      </div>
      {/* End header-wrapper */}
    </header>
  );
};

export default Header;
