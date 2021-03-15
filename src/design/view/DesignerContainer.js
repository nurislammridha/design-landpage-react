import React from 'react';
import logo from '../images/logo.png'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpg'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/youtube'
// import Nav from 'react-bootstrap/Nav'
const DesignerContainer = () => {
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="nav-header mt-3 mb-2">
                        <div className="logo">
                            <a href><img src={logo} alt="Site Logo" /> </a>
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Keywords Here"
                            />
                            <i className="fa fa-search ml-2"></i>
                        </div>

                    </div>
                    <div className="nav-custom">
                        <Navbar bg="light" variant="light">
                            <Navbar.Brand href="#home">Home</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">SERVICES</Nav.Link>
                                <Nav.Link href="#features">PROJECTS</Nav.Link>
                                <Nav.Link href="#pricin1g1">SOLUTIONS</Nav.Link>
                                <Nav.Link href="#pri1cing1">JOBS</Nav.Link>
                                <Nav.Link href="#pricin1g">BLOG</Nav.Link>
                                <Nav.Link href="#prici1ng">ABOUT US</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="#ho1me">CONTACT US</Nav.Link>
                                <Nav.Link href="#feat1ures"></Nav.Link>
                            </Nav>

                        </Navbar>
                    </div>
                    <div className="carousel">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={car1}
                                    // style={{ height: "450px", borderBottomLeftRadius: "20% 20%", borderBottomRightRadius: "20% 20%" }}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={car2}
                                    // style={{ height: "450px" }}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={car3}
                                    // style={{ height: "450px" }}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row mt-5 blog-con">
                        <div className="col-sm-4 col-12">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <div className="brand-img">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-8 col-9">
                                    <div className="brand-content">
                                        <h3>Design</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores?
                                         </p>
                                        <a href><i class="fa fa-chevron-right"></i>View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <div className="brand-img">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-8 col-9">
                                    <div className="brand-content">
                                        <h3>Branding</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores?
                                </p>
                                        <a href><i class="fa fa-chevron-right"></i>View more</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-4 col-12">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <div className="brand-img mr-2">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-8 col-9">
                                    <div className="brand-content ml-2">
                                        <h3>Development</h3>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores?
                                       </p>
                                        <a href><i class="fa fa-chevron-right"></i>View more</a>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <div className="bottom mt-5">
                    <div className="video-area">
                        <div className="row ">
                            <div className="col-sm-6">
                                <div className="video">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"

                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="video-content">
                                    <h3>What`s The Box?</h3>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab rem, asperiores veniam excepturi sunt optio.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia molestias id ipsam exercitationem est asperiores?
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto officia delectus quas libero omnis sapiente?
                                </p>
                                    <ul className="first-list">
                                        <li><i class="fa fa-chevron-right"></i>Jquery Fader</li>
                                        <li><i class="fa fa-chevron-right"></i>Various Column Options</li>
                                        <li><i class="fa fa-chevron-right"></i>Valid Xhtml and CSS Table design</li>
                                        <li><i class="fa fa-chevron-right"></i>Tested On MAC And PC</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quote mt-5 pr-1">
                        <h2>Responsive Css Template with jquery fader</h2>
                        <div className="quote-con text-muted mt-5">

                            <p><i class="fa fa-quote-left mr-3"></i>
                            Lorem ipsum dolor sit amet consectetur elit. Laboriosam, fugiat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet.</p>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, autem.
                            <i class="fa fa-quote-right ml-3"></i></p>
                            <p className="text-right">Nurislam Mridha || Golden Harvest</p>
                        </div>

                    </div>
                    <div className="social-icon mt-5 pt-3 pb-3">
                        <div className="social  text-muted">
                            <div className="row">
                                <div className="col-sm-2 col-6 font-weight-bolder">
                                    FOLLOW US
                                </div>
                                <div className="col-sm-2 col-6">
                                    <i class="fa fa-facebook-f mr-2"></i>
                                    <span>FACEBOOK</span>
                                </div>
                                <div className="col-sm-2 col-6">
                                    <i class="fa fa-twitter mr-2"></i>
                                    <span>TWITTER</span>
                                </div>
                                <div className="col-sm-2 col-6">
                                    <i class="fa fa-rss mr-2"></i>
                                    <span>RSS-FEED</span>
                                </div>
                                <div className="col-sm-2 col-6">
                                    <i class="fa fa-thumbs-up mr-2"></i>
                                    <span>MYSPACE</span>
                                </div>
                                <div className="col-sm-2 col-6">
                                    <i class="fa fa-skype mr-2"></i>
                                    <span>JOHN DOE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-sm-3 col-6">
                                    <ul>
                                        <li> <h3>Services</h3></li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <ul>
                                        <li><h3>Services</h3></li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <ul>
                                        <li><h3>Services</h3></li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                    </ul>
                                </div>
                                <div className="col-sm-3 col-6">
                                    <ul>
                                        <li><h3>Services</h3></li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                        <li><i class="fa fa-chevron-right"></i>Web Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <Navbar bg="dark" variant="dark">
                                <Navbar.Brand href="#home">Home</Navbar.Brand>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">SERVICES</Nav.Link>
                                    <Nav.Link href="#features">PROJECTS</Nav.Link>
                                    <Nav.Link href="#pricin1g1">SOLUTIONS</Nav.Link>
                                    <Nav.Link href="#pri1cing1">JOBS</Nav.Link>
                                    <Nav.Link href="#pricin1g">BLOG</Nav.Link>
                                    <Nav.Link href="#prici1ng">ABOUT US</Nav.Link>
                                </Nav>
                                <Nav className="ml-auto">
                                    <Nav.Link href="#ho1me">Copyright &copy; Golden Harvest || Designed By Nurislam Mridha</Nav.Link>

                                </Nav>

                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DesignerContainer;