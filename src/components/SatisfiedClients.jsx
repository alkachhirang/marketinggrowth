import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import skyunion from '../assets/images/png/sky-union.png';
import Greenimg from '../assets/images/png/green-imgbox.png';
import Yellowimg from '../assets/images/png/BgYellow.png';
import Abimg from '../assets/images/png/ab-img.png';
import Farnimg from '../assets/images/png/farn-img.png';
import Usimg from '../assets/images/png/us-img.png';
import Clientline from '../assets/images/png/client-redline.png';

import { Blackarrow } from "./Iconimg";

function SatisfiedClients() {
    return (
        <div className='pb-md-5 mb-5 overflow-x-hidden'>
            <Container fluid className='pt-md-5 mt-5 ps-lg-0 pe-lg-0'>
                <p className='m-0 fw-lighter fs_30 ff_maisonlight text-black text-center' data-aos="fade-down">Driving digital revenue for over</p>
                <p className='m-0 fw-bold fs_80 ff_shone text-black text-center' data-aos="fade-down"><span className='position-relative pb-2'>1,400 +
                    <img src={Clientline} alt="Clientline" className='position-absolute bottom-0 start-0 w-100' />
                </span> satisfied clients.</p>
                <Row className='pt-md-5 mt-4 align-items-center justify-content-center'>
                    <Col lg={4} className='col-md-6 col-10' data-aos="zoom-in">
                        <div className='bg_greenblue position-relative p-3 overflow-hidden cursor_pointer client_card'>
                            <img src={skyunion} alt="skyunion" className='w-100 hoverAnimation position-absolute z-1 bottom-0 end-0' />
                            <div className='white_card position-relative z-2'>
                                <div>
                                    <img src={Abimg} alt="Abimg" />
                                    <p className='fs_30 text-black ff_maisonlight mw_342 pt-4 m-0'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mw_342 m-0 ff_neue_regular fs_15 text-black pt-3 pb-md-4 pb-3'>Elevate your business with our top-tier services and tech</p>
                                    <p className='fs_18 ff_neue_semibold text-black pt-lg-5'>Learn more <Blackarrow /> </p>
                                </div>
                            </div>
                            <div className='pt-4 pb-3'>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>80%</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>2X</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0 '>520%</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Ad Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Web Traffic</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='col-md-6 col-10 pt-4 pt-md-0' data-aos="zoom-in">
                        <div className='bg_lightgreen position-relative p-3 overflow-hidden cursor_pointer client_card'>
                            <img src={Greenimg} alt="Greenimg" className='w-100 hoverAnimation position-absolute z-1 bottom-0 end-0' />
                            <div className='white_card position-relative z-2'>
                                <div>
                                    <img src={Farnimg} alt="Farnimg" />
                                    <p className='fs_30 text-black ff_maisonlight mw_342 pt-4 m-0'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mw_342 m-0 ff_neue_regular fs_15 text-black pt-3 pb-md-4 pb-3'>Elevate your business with our top-tier services and tech</p>
                                    <p className='fs_18 ff_neue_semibold text-black pt-lg-5'>Learn more <Blackarrow /> </p>
                                </div>
                            </div>
                            <div className='pt-4 pb-3'>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>80%</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>2X</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0 '>520%</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Ad Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Web Traffic</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='col-md-6 col-10 pt-4 pt-lg-0' data-aos="zoom-in">
                        <div className='bg_lightyellow position-relative p-3 overflow-hidden cursor_pointer client_card'>
                            <img src={Yellowimg} alt="Yellowimg" className='hoverAnimation w-100 position-absolute z-1 bottom-0 end-0' />
                            <div className='white_card position-relative z-2'>
                                <div>
                                    <img src={Usimg} alt="Usimg" />
                                    <p className='fs_30 text-black ff_maisonlight mw_342 pt-4 m-0'>Driving digital revenue for over 1,000+ satisfied clients.</p>
                                    <p className='mw_342 m-0 ff_neue_regular fs_15 text-black pt-3 pb-md-4 pb-3'>Elevate your business with our top-tier services and tech</p>
                                    <p className='fs_18 ff_neue_semibold text-black pt-lg-5'>Learn more <Blackarrow /> </p>
                                </div>
                            </div>
                            <div className='pt-4 pb-3'>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>80%</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0'>2X</p>
                                    <p className='fs_50 ff_shone text-black fw-bold m-0 '>520%</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-around position-relative z-2'>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Ad Leads</p>
                                    <p className='fs_16 ff_neue_regular text-black fw-regular m-0'>Web Traffic</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SatisfiedClients
