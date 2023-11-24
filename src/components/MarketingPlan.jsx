import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Marketingarrow from '../assets/images/png/marketing-arrow-img.svg';

function MarketingPlan() {
    return (
        <div className='marketingplan_bg_img pt-5 pb-5 mt-5'>
            <Container className='mt-3 mb-4'>
                <Row>
                    <Col lg={7} className='d-flex flex-column justify-content-lg-end justify-content-center position-relative' data-aos="fade-right">
                        <img src={Marketingarrow} alt="Marketingarrow" className='position-absolute arrowicon d-none d-xl-block arrow' />
                        <h4 className='ff_mono text-black fw-normal fs_15 m-0 text-lg-start text-center'>Get Your Custom Marketing Plan</h4>
                        <p className='ff_maisonlight fw-normal fs_40 text-black m-0 text-lg-start text-center'>Start earning more money now</p>
                    </Col>
                    <Col lg={5} className='d-flex flex-column justify-content-center align-items-center pt-sm-4 pt-3 pt-lg-0' data-aos="fade-left">
                        <div className='marketing_email d-flex align-items-center justify-content-center'>
                            <input className='marketing_input' type="text" placeholder='Enter Your Website' />
                            <div className='cursor_pointer'>
                                <button className='marketing_btn ff_neue_semibold text-black fs_15'>Submit</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MarketingPlan
