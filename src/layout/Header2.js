import Link from "next/link";
import React from "react";
const Header2 = () => {
    return (
        <header id="header" className="header white-menu navbar-dark">
            <div className="header-wrapper">
                {/* MOBILE HEADER */}
                <div className="wsmobileheader clearfix">
                    <Link href="#">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            id="wsnavtoggle"
                            className="wsanimated-arrow"
                        >
                            <span />
                        </a>
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
                                <a className="logo-black">
                                    <img
                                        src="images/logo.png"
                                        width={172}
                                        height={40}
                                        alt="header-logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="desktoplogo">
                            <Link href="/demo-1">
                                <a className="logo-white">
                                    <img
                                        src="images/logo-white.png"
                                        width={172}
                                        height={40}
                                        alt="header-logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            About
                                        </a>
                                    </Link>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Pages <span className="wsarrow" />
                                        </a>
                                    </Link>
                                    <div className="wsmegamenu clearfix halfmenu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list left-link-list">
                                                    <li>
                                                        <Link href="/about">
                                                            <a>About Us Page</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/categories-list">
                                                            <a>
                                                                Categories
                                                                Listing
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/category-details">
                                                            <a>
                                                                Category Details
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/courses-list">
                                                            <a>
                                                                Courses Listing
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/course-details">
                                                            <a>
                                                                Course Details
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/teachers-list">
                                                            <a>
                                                                Teachers Listing
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/teacher-profile">
                                                            <a>
                                                                Teacher Profile
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li>
                                                        <Link href="/become-a-teacher">
                                                            <a>
                                                                Become A Teacher
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pricing">
                                                            <a>
                                                                Pricing Plans
                                                                Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/reviews">
                                                            <a>Reviews Page</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faqs">
                                                            <a>FAQs Page</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-listing">
                                                            <a>Blog Listing</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/single-post">
                                                            <a>Single Post</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contacts">
                                                            <a>Contacts Page</a>
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
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Categories
                                            <span className="wsarrow" />
                                        </a>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Development</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Finance &amp; Accounting</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>IT &amp; Software</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Office Productivity</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Photography</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Math &amp; Science</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Languages</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Marketing</a>
                                            </Link>
                                        </li>
                                        <li aria-haspopup="true">
                                            <Link href="/courses-list">
                                                <a>Health &amp; Fitness</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* END DROPDOWN MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true">
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            Mega Menu
                                            <span className="wsarrow" />
                                        </a>
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
                                                                <a
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    English for
                                                                    Tourism
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <a
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
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <a
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
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <a
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
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <a
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
                                                                </a>
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
                                                            <a>
                                                                Study smart and
                                                                save time with
                                                                these 5 tips
                                                            </a>
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
                                                                    <a>
                                                                        Etiam
                                                                        sapien
                                                                        risus
                                                                        ante
                                                                        auctor
                                                                        tempus
                                                                        an
                                                                        accumsan...
                                                                    </a>
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
                                                                    <a>
                                                                        Blandit
                                                                        tempor
                                                                        sapien
                                                                        ipsum,
                                                                        porta
                                                                        risus
                                                                        auctor
                                                                        justo...
                                                                    </a>
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
                                                                    <a>
                                                                        Cursus
                                                                        risus an
                                                                        auctor
                                                                        risus
                                                                        laoreet
                                                                        undo
                                                                        auctor
                                                                        varius...
                                                                    </a>
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
                                    <Link href="/blog-listing">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="/contacts">
                                        <a>Contacts</a>
                                    </Link>
                                </li>
                                {/* DROPDOWN MENU 
						          	<li aria-haspopup="true">
						          		<a href="#" class="lang-select">
							          		<img src="images/icons/flags/uk.png" alt="flag-icon" /> En <span class="wsarrow"></span>
							          	</a>
	            						<ul class="sub-menu last-sub-menu">
						           			<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/germany.png" alt="flag-icon" /> Deutch</a></li>
						           			<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/spain.png" alt="flag-icon" /> Español</a></li>
						           			<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/france.png" alt="flag-icon" /> Français</a></li>
						              		<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/italy.png" alt="flag-icon" /> Italiano</a></li>
						              		<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/russia.png" alt="flag-icon" /> Русский</a></li>
						              		<li aria-haspopup="true"><a href="#"><img src="images/icons/flags/china.png" alt="flag-icon" /> 简体中文</a></li>
						           		</ul>
								    </li> */}
                                {/* HEADER BUTTON */}
                                <li className="nl-simple" aria-haspopup="true">
                                    <Link href="/pricing">
                                        <a className="btn btn-rose tra-black-hover last-link">
                                            Get Started
                                        </a>
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
