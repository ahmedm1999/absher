import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

function BusinessHeader() {
    return (
        <Container fluid className="header-block shadow sticky-top mb-4">
            <Container>

                <Row className="row">
                    <Col xs={3} lg={3} md={3} >
                        <div className="right-logo-container">
                            <img src="/images/business-og.png" className="ms-2" />
                        </div>
                    </Col>
                    <Col xs={6} md={7} lg={7} className="p-0">
                        <ul className="header-block__links d-flex">
                            <li className="header-block__links__link">
                                <button className="header-block__links__link__btn header-block__links__link__btn__business  p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/marked-book (1).png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-4">دليل الخدمات</p>
                                    </div>
                                </button>
                            </li>
                            <li className="header-block__links__link me-1">
                                <button className="header-block__links__link__btn header-block__links__link__btn__business  p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/language-blue.png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-4">English</p>
                                    </div>
                                </button>
                            </li>
                            <li className="header-block__links__link header-block__links__link__btn__go-btn me-1">
                                <Link to="/individuals">
                                    <button className="header-block__links__link__btn  p-1">
                                        الانتقال الى ابشر الافراد
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default BusinessHeader
