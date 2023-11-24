import React from 'react';
import { Container } from 'react-bootstrap';
import { Readyarrow } from './Iconimg';

function ReadyGoals() {
    return (
        <div className='goals_bg_img mt-5'>
            <Container className='pt-5 pb-5'>
                <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center gap-lg-5 gap-4 pt-4 pb-4'>
                    <p className='ff_maisonlight fs_40 fw-lighter text-white m-0 text-nowrap' data-aos="fade-right">Ready to hit your goals?</p>
                    <div className='book_btn d-flex justify-content-center align-items-center gap-2 cursor_pointer' data-aos="fade-left">
                        <p className='ff_neue_semibold text-black fs_15 fw-semibold m-0 text-nowrap'>Book a Strategy Call</p>
                        <Readyarrow />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default ReadyGoals
