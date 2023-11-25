import React from "react";
import GrowthVideo from "../assets/video/GrowthPartnerVideo.mov";
import EarthVideo from "../assets/video/EarthVideo.mp4";
import ProjectVideo from "../assets/video/ProjectRadar.mp4";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Subscribe } from "./Iconimg";
import HomeImg from "../assets/images/png/HomeImg.png";
import AIA from "../assets/images/png/AIA.png";
import Lowes from "../assets/images/png/LowesImg.png";
import Risinger from "../assets/images/png/Risinger.png";
import Houzz from "../assets/images/png/Houzz.png";
import CardImg from "../assets/images/png/CardImg.png";
import { Card_arrow } from "./Iconimg";
import logoipsum from "../assets/images/png/LogoIpsum.png";
import { ProjectBtn_arrow } from "./Iconimg";
import MapImg from "../assets/images/png/MapImg.png";
import DotImg from "../assets/images/png/DotImg.png";
import NavTabRedLine from "../assets/images/png/NavTabbRedLine.png";
import Growthline1 from '../assets/images/png/growthline-1.png';
import Growthline2 from '../assets/images/png/growthline-2.png';
import Redcircle from '../assets/images/png/redcircle_hover.png';

const GrowthPartner = () => {
    return (
        <div className="position-relative pb-5">
            <img src={Growthline1} alt="Growthline1" className="position-absolute bottom_4 start-0 w-100" />
            <img src={Growthline2} alt="Growthline1" className="position-absolute bottom-0 start-0 w-100" />
            <h2 className="ff_shone fw-bold fs_80 text-black text-center mb-0 text-uppercase mt-lg-5 pt-5" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                The growth partner{" "}
            </h2>
            <p className="ff_maisonlight fw-light fs_30 text-center mb-0 pb-lg-4 pb-3" data-aos="fade-down">
                you’ve been looking for.
            </p>
            <p className="ff-mainnormal fw-normal fs_15 text-center text-black pb-lg-5 pb-3" data-aos="fade-down">
                Businesses trust Venveo to power grow.
            </p>
            <Container>
                <ul
                    className="nav nav-pills mb-3 d-flex justify-content-center"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active position-relative"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <p className="fs_18 fw-semibold ff_neue_semibold mb-0 pb-2" data-aos="fade-down">
                                Industry Expertise
                            </p>
                            <img
                                src={NavTabRedLine}
                                alt="NavTabRedLine"
                                className="position-absolute bottom-0 start-0 w-100 end-0"
                            />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link position-relative"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                        >
                            <p className="fs_18 fw-semibold ff_neue_semibold mb-0 pb-2" data-aos="fade-down">
                                ROI Focused
                            </p>
                            <img
                                src={NavTabRedLine}
                                alt="NavTabRedLine"
                                className="position-absolute bottom-0 start-0 w-100 end-0"
                            />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link position-relative"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            <p className="fs_18 fw-semibold ff_neue_semibold mb-0 pb-3" data-aos="fade-down">
                                Proprietary TechnologyContact
                            </p>
                            <img
                                src={NavTabRedLine}
                                alt="NavTabRedLine"
                                className="position-absolute bottom-0 start-0 w-100 end-0"
                            />
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent" data-aos="zoom-in-up">
                    <div
                        className="tab-pane fade show active position-relative layer overflow-x-hidden"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                    >
                        <video
                            loop
                            autoPlay
                            muted
                            src={GrowthVideo}
                            className="bg_growthvideo"
                        />
                        <Row className="position-absolute z-2 top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center px-4 pt-4">
                            <Col
                                lg={5}
                                className="mb-4 mb-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center justify-content-lg-start"
                            >
                                <h3 className="text-white fs_50 text-lg-start text-center fw-bold text-uppercase ff_shone mb-0">
                                    the smartest <span className="d-lg-block">minds in the</span>{" "}
                                    industry
                                </h3>
                                <p className="text-white fs_30 pb-4 mb-0 text-lg-start text-center">
                                    Answer our questions and listen to our answers.
                                </p>
                                <p className="ff-mainnormal fw-normal fs_15 word_wrap text-white lh_133 opacity_70 mb-0 mb-lg-2 pb-lg-5 pb-4 mw_360 text-lg-start text-center">
                                    This is placeholder but can add more the business of building,
                                    some epic fails (and how to avoid them) and everything
                                    building science.
                                </p>
                                <button className="Subscribe_btn">
                                    <div className="d-flex gap-2">
                                        <Subscribe />
                                        <p className="text-white mb-0 ff_neue_semibold fw-semibold fs_15">
                                            Subscribe to Podcast{" "}
                                            <span className="ff_neue_semibold fw-semibold fs_6">
                                                ▼
                                            </span>
                                        </p>
                                    </div>
                                </button>
                            </Col>
                            <Col lg={2} className="overflow-x-scroll Card_scroll">
                                <div className="d-flex align-items-center justify-content-center gap-5 flex-lg-column">
                                    <div className="position-relative p-2">
                                        <img src={Redcircle} alt="Redcircle" className="position-absolute red_circleline" />
                                        <img src={HomeImg} alt="HomeImg" />
                                    </div>
                                    <div className="position-relative p-2">
                                        <img src={Redcircle} alt="Redcircle" className="position-absolute red_circleline" />
                                        <img src={AIA} alt="AIA" />
                                    </div>
                                    <div className="position-relative p-2">
                                        <img src={Redcircle} alt="Redcircle" className="position-absolute red_circleline3" />
                                        <img src={Lowes} alt="Lowes" />
                                    </div>
                                    <div className="position-relative p-2">
                                        <img src={Redcircle} alt="Redcircle" className="position-absolute red_circleline4" />
                                        <img src={Risinger} alt="Risinger" />
                                    </div>
                            <div className="position-relative p-2">
                                        <img src={Redcircle} alt="Redcircle" className="position-absolute red_circleline4" />
                                        <img src={Houzz} alt="Houzz" />
                                    </div>
                                </div>
                            </Col>
                            <Col
                                lg={5}
                                className="overflow-y-scroll mh_551 Card_scroll d-flex flex-column align-items-center justify-content-center"
                            >
                                <div className="Interview_card">
                                    <img
                                        src={CardImg}
                                        alt="CardImg"
                                        className="w-100 rounded-4 mw_382"
                                    />
                                    <p className="ff_maisonlight fw-light text-black fs_30 mb-0 pb-2">
                                        Matt Risinger on How to Develop Lasting Relationships with
                                        Builders
                                    </p>
                                    <p className=" text-black ff-mainnormal fw-normal fs_15 pb-4 ">
                                        Chief Builder of Rising Build and founder of the{" "}
                                        <span className=" text-decoration-underline">
                                            Build Show Network
                                        </span>
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className="text-black ff_neue_semibold fw-semibold fs_15 text-capitalize mb-0">
                                            Listen to Interview
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                                <div className="Interview_card my-4 d-none d-sm-block">
                                    <img
                                        src={CardImg}
                                        alt="CardImg"
                                        className="w-100 rounded-4"
                                    />
                                    <p className="ff_maisonlight fw-light text-black fs_30 mb-0 pb-2">
                                        Matt Risinger on How to Develop Lasting Relationships with
                                        Builders
                                    </p>
                                    <p className=" text-black ff-mainnormal fw-normal fs_15 pb-4 ">
                                        Chief Builder of Rising Build and founder of the{" "}
                                        <span className=" text-decoration-underline">
                                            Build Show Network
                                        </span>
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className=" text-black ff_neue_semibold fw-semibold fs_15 text-capitalize mb-0">
                                            Listen to Interview
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                                <div className="Interview_card d-none d-sm-block">
                                    <img
                                        src={CardImg}
                                        alt="CardImg"
                                        className="w-100 rounded-4"
                                    />
                                    <p className="ff_maisonlight fw-light text-black fs_30 mb-0 pb-2">
                                        Matt Risinger on How to Develop Lasting Relationships with
                                        Builders
                                    </p>
                                    <p className=" text-black ff-mainnormal fw-normal fs_15 pb-4 ">
                                        Chief Builder of Rising Build and founder of the{" "}
                                        <span className=" text-decoration-underline">
                                            Build Show Network
                                        </span>
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className=" text-black ff_neue_semibold fw-semibold fs_15 text-capitalize mb-0">
                                            Listen to Interview
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div
                        className="tab-pane fade overflow-x-hidden background_circle position-relative"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex="0"
                    >
                        <video
                            loop
                            autoPlay
                            muted
                            src={EarthVideo}
                            className="EarthVideo"
                        />
                        <Row className="position-absolute z-2 top-0 start-0 end-0">
                            <h2 className="text-white text-uppercase ff_shone fw-bold fs_80 pt-5 ps-5 mb-0">
                                Proven Results
                            </h2>
                            <p className="text-white ps-5 mb-0 ff_maisonlight fw-light fs_30">
                                Not hopes and prayers.
                            </p>
                        </Row>
                    </div>
                    <div
                        className="tab-pane fade overflow-x-hidden position-relative"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex="0"
                    >
                        <video
                            loop
                            autoPlay
                            muted
                            src={ProjectVideo}
                            className="bg_growthvideo"
                        />
                        <Row className="position-absolute z-2 top-0 start-0 end-0 justify-content-between">
                            <Col lg={5} className="col-12">
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="mb-sm-5 mb-3">
                                        <h2 className="text-white text-uppercase ff_shone fw-bold fs_80 pt-5 ps-5 mb-0">
                                            Project radar
                                        </h2>
                                        <img src={logoipsum} alt="logoipsum" className="ps-5" />
                                    </div>
                                    <div className="pt-xxl-5">
                                        <p className="ff_maisonlight fw-light fs_30 text-white ps-5 mb-0 mw_392">
                                            Lorem ipsum what this product actually does.
                                        </p>
                                        <p className="text-white ps-5 mb-0 ff-mainnormal fw-normal letter_Spacing3 mw_461">
                                            This is placeholder but can add more the business of
                                            building, some epic fails (and how to avoid them) and
                                            everything building science.
                                        </p>
                                        <button className="Project_btn ms-5 gap-2 mt-sm-5 mt-4">
                                            <div className="d-flex align-items-center">
                                                <p className="fs_15 mb-0 ff_neue_semibold fw-semibold text-black pe-3">
                                                    Call to Action Somewhere
                                                </p>
                                                <ProjectBtn_arrow />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} className="text-end my-auto d-lg-block d-none">
                                <img src={DotImg} alt="DotImg" />
                            </Col>
                            <Col
                                lg={5}
                                className="pt-sm-5 col-12 pt-0 overflow-y-scroll mh_551 Card_scroll d-flex flex-column justify-content-center align-items-center gap-5 mt-md-5 mt-3 mt-xl-0"
                            >
                                <div className="project_card ">
                                    <img
                                        src={MapImg}
                                        alt="MapImg"
                                        className="w-100 border_r_24 pb-3"
                                    />
                                    <p className="pt-4 text-black fs_30 ff_maisonlight fw-light mb-0 pb-4 lh_normal">
                                        Feature goes here one particular feature can go here of
                                        course
                                    </p>
                                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                                        Secondary line to describe what this is in further detail of
                                        course
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className="mb-0 fw-semibold ff_neue_semibold fs_15 text-black text-capitalize">
                                            Learn more
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                                <div className="project_card ">
                                    <img
                                        src={MapImg}
                                        alt="MapImg"
                                        className="w-100 border_r_24 pb-3"
                                    />
                                    <p className="pt-4 text-black fs_30 ff_maisonlight fw-light mb-0 pb-4 lh_normal">
                                        Feature goes here one particular feature can go here of
                                        course
                                    </p>
                                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                                        Secondary line to describe what this is in further detail of
                                        course
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className="mb-0 fw-semibold ff_neue_semibold fs_15text-black text-capitalize">
                                            Learn more
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                                <div className="project_card">
                                    <img
                                        src={MapImg}
                                        alt="MapImg"
                                        className="w-100 border_r_24 pb-3"
                                    />
                                    <p className="pt-4 text-black fs_30 ff_maisonlight fw-light mb-0 pb-4 lh_normal">
                                        Feature goes here one particular feature can go here of
                                        course
                                    </p>
                                    <p className=" text-black lh_normal ff-mainnormal fw-normal mb-0 pb-4">
                                        Secondary line to describe what this is in further detail of
                                        course
                                    </p>
                                    <div className="d-flex align-items-center gap-2">
                                        <p className="mb-0 fw-semibold ff_neue_semibold fs_15 text-black text-capitalize">
                                            Learn more
                                        </p>
                                        <Card_arrow />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default GrowthPartner;
