import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { getPagination, pagination } from "../../utils/utils";
import Paggination from "../Paggination";

const TeachersListTeam = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination("#teamMember", sort, active);
    let list = document.querySelectorAll("#teamMember");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section id="team-1" className="wide-60 team-ection division">
        <div className="container">
          <h4 className="h4-xl text-center mb-10 pb-80 "> Officers Of The Board</h4>
          <div className="row">
            {/* TEAM MEMBER #1 */}

            {/*Officer Start*/}

            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                    className="img-fluid"
                    src="images/officer/officer-1.jpg"
                    alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. RAFIQUE AHMED PALH</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Chairman</span>
                  <p className="p-sm">BPS: 20</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-2.jpg"
                      alt="team-member-foto"

                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. MUHAMMAD SALMAN KHAN</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Secretary</span>
                  <p className="p-sm">BPS: 18</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"

                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. SIKANDER ALI MIRJAT</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Controller of Examinations</span>
                  <p className="p-sm">BPS: 19</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. GHULAM QADIR DHAREJO</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Audit Officer</span>
                  <p className="p-sm">BPS: 19</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-4.jpg"
                      alt="team-member-foto"

                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. NAZIR AHMED MALLAH</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Deputy Controller of Examinations</span>
                  <p className="p-sm">BPS: 18</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix  ">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"

                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. GHULAM QADIR CHANNA</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Deputy Controller of Examinations</span>
                  <p className="p-sm">BPS: 18</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-6.jpg"
                      alt="team-member-foto"
                      width='90%'
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. NASEER AHMED LAGHARI</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary</span>
                  <p className="p-sm">BPS: 18</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-7.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. IMTIAZ ALI BHATTI</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Computer Programmer</span>
                  <p className="p-sm">BPS: 18</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-1.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. WAQAR HUSSAIN JOKHIO,</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Controller of Examination</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-8.jpg"
                      alt="team-member-foto"

                      width="90%"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. LUTUFULLAH KAMANGAR,</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. MUHAMMAD HASSAN KHOSO</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. MUHAMMAD SALMAN KHAN</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary (Budget & Accounts)</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. MUHAMMAD RAMZAN BHUTTO</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary (Research)</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/officer-9.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. RIZWAN AHMED MEMON,</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Caretaker</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>SYED FIDA HUSSAIN SHAH</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Controller of Examinations (SSC/HSC-Conduct)</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. MUHAMMAD HANIF JALBANI,</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Librarian</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>
                        MR. ZAHOOR AHMED MEMON</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Research Associate</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. GHULAM ABBAS BHUTTO</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Secretary (Bills)</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. MUAMMAD SULTAN SHHAIKH,</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>Assistant Controller of Examinations

(SSC/HSC-Conduct)</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            <div className="col-sm-6 col-lg-3">
              <div className="team-member">
                {/* Team Member Photo */}
                <div className="team-member-photo clearfix">
                  <img
                      className="img-fluid"
                      src="images/officer/no-image.jpg"
                      alt="team-member-foto"
                  />
                </div>
                {/* Team Member Meta */}
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <Link href="/controlling-authority">
                      <span>MR. GHULAM SHABIR</span>
                    </Link>
                  </h5>
                  <span className='text-primary font-weight-bold'>DPE</span>
                  <p className="p-sm">BPS: 17</p>
                </div>
              </div>
            </div>


            {/*Officer End*/}





            {/* END TEAM MEMBER #1 */}
            {/* TEAM MEMBER #2 */}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-2.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-google-plus"*/}
            {/*              >*/}
            {/*                <i className="fab fa-google-plus-g" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Kally Brooks</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Business &amp; Management</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star-half-alt" />*/}
            {/*        <span className="tm-rating">4.38</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">17 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #2 *!/*/}
            {/*/!* TEAM MEMBER #3 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-3.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-linkedin"*/}
            {/*              >*/}
            {/*                <i className="fab fa-linkedin-in" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Robert Coronado</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Engineering &amp; Technology</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star-half-alt" />*/}
            {/*        <span className="tm-rating">4.64</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">23 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #3 *!/*/}
            {/*/!* TEAM MEMBER #4 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-4.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Becky Reed</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Design &amp; Art</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.78</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">31 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #4 *!/*/}
            {/*/!* TEAM MEMBER #5 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-5.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>David Smith</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>IT &amp; Software</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.64</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">62 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #5 *!/*/}
            {/*/!* TEAM MEMBER #6 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-6.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Linda J. Ross</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Teacher of English</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star-half-alt" />*/}
            {/*        <span className="tm-rating">4.33</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">59 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #6 *!/*/}
            {/*/!* TEAM MEMBER #7 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-7.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Sergio Arriero</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Teacher of Spanish</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.19</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">42 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #7 *!/*/}
            {/*/!* TEAM MEMBER #8 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-8.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Linda Ferell</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Healt &amp; Fitness</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.81</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">74 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #8 *!/*/}
            {/*/!* TEAM MEMBER #9 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-9.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Lea Victoria</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Life Science</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.82</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">51 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #9 *!/*/}
            {/*/!* TEAM MEMBER #10 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-10.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Anthony Backer</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Photography</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.91</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">86 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #10 *!/*/}
            {/*/!* TEAM MEMBER #11 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-11.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Jorge Stucky</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Science &amp; Math</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <span className="tm-rating">4.38</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">70 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!* END TEAM MEMBER #11 *!/*/}
            {/*/!* TEAM MEMBER #12 *!/*/}
            {/*<div className="col-sm-6 col-lg-3">*/}
            {/*  <div className="team-member">*/}
            {/*    /!* Team Member Photo *!/*/}
            {/*    <div className="team-member-photo">*/}
            {/*      <img*/}
            {/*        className="img-fluid"*/}
            {/*        src="images/team-12.jpg"*/}
            {/*        alt="team-member-foto"*/}
            {/*      />*/}
            {/*      /!* Social Icons *!/*/}
            {/*      <div className="tm-social clearfix">*/}
            {/*        <ul className="text-center clearfix">*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-facebook"*/}
            {/*              >*/}
            {/*                <i className="fab fa-facebook-f" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-twitter"*/}
            {/*              >*/}
            {/*                <i className="fab fa-twitter" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <Link href="#">*/}
            {/*              <span*/}
            {/*                onClick={(e) => {*/}
            {/*                  e.preventDefault();*/}
            {/*                }}*/}
            {/*                className="ico-youtube"*/}
            {/*              >*/}
            {/*                <i className="fab fa-youtube" />*/}
            {/*              </span>*/}
            {/*            </Link>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    /!* Team Member Meta *!/*/}
            {/*    <div className="tm-meta">*/}
            {/*      <h5 className="h5-md">*/}
            {/*        <Link href="/teacher-profile">*/}
            {/*          <span>Jilly Buchanan</span>*/}
            {/*        </Link>*/}
            {/*      </h5>*/}
            {/*      <span>Real Estate</span>*/}
            {/*      /!* Rating *!/*/}
            {/*      <div className="tm-rating">*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star" />*/}
            {/*        <i className="fas fa-star-half-alt" />*/}
            {/*        <span className="tm-rating">4.46</span>*/}
            {/*      </div>*/}
            {/*      <p className="p-sm">96 Reviews</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* END TEAM MEMBER #12 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/*<Paggination active={active} setActive={setActive} state={state} />*/}
    </Fragment>
  );
};

export default TeachersListTeam;
