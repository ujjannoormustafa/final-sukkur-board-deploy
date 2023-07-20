import React from "react";
const Demo3Banner1 = () => {
    return (
        <section id="banner-1" className="bg-yellow banner-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* ABOUT TEXT */}
                    <div className="col-md-7 col-lg-6" >
                        <div className="txt-block pc-25" >
                            {/* Title */}
                            <h3 className="h3-sm white-color">
                              Developments
                            </h3>
                            {/* Text */}
                            <p className='white-color' >
                                In order to operate efficiently, the Board has got its own building with a cost of Rs:10.000 million. A piece of land measuring 14 acres was acquired through local administration. It was decided to construct the Board's complex in two phases. The first phase included construction of Administration Block, Chairman's residence, Officers flats, Servant quarters, Auditorium Hall, Bank, Post office, Cafeteria & library, whereas the second phase includes construction of Mosque, youth hostel & mini stadium, which are still to be taken up.



                            </p>
                            <p className='white-color'>
                                Apart from the above, the auditorium hall has been renovated with all facilities and a pumping station to meet the requirement of potable water for the employees of the Board has also been got installed at kheerthar canal. The newly constructed building is located at Shikarpur Road. Wherein the shifting was made in the year 1986.
                            </p>

                        </div>
                    </div>
                    {/* END ABOUT TEXT */}
                    {/* ABOUT IMAGE */}
                    <div className="col-md-5 col-lg-6" >
                        <div className="img-block">
                            <img
                                className="img-fluid"
                                src="images/animatedimges/developments.png"
                                alt="about-image"
                                width='100%'
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

export default Demo3Banner1;
