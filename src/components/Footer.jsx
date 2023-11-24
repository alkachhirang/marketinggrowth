import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook } from './Iconimg';
import { Instagram } from './Iconimg';
import { Twitter } from './Iconimg';
import { In } from './Iconimg';
import { Youtube } from './Iconimg';

function Footer() {
    return (
        <div className='footer_bg_img pb-5'>
            <Container className='pt-md-5 pt-4 pb-md-5 pb-4'>
                <Row className='pt-5'>
                    <Col lg={8} className='col-12'>
                        <div className='row'>
                            <Col lg={3} className='col-6'>
                                <ul className='list-unstyled'>
                                    <li><a href='' className='text-uppercase ff_neue_medium fw-medium fs_12 text-white pb-4 d-inline-block'>how we help</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Drive More Awareness </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Get more Customers </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Build Your Brand </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Improve your reputation </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Track Results</a></li>
                                </ul>
                            </Col>
                            <Col lg={3} className='col-6'>
                                <ul className='list-unstyled'>
                                    <li><a href='' className='text-uppercase ff_neue_medium fw-medium fs_12 text-white pb-4 d-inline-block'>wh0 we help</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Digital Advertising </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Search Engine Ranking</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Content Marketing</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Programic Advertising</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Email Marketing</a></li>
                                </ul>
                            </Col>
                            <Col lg={3} className='col-6'>
                                <ul className='list-unstyled m-0 p-0'>
                                    <li><a href='' className='text-uppercase ff_neue_medium fw-medium fs_12 text-white pb-4 d-inline-block'>why venveo</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>About Us</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Careers </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Growth Studies</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Improve your reputation </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Testimonials</a></li>
                                </ul>
                            </Col>
                            <Col lg={3} className='col-6'>
                                <ul className='list-unstyled'>
                                    <li><a href='' className='text-uppercase ff_neue_medium fw-medium fs_12 text-white pb-4 d-inline-block'>resources</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Articles </a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'> News</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Webinars</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>eBooks</a></li>
                                    <li><a href='' className='ff_maisonlighter fw-lighter fs_15 text-white text-capitalize mb-2 d-inline-block position-relative footer_line'>Podcast</a></li>
                                </ul>
                            </Col>
                        </div>
                    </Col>
                    <Col lg={4} className='col-12'>
                        <p className='m-0 fs_30 ff_maisonlight fw-light text-white text-nowrap'>Get weekly data — insights.</p>
                        <div className='analyze_email d-flex align-items-center justify-content-center mt-4'>
                            <input className='analyze_input' type="text" placeholder='Enter Your Email' />
                            <div className='cursor_pointer'>
                                <button className='analyze_btn ff_neue_semibold text_green fs_15 text-nowrap'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='pt-4'>
                <Row className=''>
                    <Col lg={4} className='col-12 col-md-6 d-flex justify-content-lg-center align-content-lg-center align-items-start flex-column pt-lg-4'>
                        <p className='ff_neue_regular fs_13 fw-normal text-white lh_125 m-0'>Venveo is an award-winning digital marketing </p>
                        <p className='ff_neue_regular fs_13 fw-normal text-white lh_125 m-0'>solutions provider. Since 2003. </p>
                        <p className='ff_neue_regular fs_13 fw-normal text-white lh_125 m-0'>©2023 Venveo</p>
                    </Col>
                    <Col lg={4} className="col-12 col-md-6 d-flex justify-content-lg-center flex-column pt-4 pt-md-0">
                        <div className='d-flex gap-4'>
                            <ul className='list-unstyled m-0 p-0'>
                                <li className='ff_neue_medium fs_12 text-white lh_100 text-uppercase'>Visit</li>
                                <li className='fs_13 fw-normal ff_neue_regular text-white pt-4'>100 N Main Street <span className='d-block'>#201</span> <span className='d-block'>Blacksburg, VA 24060</span></li>
                            </ul>
                            <ul className='list-unstyled m-0 p-0'>
                                <li className='ff_neue_medium fs_12 text-white lh_100 text-uppercase'>contact</li>
                                <li className='position-relative'><a href="https://www.google.com/maps/place/100+N+Main+St+%23201,+Blacksburg,+VA+24060,+USA/@37.2295101,-80.4139482,17z/data=!3m1!4b1!4m6!3m5!1s0x884d9574c4a3c95b:0x57c47fc09b8eedc0!8m2!3d37.2295101!4d-80.4139482!16s%2Fg%2F11nssw2hr_?entry=ttu" target='blank' className='fs_13 fw-normal ff_neue_regular text-white pt-4 d-inline-block cursor_pointer'><span className='position-absolute footer_greenline'>info@venveo.com</span></a></li>
                                <li className='position-relative'><a href="tel: 1 · 800 · 123 · 4567" className='fs_13 fw-normal ff_neue_regular text-white pt-3 cursor_pointer pt-4 mt-2 d-inline-block'><span className='position-absolute footer_greenline text-nowrap'>1· 800· 123· 4567</span></a></li>

                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} className='col-mdsw-6 col-12 d-flex justify-content-center flex-column'>
                        <div className='d-flex justify-content-lg-end gap-5'>
                            <p className='fs_13 ff_neue_regular fw-regular text-capitalize text-white m-0'>All Rights Reserved</p>
                            <p className='fs_13 ff_neue_regular fw-regular text-capitalize text-white m-0'>Privacy Policy</p>
                        </div>
                        <div className='d-flex justify-content-lg-end  gap_34 pt-4'>
                            <div className='footericon position-relative'>
                                <Facebook />
                            </div>
                            <div className='footericon position-relative'>
                                <Instagram />
                            </div>
                            <div className='footericon position-relative'>
                                <Twitter />
                            </div>
                            <div className='footericon position-relative'>
                                <In />
                            </div>
                            <div className='footericon position-relative'>
                                <Youtube />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer
