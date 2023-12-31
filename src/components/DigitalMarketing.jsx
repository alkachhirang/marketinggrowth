import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fourdots } from './Iconimg';
import { Rightarrow } from './Iconimg';
import { Stair } from './Iconimg';
import { Card3 } from './Iconimg';
import { Card4 } from './Iconimg';
import Greenline from '../assets/images/png/digital-greenline.png';

function DigitalMarketing() {
    return (
        <div className='pt-md-5 mt-5 position-relative pb-md-5 mb-5'>
            <img src={Greenline} alt="Greenline" className='position-absolute start-0 end-0 w-100 top_30' />
            <Container>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='ff_maisonlight fw-lighter fs_30 text-black m-0 text-center pb-1' data-aos="fade-down">Problems we solve.</h2>
                    <p className='m-0 fw-bold ff_shone fs_80 text-black mw_500 text-center lh_100 text-uppercase pb-4' data-aos="fade-down">Digital Marketing for today’s Business</p>
                    <p className='m-0 ff_neue_regular fw-regular fs_15 text-black text-center mw_641 ls_2' data-aos="fade-down">We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.</p>
                </div>
                <Row className='pt-5 mt-lg-5 position-relative z-2'>
                    <Col lg={6} className='col-12 d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4' data-aos="fade-up-right">
                        <div className='digital-card'>
                            <div className='d-sm-flex gap-3 digitalcard'>
                                <div className="mb-3">
                                    <Fourdots />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff_maisonlight fs_30 fw-normal lh-normal text-black lh-1 pt-1 pb-1'>My website isn’t getting enough traffic</p>
                                    <p className='mb-0 ff_neue_regular fs_15 fw-normal text-black mw_330 ls_2'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Boost your presence in search results</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Capture targeted site traffic</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Turn site visitors into customers</li>
                                    </ul>
                                    <button className='btn-exploreseo ff_neue_semibold fs_15 fw-semibold text-black mt-2'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='col-12 d-flex align-items-center justify-content-lg-start justify-content-center pe-lg-4 pt-5 pt-lg-0' data-aos="fade-up-right">
                        <div className='digital-card'>
                            <div className='d-sm-flex gap-3 digitalcard'>
                                <div className='mb-3'>
                                    <Stair />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff_maisonlight fs_30 fw-normal lh-normal text-black lh-1'>My CPL from digital ad campaigns is too high</p>
                                    <p className='mb-0 ff_neue_regular fs_15 fw-normal text-black mw_330 ls_2'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Refine ad targeting</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Engage your audience where they browse</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Maximize paid ad budget</li>
                                    </ul>
                                    <button className='btn-exploreseo ff_neue_semibold fs_15 fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='col-12 d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4 pt-5' data-aos="fade-up-left">
                        <div className='digital-card'>
                            <div className='d-sm-flex gap-3 digitalcard'>
                                <div className='mb-3'>
                                    <Card3 />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff_maisonlight fs_30 fw-normal lh-normal text-black mw_315 lh-1'>My website isn’t generating enough leads</p>
                                    <p className='mb-0 ff_neue_regular fs_15 fw-normal text-black mw_330 ls_2'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Fill up your lead pipeline </li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Reach your most valuable audience</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Maximize conversion opportunities</li>
                                    </ul>
                                    <button className='btn-exploreseo ff_neue_semibold fs_15 fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='col-12 d-flex align-items-center justify-content-lg-start justify-content-center pe-lg-4 pt-5' data-aos="fade-up-left">
                        <div className='digital-card'>
                            <div className='d-sm-flex gap-3 digitalcard'>
                                <div className='mb-3'>
                                    <Card4 />
                                </div>
                                <div className='d-flex flex-column gap-3 align-items-start'>
                                    <p className='mb-0 ff_maisonlight fs_30 fw-normal lh-normal text-black lh-1'>My marketing and sales data is disconnected</p>
                                    <p className='mb-0 ff_neue_regular fs_15 fw-normal text-black mw_330 ls_2'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <ul className='mb-0'>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Unify sales and marketing data</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Prioritize leads with data-backed insights leads</li>
                                        <li className='ff_neue_semibold fs_15 fw-semibold text-black'>Turn opportunities into closed deals</li>
                                    </ul>
                                    <button className='btn-exploreseo ff_neue_semibold fs_15 fw-semibold text-black'>Explore SEO Services <Rightarrow /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DigitalMarketing
