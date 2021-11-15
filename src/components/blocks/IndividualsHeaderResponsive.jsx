import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function IndividualsHeaderResponsive() {
    return (
        <Container fluid className="indi-header-resp pt-2 shadow mb-3">
            <Container className="d-flex justify-content-between align-items-center p-0">
                <div className="right">
                    <div className="right-logo-container">
                        <img src="/images/absher-logo-print.png" width="46" height="46" className="ms-2" />
                        <img src="/images/vission-logo.png" width="46" height="46" />
                    </div>
                    <div className="header-links-container">
                        <ul className="header-block__links d-flex">
                            <li className="header-block__links__link">
                                <button className="header-block__links__link__btn p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/marked-book.png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-0">دليل الخدمات</p>
                                    </div>
                                </button>
                            </li>
                            <li className="header-block__links__link me-1">
                                <button className="header-block__links__link__btn p-1">
                                    <div>
                                        <div className="m-0">
                                            <img src="/images/language.png" width="27" className="header-block__links__link__btn__header__img" />
                                        </div>
                                        <p className="m-0 mt-1">English</p>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*  */}
                <div className="right-logo-container">
                    <img src="/images/moi_logo.jpg" width="46" height="46" />
                </div>
            </Container>
        </Container>
    )
}

export default IndividualsHeaderResponsive
