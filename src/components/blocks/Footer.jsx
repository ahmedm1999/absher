import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {

    const [showResponsive, setShowResponsive] = useState(window.innerWidth <= 990 ? true : false);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 990) {
            setShowResponsive(true);
        } else {
            setShowResponsive(false);
        }
    })

    return (
        <Container fluid className={`footer-block mt-5 ${showResponsive && "text-center"}`}>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <div className="footer-block__container pt-3">
                            <small className="footer-txt">جميع الحقوق محفوظة لأبشر، المملكة العربية السعودية © 1443هـ - 2021م.</small>
                        </div>
                    </Col>

                    <Col sm={12} md={6}>
                        <div className="footer-block__container pt-3">
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <header>
                                            روابط
                                        </header>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={4}>
                                        <ul className="footer-block__links">
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    عن أبشر
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    الاخبار
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    شروط الاستخدام
                                                </Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <ul className="footer-block__links">
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    مركز التسجيل و التفعيل
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    دليل المستخدم
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    الأسئلة الشائعة
                                                </Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <ul className="footer-block__links">
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    الاتصال االتسويقي
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/individuals" className="footer-link footer-txt">
                                                    سياسة الخصوصية
                                                </Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Col>

                    <Col sm={12} md={3}>
                        <div className="footer-block__container d-flex justify-content-center align-items-strech text-center">
                            <div className="p-3 pb-0">
                                <img src="/images/ios-logo.png" alt="ios" className="mb-1" />
                                <img src="/images/android-logo.png" alt="ios" className="mb-1" />
                                <img src="/images/ios-logo.png" alt="ios" className="mb-1" />
                            </div>
                            {
                                !showResponsive && <div className="footer-logo">
                                    <img src="/images/business-hover.png" width="100" />
                                    <p className="m-0">
                                        920020405
                                    </p>
                                </div>
                            }
                        </div>
                        {
                            showResponsive && <div className="footer-block__container d-flex justify-content-center align-items-strech text-center">
                                <div className="footer-logo-resp">
                                    <img src="/images/business-hover.png" width="100" />
                                    <p className="m-0">
                                        920020405
                                    </p>
                                </div>
                            </div>
                        }

                    </Col>
                    <Col md={12} className="border-top p-2 mt-5">
                        <div className="text-center footer-footer-txt">
                            تطوير و تشغيل مركز المعلومات الوطني
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
