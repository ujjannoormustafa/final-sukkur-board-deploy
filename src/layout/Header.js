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
              width={40}
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
              <Link href="/home">
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
              <Link href="home">
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
                  <a href="/news">
                    News & Updates <span className="wsarrow" />
                  </a>
                  <ul className={`sub-menu ${activeLi("Categories")}`}>
                    <li>
                      <Link href="form">Forms</Link>
                    </li>
                    <li>
                      <Link href="message">Messages</Link>
                    </li>
                    <li>
                      <Link href="sports">Sports</Link>
                    </li>
                    <li>
                      <Link href="schedule">Schedule</Link>
                    </li>

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
                      <Link href="ibc">IBCC Meeting</Link>
                    </li>

                  </ul>
                </li>{" "}



                {/*Messages*/}
                <li className="nl-simple">
                  <Link href="results">Results</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href="contacts">Contacts</Link>
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

export default Header;
