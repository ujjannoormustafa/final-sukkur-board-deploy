import Link from "next/link";
import React from "react";

const TeacherProfileTeam3 = () => {
    return (
        <section id="team-3" className="pt-100 team-section division">
            <div className="container">
                <h1 className='text-center display-7 py-4'>CONTROLLING AUTHORITY OF THE BOARD</h1>
                <div className="row">
                    {/* TEACHER PHOTO */}
                    <div className="col-md-4">
                        <div className="team-3-photo text-center">
                            {/* Teacher Photo */}
                            <div className="t-3-photo mb-25">
                                <img
                                    className="img-fluid"
                                    src="images/boardimages/cm.jpg"
                                    alt="team-member-foto"
                                />
                            </div>
                            {/* Social Icons */}
                            <div className="tm-3-social clearfix">
                                <ul className="text-center clearfix">
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-facebook"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-twitter"
                                            >
                                                <i className="fab fa-twitter" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-google-plus"
                                            >
                                                <i className="fab fa-google-plus-g" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                }}
                                                className="ico-linkedin"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Links */}
                            <div className="t-3-links">
                                <Link href="https://cm.sindh.gov.pk/cm-profile">
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                        className="btn btn-md btn-tra-grey custom-button"
                                    >
                                        Website
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                    {/* END TEACHER PHOTO */}
                    {/* TEACHER DATA */}
                    <div className="col-md-8">
                        <div className="team-3-txt pc-45">
                            {/* Name */}
                            <h3 className="h3-xs">
                                Syed Murad Ali Shah</h3>
                            <span className={"text-primary my-2"}>Chief Minister Sindh</span>
                            {/* Data */}
                            <h3 className="teacher-data">
                                Profile of Chief Minister Sindh
                            </h3>
                            {/* Small Title */}
                            <h5 className="h5-xl mt-40">29-07-2016 to Present</h5>
                            {/* Text */}
                            <p>
                                Syed Murad Ali Shah was born on 11 August 1962 in Karachi. He earned his engineering degree from the NED University of Engineering and Technology while being schooled in Karachi. He held positions as a junior engineer at the Water and Power Development Authority (Wapda), engineer at the Hyderabad Development Authority, and executive engineer at the Port Qasim Authority. Additionally, he served as the project director of the fish harbor authority.
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15">
                                <li>
                                    Later, he pursued masters degrees in engineering-economic system and civil and structural engineering from Stanford University in the 1990s.
                                </li>
                                <li>
                                    In 2002, Syed Murad Ali Shah contested and won the constituency of his father from the small town of Jhanghara, now in Jamshoro district, becoming an integral part of the PPP's think tank.
                                </li>
                                <li>
                                    He analyzed and opposed the provincial government backed by the then military ruler Gen Pervez Musharraf. His interest in financial matters and rules of the assembly earned him a key position in the party, proving beneficial when the PPP formed its government in Sindh.
                                </li>
                                <li>
                                    After winning the same constituency in 2008, he became the Minister for Irrigation during Syed Qaim Ali Shah's first stint as Chief Minister. Later, he took charge of the finance ministry, a position he has been overseeing to date. However, he faced disqualification from the assembly seat for holding dual nationality. To be eligible again, he surrendered his Canadian nationality and contested the elections while advising the chief minister for finance. After winning the by-election, he finally assumed his ministry.
                                </li>
                                <li>
                                    To be eligible again, he surrendered his Canadian nationality and contested the elections while advising the chief minister for finance. After winning the by-election, he finally assumed his ministry.
                                </li>
                            </ul>
                            {/* Text */}
                            <p>
                                The oath-taking ceremony occurred at the Governor's House, where Sindh Governor Dr Ishrat ul Ebad Khan administered the oath. Numerous party leaders, including PPP Chairman Bilawal Bhutto, former Prime Minister Syed Yousaf Raza Gillani, former Sindh CM Syed Qaim Ali Shah, and Leader of the Opposition in the National Assembly Syed Khurshid Shah, were present. Pakistan People's Party (PPP) candidate Syed Murad Ali Shah was elected as the new Sindh Chief Minister (CM) on Friday after securing the required number of votes.
                            </p>
                        </div>
                    </div>
                    {/* END TEACHER DATA */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default TeacherProfileTeam3;
