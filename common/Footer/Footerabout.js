import React, { useState } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import Nav from 'react-bootstrap/Nav';

const About = () => {
    const [activetab, setActivetab] = useState("1")

    const handleSelect = (eventKey) => setActivetab(eventKey);

    return (
        <section>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="abt">About Svtm jewels </h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 dble-line-sep">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Nav variant="tabs" activeKey={activetab} onSelect={handleSelect}>
                            <Nav.Item >
                                <Nav.Link style={{ borderTopWidth: activetab == 1 ? 2 : 0, borderTopColor: activetab == 1 ? "red" : null, paddingLeft: 30, paddingRight: 30 }} eventKey={1}>Our Beginnings</Nav.Link>
                            </Nav.Item>

                            <Nav.Item >
                                <Nav.Link style={{ borderTopWidth: activetab == 2 ? 2 : 0, borderTopColor: activetab == 2 ? "red" : null, paddingLeft: 30, paddingRight: 30 }} eventKey={2}>Our Senior Management</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ borderTopWidth: activetab == 3 ? 2 : 0, borderTopColor: activetab == 3 ? "red" : null, paddingLeft: 30, paddingRight: 30 }} eventKey={3}>Our Presence Today</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line-sep"></div>
                        </div>
                    </div>
                </div>
                {activetab == 1 &&
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5 ">
                            <p>In 1942, Meda A. Balanagasunderasen Chettiar and E.K.R. Meenakshisundharam Chettiar started a jewellery store in Dindigul and named it Vasavi Jewellery Mart. It was a humble beginning in a 400 square feet space, where they sat on the floor and conducted their business; that was how things were done in those days.</p>
                            <p>After the death of Meenakshisundharam Chettiar, his brother, Balagurumurthi Chettiar, joined the business. In time, Balanagasunderasen Chettiar 's son, Meda B. Nithyanandam and Balagurumurthi Chettiar's son, Dhinakara Gupta, took over the reins of Vasavi Jewellery Mart.

                            </p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>In the year 1996, Meda Nithyanandam’s son, Meda N. Ravi and Dhinakara Gupta’s sons took a major leap and shifted the business to a showroom measuring 4000 square feet. This was ten times the size of the original store. It was also the biggest showroom in southern Tamil Nadu at that time.</p>
                            <p>After six decades, in the year 2003, the family business was partitioned and Meda Nithayanandam moved out of Vasavi Jewellery Mart with his son, Meda N. Ravi. They started a new jewellery firm and named it Sri Vasavi Thanga Maaligai. This showroom is housed in its current location and occupies a sprawling 9,000 square feet across three floors.</p>
                        </div>
                    </div>
                }
                {activetab == 2 &&
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <p>Sri Vasavi Thanga Maaligai was founded by Meda B. Nithyanandam and his son, Meda N. Ravi.</p>
                            <p>Recognised as a doyen of the jewellery trade in Tamil Nadu, Nithyanandam continues to be the chief mentor of the business. Mentored and guided by his father, Ravi Nithyanandam captains the overall management of Sri Vasavi Thanga Maaligai today</p>
                            <p>Sri Vasavi Thangamaaligai is backed by the rich heritage and over 60 years experience of this father-son team. It is their foresight and spirit of enterprise that has built the firm into the premium jewellery showroom it is today. They saw the advantages of large-format retailing of gold jewellery in Dindigul and visualised a first-class, spacious, modern jewellery unit, the first of its kind in the district.</p>
                        </div>
                        <div className="col-12 col-lg-6">
                        <p>Meda N. Ravi is responsible for the execution of Sri Vasavi Thanga Maaligai as it stands today. He has enlarged the scope and size of the firm with innovative mass-marketing, and introduced many firsts in Dindigul, including bar-coding of jewellery, automation of inventory management, infra-red security sensors and attractive savings schemes.</p>
                        <p>Today, Sri Vasavi Thanga Maaligai proudly includes a fourth generation member of the family in its senior management - A. R. Shricharran, son of Ravi Nithyanandam. Young Shricharran brings in the joy and zest of youth which he combines with passion for his family business and the jewellery trade. Besides taking an active interest in our day-to-day operations, he has been responsible for introducing and overseeing the development of our e-commerce site and online shopping endeavour.</p>
                        </div>
                    </div>
                }
                {activetab == 3 &&
                    <div className="row">
                        <div className="col-12 col-lg-6">
                        <p>What began as Vasavi Jewellery Mart, a small jewellery outlet, is today an exceptional jewellery house offering over 20,000 designs in gold and silver jewellery and a range of products and services.</p>
                        <p>Spread over three floors and 9000 sq ft, Sri Vasavi Thangamaligai was designed by the prominent architect, I. Hidayatullah, and is the first such structure in Dindigul. Step into our showroom and be greeted with beautiful, welcoming interiors, a stunning array of fine jewellery and 100 highly-trained marketing staff.</p>
                        <p>We are now building a second and even bigger showroom adjoining the present one; this with cover an expanse of 15000 square feet and include two underground car parking levels.</p>
                        </div>
                        <div className="col-12 col-lg-6">
                        <p>One showroom will house gold and diamond jewellery - both affordable and low making-charge ornaments as well as elegant and exclusive designer jewellery will be showcased on separate floors. The second showroom will present a vast range of silver Jewellery and corporate gifts.</p>
                        <p>Ours is the first jewellery house in Dindigul to have obtained BIS certification for hallmarked jewellery. As a member of All India Gem and Jewellery Trade Federation(GJF), Sri Vasavi Thanga Maaligai now belongs to a premium chain of elite jewellers working towards the betterment of the gold jewellery trade in India.</p>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </section>
    )
}
export default About;