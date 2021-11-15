import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BusinessHeaderResponsive() {
    return (
        <Container fluid className="indi-header-resp pt-2 shadow mb-3">
            <Container className="d-flex justify-content-between align-items-center p-0">
                <div className="right">
                    <div className="right-logo-container">
                        <img src="/images/business-og.png" width="66" height="66" className="ms-2" />
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
                <div className="right-logo-container header-block__links__link__btn__go-btn mb-2 me-1">
                    <Link to="/individuals">
                        <button className="header-block__links__link__btn  p-1">
                            الانتقال الى ابشر الافراد
                        </button>
                    </Link>
                </div>
                {/*  */}
            </Container>
        </Container>
    )
}

export default BusinessHeaderResponsive
