import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import learnimg1 from '../assets/images/png/learnimg-1.png';
import learnimg2 from '../assets/images/png/learnimg-2.png';
import learnimg3 from '../assets/images/png/learnimg-3.png';
import { Readarrow } from './Iconimg';
import Learning from '../assets/images/png/learn-img.png';
import Redcircle from '../assets/images/png/red-circle.png';

function Learn() {
    return (
        <div className='pt-5'>
            <Container fluid className='pb-5 px-5'>
                <h4 className='fw-bold fs_80 ff_shone text-black text-black text-center m-0 pb-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-center">Learn from us.</h4>
                <p className='fs_15 fw-normal ff_neue_regular text-black text-center m-0 pb-4' data-aos="fade-up"
                    data-aos-anchor-placement="top-center">Digital marketing resources from Venveo to help you grow.</p>
                <div className='read_btn cursor_pointer d-flex justify-content-center mb-md-5 mb-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <p className='text-black fs_15 fw-semibold ff_neue_semibold'>See All<span className='ps-3'><Readarrow /></span></p>
                </div>
                <div className='position-relative'>
                    <img src={Redcircle} alt="Redcircle" className='position-absolute red_circleimg d-none d-md-block z-2' data-aos="fade-up"
                        data-aos-anchor-placement="top-center" />
                    <img src={Learning} alt="Learning" className='w-100 h_700 object_over z-1' data-aos="fade-up"
                        data-aos-anchor-placement="top-center" />
                    <div className='learning_card position-absolute m-sm-4 m-2 bottom-0 cursor_pointer'>
                        <p className='ff_neue_semibold fw-bold fs_15 text-uppercase text_sky m-0 pb-3 text-nowrap' data-aos="fade-up"
                            data-aos-anchor-placement="top-center">guides</p>
                        <p className='fw-lighter fs_30 text-black ff_maisonlight text-capitalize mw_383 m-0 pb-sm-3' data-aos="fade-up"
                            data-aos-anchor-placement="top-center">Marketing to Contractors and Installers:The Ultimate Guide</p>
                        <p className='ff_neue_regular fs_15 fw-normal text-black mw_334 pb-lg-4 m-0 pb-2' data-aos="fade-up"
                            data-aos-anchor-placement="top-center">Understanding the process and <span className='d-block'>maximize the opportunities</span></p>
                        <div className='read_btn cursor_pointer' data-aos="fade-up"
                            data-aos-anchor-placement="top-center">
                            <p className='text-black fs_15 fw-semibold ff_neue_semibold'>Read More<span className='ps-3'><Readarrow /></span></p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container fluid className=''>
                <Row className='justify-content-center'>
                    <Col lg={4} md={6} className='col-10 ps-lg-0 pe-lg-4'>
                        <div className='position-relative'>
                            <img src={learnimg1} alt="learnimg1" className='w-100' />
                            <div className='learning_card position-absolute m-sm-4 m_5 bottom-0 cursor_pointer'>
                                <p className='ff_neue_semibold fw-bold fs_15 text-uppercase text_sky m-0 pb-sm-3 text-nowrap' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">multi-channel marketing</p>
                                <p className='fw-lighter fs_30 text-black ff_maisonlight text-capitalize m-0 pb-sm-3' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">How to Get Your Product into Lowe’s</p>
                                <p className='ff_neue_regular fs_15 fw-normal text-black ls_2 pb-xl-5 m-0 pb-2' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">Understanding the process and maximize the opportunities</p>
                                <div className='read_btn cursor_pointer' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">
                                    <p className='text-black fs_15 fw-semibold ff_neue_semibold'>Read More<span className='ps-3'><Readarrow /></span></p>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='col-10 pt-4 pt-md-0 '>
                        <div className='position-relative'>
                            <img src={learnimg2} alt="learnimg2" className='w-100 h-100' data-aos="fade-up"
                                data-aos-anchor-placement="top-center" />
                            <div className='learning_card position-absolute m-sm-4 m_5 bottom-0 cursor_pointer'>
                                <p className='ff_neue_semibold fw-bold fs_15 text-uppercase text_sky m-0 pb-sm-3 text-nowrap' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">multi-channel marketing</p>
                                <p className='fw-lighter fs_30 text-black ff_maisonlight text-capitalize m-0 pb-sm-3' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">How to Get Your Product into Lowe’s</p>
                                <p className='ff_neue_regular fs_15 fw-normal text-black ls_2 pb-xl-5 m-0 pb-2' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">Understanding the process and maximize the opportunities</p>
                                <div className='read_btn cursor_pointer' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">
                                    <p className='text-black fs_15 fw-semibold ff_neue_semibold'>Read More<span className='ps-3'><Readarrow /></span></p>
                                </div>

                            </div>
                        </div>

                    </Col>
                    <Col lg={4} md={6} className='col-10 pe-lg-0 pt-4 pt-lg-0 ps-lg-4'>
                        <div className='position-relative'>
                            <img src={learnimg3} alt="learnimg3" className='w-100' data-aos="fade-up"
                                data-aos-anchor-placement="top-center" />
                            <div className='learning_card position-absolute m-sm-4 m_5 bottom-0 cursor_pointer'>
                                <p className='ff_neue_semibold fw-bold fs_15 text-uppercase text_sky m-0 pb-sm-3 text-nowrap' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">multi-channel marketing</p>
                                <p className='fw-lighter fs_30 text-black ff_maisonlight text-capitalize m-0 pb-sm-3' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">How to Get Your Product into Lowe’s</p>
                                <p className='ff_neue_regular fs_15 fw-normal text-black ls_2 pb-xl-5 m-0 pb-2' data-aos="fade-up"
                                    data-aos-anchor-placement="top-center">Understanding the process and maximize the opportunities</p>
                                <div className='read_btn cursor_pointer'>
                                    <p className='text-black fs_15 fw-semibold ff_neue_semibold' data-aos="fade-up"
                                        data-aos-anchor-placement="top-center">Read More<span className='ps-3'><Readarrow /></span></p>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Learn
