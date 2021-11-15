import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel';
// import Item from "./Item";
import { Link } from 'react-router-dom'
import Header from '../blocks/IndividualsHeader'
import HorizantalSmallCardBlock from '../blocks/HorizantalSmallCardBlock';
import LoginForm from '../blocks/LoginForm';
import Slider from '../blocks/Slider';
import SmallCardBlock from '../blocks/SmallCardBlock';

function Individuals() {
    const [loginShowResponsive, setLoginShowResponsive] = useState(window.innerWidth <= 990 ? true : false);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 990) {
            setLoginShowResponsive(true);
        } else {
            setLoginShowResponsive(false);
        }
    })


    const item = [
        { id: 1, title: "التحقق من فاتورة ضمن مبادرة فرجت", icon: "/images/02.jpg" }
    ]
    return (
        <Container className="individuals-page pt-0">
            <Container fluid>
                <Row >
                    <Col md={12} lg={3} className="individuals-page__main-block p-0">
                        {/* RIGHT SIDE */}
                        {
                            !loginShowResponsive && <LoginForm />
                        }
                    </Col>
                    <Col md={12} lg={9} className="individuals-page__main-block p-0 pe-0">
                        {/* LEFT SIDE */}
                        <Container fluid className="p-0">
                            <Row>
                                <Col md={12} className="cover-image">
                                    <Link to="/individuals">
                                        <img src="/images/desktop-ar.jpg" />
                                    </Link>
                                </Col>
                                {
                                    loginShowResponsive && <Col md={12} className="mt-5">
                                        <LoginForm />
                                    </Col>
                                }
                                <Col md={12} lg={8} className="mt-3">
                                    <Container fluid className="p-0">
                                        <Row className="align-items-strech">
                                            <Col md={12} lg={8} className="mb-2">
                                                <div className="individuals-page__main-block__card">
                                                    {/* CARD CODE HERE */}
                                                    <div className="main-card shadow-sm border__">
                                                        <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                                            <img className="main-car__header_icon ms-2 " src="/images/service.png" width="20" height="20" />
                                                            <p className="mb-0">الخدمات الاستعلامية</p>
                                                        </header>
                                                        <div className="main-card__body p-2">
                                                            <Slider dots={false} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={12} lg={4}>
                                                <div className="main-card shadow-sm border__">
                                                    <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                                        <img className="main-car__header_icon ms-2 " src="/images/plane.png" width="20" height="20" />
                                                        <p>منصة قدوم</p>
                                                    </header>
                                                    <div className="main-card__body p-2">
                                                        <Link className="small-card link shadow-sm m-2 p-2" to="#">
                                                            <header className="text-center">
                                                                <img src="/images/plane.png" className="small-card__img" width="20" height="20" />
                                                            </header>
                                                            <p className="small-card__title text-center m-0 mt-2 w-100 mt-2">الدخول الى منصة القدوم</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col md={12} lg={4} className="mt-3 mb-2">
                                    <div className="main-card shadow-sm border__">
                                        <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                            <img className="main-car__header_icon ms-2 " src="/images/calendar.png" width="20" height="20" />
                                            <p>المواعيد</p>
                                        </header>
                                        <div className="main-card__body p-2 d-flex justify-content-center">
                                            <Link className="small-card link shadow-sm m-2 p-2 w-100" to="#">
                                                <header className="text-center">
                                                    <img src="/images/ahwal.png" className="small-card__img" width="40" height="40" />
                                                </header>
                                                <p className="small-card__title text-center m-0 w-100 m-0">الدخول الى منصة القدوم</p>
                                            </Link>
                                            <Link className="small-card link shadow-sm m-2 p-2 w-100" to="#">
                                                <header className="text-center">
                                                    <img src="/images/Jawazat.png" className="small-card__img" width="40" height="40" />
                                                </header>
                                                <p className="small-card__title text-center w-100 m-0">الدخول الى منصة القدوم</p>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={8} className="mt-3">
                                    <div className="main-card shadow-sm border__">
                                        <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                            <img className="main-car__header_icon ms-2 " src="/images/news.png" width="20" height="20" />
                                            <p>الاخبار</p>
                                        </header>
                                        <div className="main-card__body p-2 d-flex justify-content-center">
                                            <Container className="pe-1">
                                                <Row>
                                                    <Col md={12} lg={6} >
                                                        <HorizantalSmallCardBlock item={item[0]} />
                                                    </Col>
                                                    <Col md={12} lg={6}>
                                                        <HorizantalSmallCardBlock item={item[0]} />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} lg={4} className="mt-3 mb-2">
                                    <div className="main-card shadow-sm border__">
                                        <header className="main-card__header d-flex align-items-center border-bottom p-2">
                                            <img className="main-car__header_icon ms-2 " src="/images/app.png" width="20" height="20" />
                                            <p>الاعلانات</p>
                                        </header>
                                        <div className="main-card__body p-2 d-flex justify-content-center">
                                            <Link className="small-card link shadow-sm m-2 w-100" to="#">
                                                <img src="/images/ads.jpg" className="small-card__img" style={{ maxWidth: "100%", width: "100%" }} />
                                            </Link>
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

export default Individuals
