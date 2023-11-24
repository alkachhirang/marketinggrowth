import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Search } from './Iconimg';
import { Arrow } from './Iconimg';
import Blueline from '../assets/images/png/blueline.png';
import { Redcircle } from './Iconimg';
import Headervideo from '../assets/video/header_video.mp4';
import Greenline from '../assets/images/png/green_line.png';

const Header = () => {
    const [show, setShow] = useState(true);
    if (show === false) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }
    return (
        <div className='header_bg_img min-vh-100 position-relative bg_blue'>
            <div className='position-absolute end-0 start-0 bottom_6'>
                <img src={Blueline} alt="Blueline" className='w-100' />
            </div>
            <Container fluid className='d-flex justify-content-end p-0'>
                <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                    <li className='cursor_pointer position-relative'>
                        <div className='fs_15 fw-medium text-black ff_neue_medium dropdown_link text-nowrap'>How We Help <span className='fs_6 fw-medium'>▼</span> </div>
                        <div id="dropcontent" className="dropdown-box">
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                        </div></li>
                    <li className='cursor_pointer position-relative'>
                        <div className='fs_15 fw-medium text-black ff_neue_medium dropdown_link text-nowrap'>How We Help <span className='fs_6 fw-medium'>▼</span> </div>
                        <div id="dropcontent" className="dropdown-box">
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                        </div></li>
                    <li className='cursor_pointer position-relative'>
                        <div className='fs_15 fw-medium text-black ff_neue_medium dropdown_link text-nowrap'>Why Venveo<span className='fs_6 fw-medium'> ▼</span> </div>
                        <div id="dropcontent" className="dropdown-box">
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                        </div></li>
                    <li className='cursor_pointer position-relative'>
                        <div className='fs_15 fw-medium text-black ff_neue_medium dropdown_link text-nowrap'>Resources</div>
                        <div id="dropcontent" className="dropdown-box">
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                            <a href=""
                                className="mb-0 ff_neue_regular fs_13 fw-normal text-white d-flex align-items-center justify-content-center">More</a>
                        </div></li>
                </ul>
                <div onClick={() => setShow(!show)} className={`${show ? "" : "cross"} navline`}>
                    <span className='crl_1'></span>
                    <span className='crl_2'></span>
                    <span className='crl_3'></span>
                </div>
                <div className={`${show ? "bg-white d-flex align-items-center justify-content-center cursor_pointer ml_5" : "d_none bg-white d_flex align-items-center justify-content-center cursor_pointer ml_5"}`}>
                    <Search />
                </div>
                <div className={`${show ? "bg_green cursor_pointer px-4 py-3 d-flex align-items-center justify-content-center ml_5" : "d_none bg_green cursor_pointer px-4 py-3 d_flex align-items-center justify-content-center ml_5"}`}>
                    <a href='' className='text-black fs_15 ff_neue_semibold fw-semibold text-nowrap'>Let’s Talk
                        <Arrow />
                    </a>
                </div>

            </Container>

            <Container className='d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex align-items-center justify-content-center pt-5 mt-lg-5 mt-3 position-relative'>
                    <img src={Greenline} alt="Greenline" className='position-absolute green_line d-none d-lg-block' data-aos="fade-down" />
                    <h2 className='ff_shone fw-bold fs_120 text-white lh_86 mw_822 text-uppercase text-center' data-aos="fade-down">Make marketing
                        <span className='d-block'>a growth machine</span></h2>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center pt-lg-4 pt-2'>
                    <p className='mw_720 fs_24 text-white fw-lighter ff_maisonlight text-center m-0 lh_125 pb-4' data-aos="fade-down">We focus on results. Not just chatter. Elevate your business with our top-tier services and tech. Get a proposal now.</p>
                    <div className='analyze_email d-flex align-items-center justify-content-center' data-aos="fade-down">
                        <input className='analyze_input' type="text" placeholder='Enter Your Website' />
                        <div className='cursor_pointer'>
                            <button className='analyze_btn ff_neue_semibold text-white fs_15'>Analyze</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-md-5 mt-4 position-relative' data-aos="zoom-in" >
                    <Redcircle />
                    <video src={Headervideo} muted autoPlay loop className='mw_871 w-100 video_shadow' />
                </div>

            </Container>
        </div>
    )
}

export default Header;
