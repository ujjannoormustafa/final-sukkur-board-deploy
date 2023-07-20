import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS styles

import React, {useEffect} from "react";


const Demo3About3 = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="about-3" className="pt-80 about-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6" >
                        <div className="txt-block pc-25" >
                            {/* Title */}
                            <h3 className="h3-sm text-center">
                                Introducation
                            </h3>
                            {/* Text */}
                            <p >
                                The Board of Intermediate and Secondary Education Sukkur, was established on
                                8.10.1979 under provision of the Ordinance mentioned in (2) above,
                                The Offices of the Board was firstly established in a portion of A.B.D Law
                                College Sukkur, then shifted in the rented bungalows situated in Muslim
                                Housing Society at Military Road Sukkur. The Board occupied its own present
                                premises / officers in the year 1985.
                            </p>
                            <p>
                                At the time of establishment, the territorial jurisdiction of the Board consisted of the at the time following Districts:
                            </p>
                            {/* List */}
                            <ul className="txt-list mb-15" >
                                <li>
                                    Jacobabad
                                </li>
                                <li>
                                    Khairpur
                                </li>
                                <li>
                                    Larkana
                                </li>
                                <li>
                                    Nawabshah including the present territories of District Naushahroferoze
                                </li>
                                <li>
                                    Sukkur including present territories of District Ghotki
                                </li>
                                <li>
                                    Shikarpur
                                </li>
                            </ul>
                            <p>
                                On establishment of the Board of Intermediate and Secondary Education at  Larkana,  the  territorial jurisdiction is confined to the following areas:
                            </p>
                            <ul className="txt-list mb-15" >
                                <li>
                                    District Sukkur
                                </li>
                                <li>
                                    District Ghotki
                                </li>
                                <li>
                                    District Khairpur
                                </li>
                                <li>
                                    District Naushahro Feroze
                                </li>
                                <li>
                                    Taluka Daulatpur of Nawabshah District
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6"  >
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/animatedimges/intro.jpg"
                                alt="about-image"
                            />
                        </div>
                    </div>
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo3About3;
