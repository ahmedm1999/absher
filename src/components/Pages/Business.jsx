import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import VideoModal from '../blocks/VideoModal';
import LoginForm from '../blocks/LoginForm';
import BusinessLoginForm from '../blocks/BusinessLoginForm';

function Business() {
    return (
        <Container fluid className="business-page">
            <Container>
                <Row>
                    <Col md={12} lg={3} className="business-page__main-container">
                        {/* Right */}
                        <BusinessLoginForm />
                    </Col>
                    <Col md={12} lg={9} className="business-page__main-container">
                        {/* Left */}
                        <Container className="p-0">
                            <Row>
                                <Col md={12} className="cover-image">
                                    <Link to="/business">
                                        <img src="/images/desktop-ar (1).jpg" />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>

                                <Col md={12} lg={6} className="mt-3">
                                    <VideoModal />
                                </Col>
                                <Col md={12} lg={6} className="mt-3">
                                    <div className="main-card shadow-sm border shadow-sm">
                                        <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                            <img className="main-car__header_icon ms-2 " src="/images/service.png" width="20" height="20" />
                                            <p>عن أبشر أعمال</p>
                                        </header>
                                        <div className="main-card__body p-2">
                                            <img src="/images/AbsherBus-ads_ar.jpg" alt="img" className="w-100" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Business
