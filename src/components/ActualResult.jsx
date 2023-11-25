import React from 'react'
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blueshirtman from '../assets/images/png/blue-shirt-man (1).webp';
import { Playbtn, Hpsvg, BtnSliderNext, BtnSliderpre } from './Iconimg';
import Actualline from '../assets/images/png/actual-line.png';
import Actualsliderimg2 from '../assets/images/png/actual-slider-img-2.webp';
const Results = () => {
  const settings1 = {
    centerPadding: "60px",
    centermode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider1 = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='actual_bg_img position-relative pb-5 pt-5 mt-lg-4 mb-5 position-relative'>
      <img src={Actualline} alt="Actualline" className='position-absolute start-0 bottom-0 mb_2 w-100' />
      <Container fluid className='pt-lg-4 pe-0 ps-0'>
        <h3 className='mb-0 ff_maisonlight fw-light fs_30 text-white text-center' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">Actual businesses.</h3>
        <h2 className='mb-0 ff_sohne fw-bold fs_80 text-white text-center' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">Actual results.</h2>
        <p className='mb-0 ff_neue_regular fw-normal fs_15 text-white text-center pt-3 pt-lg-4 pb-5' data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">Businesses trust Venveo to power grow.</p>
        <Slider ref={slider1} {...settings}>
          <div>
            <Slider {...settings1}>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative '>
                  <img src={Actualsliderimg2} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
              <p className='mb-0 ff_maisonlight fw-light fs_30 text-black mw-640 text-white text-center pt-md-5 pt-3' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
              <p className='mb-0 text-center text-white ff_neue_regular fw-normal fs_15 pt-5 mt-md-2' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">Jon Vaughan,<br />
                REGIONAL VP-SE AT US LBM</p>
              <div className='pt-3 pb-4' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <Hpsvg />
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings1}>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Actualsliderimg2} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
              <p className='mb-0 ff_maisonlight fw-light fs_30 text-black mw-640 text-white text-center pt-md-5 pt-3' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
              <p className='mb-0 text-center text-white ff_neue_regular fw-normal fs_15 pt-5 mt-md-2' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">Jon Vaughan,<br />
                REGIONAL VP-SE AT US LBM</p>
              <div className='pt-3 pb-4' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <Hpsvg />
              </div>
            </div>
          </div>
          <div>
            <Slider {...settings1}>
              <div className='d-flex align-items-center justify-content-center flex-column '>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Actualsliderimg2} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className='position-relative'>
                  <img src={Blueshirtman} alt="Blueshirtman" className='w-100' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" />
                  <div className='position-absolute bottom-0 end-0 p-3' data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <Playbtn />
                  </div>
                </div>
              </div>
            </Slider>
            <div className='d-flex align-items-center justify-content-center flex-column pt-3'>
              <p className='mb-0 ff_maisonlight fw-light fs_30 text-black mw-640 text-white text-center pt-md-5 pt-3' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
              <p className='mb-0 text-center text-white ff_neue_regular fw-normal fs_15 pt-5 mt-md-2' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">Jon Vaughan,<br />
                REGIONAL VP-SE AT US LBM</p>
              <div className='pt-3 pb-4' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <Hpsvg />
              </div>
            </div>
          </div>
        </Slider>
      </Container>
      <div onClick={() => slider1?.current?.slickPrev()} className='cursor_pointer position-absolute pre_btn d-md-block d-none'>
        <BtnSliderpre />
      </div>
      <div onClick={() => slider1?.current?.slickNext()} className='cursor_pointer position-absolute next_btn d-md-block d-none'>
        <BtnSliderNext />
      </div>
    </div>
  )
}
export default Results;
