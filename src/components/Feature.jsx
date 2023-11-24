import React from 'react'
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assets/images/png/sliderimg1.png';
import img2 from '../assets/images/png/slider-img-2.png';
import img3 from '../assets/images/png/sliderimg3.png';
import img4 from '../assets/images/png/slider-img-4.png';
import img5 from '../assets/images/png/slider-img5.png';
import Blueline2 from '../assets/images/png/blueline-2.png';


function Feature() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplayspeed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='pt-5 mt-lg-5 position-relative'>
                <img src={Blueline2} alt="Blueline2" className='position-absolute w-100 bottom-0 end-0' />
            <Container className='pb-md-5 pb-4'>
                <h3 className='ff_neue_regular fs_15 text-black text-center ls_2 pb-5'>Featured in</h3>
                <Slider {...settings} className='pb-md-5 mb-5'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img2} alt="img2" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img3} alt="img3" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img4} alt="img4" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img5} alt="img5" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img2} alt="img2" />
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={img3} alt="img3" />
                    </div>

                </Slider>
            </Container>
        </div>
    )
}

export default Feature
