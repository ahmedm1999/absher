import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Header(props) {
    
    return (
        <Container fluid className="header-block shadow sticky-top mb-4">
            <Container>

                <Row className="row">
                    <Col xs={3} lg={3} md={3} >
                        <div className="header-block__main-logo-container">
                            <div>
                                <img src="/images/absher-logo-print.png" width="70" height="90" />
                            </div>
                            <div className="vir-sep"></div>
                            <div className="me-1">
                                <img src="/images/vission-logo.png" width="120" height="80" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={7} lg={7} className="p-0">
                        <ul className="header-block__links d-flex">
                            <li className="header-block__links__link">
                                <button className="header-block__links__link__btn p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/marked-book.png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-4">دليل الخدمات</p>
                                    </div>
                                </button>
                            </li>
                            <li className="header-block__links__link me-1">
                                <button className="header-block__links__link__btn p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/language.png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-4">English</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={2} md={1} lg={2}>
                        <div className="secondary-logo-container m-0">
                            <img src="/images/moi_logo.jpg" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default Header
