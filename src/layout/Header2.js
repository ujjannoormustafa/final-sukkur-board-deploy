import Link from "next/link";
import React from "react";
const Header2 = () => {
    return (
        <header id="header" className="header white-menu navbar-dark">
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <Link href="#">
                        <span
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            id="wsnavtoggle"
                            className="wsanimated-arrow"
                        >
                            <span />
                        </span>
                    </Link>
                    <span className="smllogo smllogo-black">
                        <img
                            src="images/logo.png"
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
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
                        <div className="desktoplogo">
                            <Link href="/demo-1">
                                <span className="logo-black">
                                    <img
                                        src="images/logo.png"
                                        width={172}
                                        height={40}
                                        alt="header-logo"
                                    />
                                </span>
                            </Link>
                        </div>
                        <div className="desktoplogo">
                            <Link href="/demo-1">
                                <span className="logo-white">
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
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            About
                                        </span>
                                    </Link>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Pages <span className="wsarrow" />
                                        </span>
                                    </Link>
                                    <div className="wsmegamenu clearfix halfmenu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
                                                    <li>
                                                        <Link href="/about">
                                                            <span>About Us Page</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/categories-list">
                                                            <span>
                                                                Categories
                                                                Listing
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-details">
                                                            <span>
                                                                Category Details
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/courses-list">
                                                            <span>
                                                                Courses Listing
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/course-details">
                                                            <span>
                                                                Course Details
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/officers">
                                                            <span>
                                                                Teachers Listing
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/controlling-authority">
                                                            <span>
                                                                Teacher Profile
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li>
                                                        <Link href="/become-a-teacher">
                                                            <span>
                                                                Become A Teacher
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pricing">
                                                            <span>
                                                                Pricing Plans
                                                                Page
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/reviews">
                                                            <span>Reviews Page</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faqs">
                                                            <span>FAQs Page</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/results">
                                                            <span>Blog Listing</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/single-post">
                                                            <span>Single Post</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contacts">
                                                            <span>Contacts Page</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* END DROPDOWN MENU */}
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Categories
                                            <span className="wsarrow" />
                                        </span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Development</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Finance &amp; Accounting</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>IT &amp; Software</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Office Productivity</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Photography</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Math &amp; Science</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Languages</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Marketing</span>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <span>Health &amp; Fitness</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* END DROPDOWN MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true">
                                    <Link href="#">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Mega Menu
                                            <span className="wsarrow" />
                                        </span>
                                    </Link>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU QUICK LINKS */}
                                                <div className="col-md-12 col-lg-3">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Top 5 Online Courses:
                                                    </h3>
                                                    <ul className="link-list clearfix">
                                                        <li>
                                                            <Link href="#">
                                                                <span
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    English for
                                                                    Tourism
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <span
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    Python
                                                                    Programming
                                                                    - Working
                                                                    with Lists
                                                                    and Files
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <span
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    Computer
                                                                    Networking -
                                                                    Wired and
                                                                    Wireless
                                                                    Networks
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <span
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    Marketing
                                                                    Management -
                                                                    Capturing
                                                                    Marketing
                                                                    Insights
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <span
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    iOS App
                                                                    Development:
                                                                    Data
                                                                    Persistence
                                                                    with Core
                                                                    Data
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* END MEGAMENU QUICK LINKS */}
                                                {/* MEGAMENU FEATURED NEWS */}
                                                <div className="col-md-12 col-lg-5">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Featured News:
                                                    </h3>
                                                    {/* Image */}
                                                    <div className="fluid-width-video-wrapper mb-15">
                                                        <img
                                                            src="images/blog/featured-news.jpg"
                                                            alt="featured-news"
                                                        />
                                                    </div>
                                                    {/* Text */}
                                                    <h5 className="h5-md">
                                                        <Link href="/single-post">
                                                            <span>
                                                                Study smart and
                                                                save time with
                                                                these 5 tips
                                                            </span>
                                                        </Link>
                                                    </h5>
                                                    <p className="wsmwnutxt">
                                                        Porta semper lacus
                                                        cursus, feugiat primis
                                                        ultrice in ligula risus
                                                        auctor tempus feugiat
                                                        dolor impedit magna...
                                                    </p>
                                                </div>
                                                {/* END MEGAMENU FEATURED NEWS */}
                                                {/* MEGAMENU LATEST NEWS */}
                                                <div className="col-md-12 col-lg-4">
                                                    {/* Title */}
                                                    <h3 className="title">
                                                        Latest News:
                                                    </h3>
                                                    {/* Latest News */}
                                                    <ul className="latest-news">
                                                        {/* Post #1 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-1.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">
                                                                    <span>
                                                                        Etiam
                                                                        sapien
                                                                        risus
                                                                        ante
                                                                        auctor
                                                                        tempus
                                                                        an
                                                                        accumsan...
                                                                    </span>
                                                                </Link>
                                                                <p>
                                                                    18 hours ago
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #2 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-2.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">
                                                                    <span>
                                                                        Blandit
                                                                        tempor
                                                                        sapien
                                                                        ipsum,
                                                                        porta
                                                                        risus
                                                                        auctor
                                                                        justo...
                                                                    </span>
                                                                </Link>
                                                                <p>
                                                                    Feb 17, 2020
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {/* Post #3 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img
                                                                className="img-fluid"
                                                                src="images/blog/latest-post-3.jpg"
                                                                alt="blog-post-preview"
                                                            />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <Link href="/single-post">
                                                                    <span>
                                                                        Cursus
                                                                        risus an
                                                                        auctor
                                                                        risus
                                                                        laoreet
                                                                        undo
                                                                        auctor
                                                                        varius...
                                                                    </span>
                                                                </Link>
                                                                <p>
                                                                    Feb 07, 2020
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* END MEGAMENU LATEST NEWS */}
                                            </div>
                                            {/* End row */}
                                        </div>
                                        {/* End container */}
                                    </div>
                                    {/* End wsmegamenu */}
                                </li>
                                {/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="/results">
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="/contacts">
                                        <span>Contacts</span>
                                    </Link>
                                </li>
                                {/* DROPDOWN MENU 
						          	<li aria-haspopup="true">
						          		<span href="#" class="lang-select">
							          		<img src="images/icons/flags/uk.png" alt="flag-icon" /> En <span class="wsarrow"></span>
							          	</span>
	            						<ul class="sub-menu last-sub-menu">
						           			<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/germany.png" alt="flag-icon" /> Deutch</span></li>
						           			<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/spain.png" alt="flag-icon" /> Español</span></li>
						           			<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/france.png" alt="flag-icon" /> Français</span></li>
						              		<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/italy.png" alt="flag-icon" /> Italiano</span></li>
						              		<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/russia.png" alt="flag-icon" /> Русский</span></li>
						              		<li aria-haspopup="true"><span href="#"><img src="images/icons/flags/china.png" alt="flag-icon" /> 简体中文</span></li>
						           		</ul>
								    </li> */}
                                {/* HEADER BUTTON */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="/pricing">
                                        <span className="btn btn-rose tra-black-hover last-link">
                                            Get Started
                                        </span>
                                    </Link>
                                </li>
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

export default Header2;
