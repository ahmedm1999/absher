import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home--page">
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <Link className="home--page__block" to="/individuals">
                            <Card style={{ width: '17rem' }}>
                                <header className="card-header shadow-sm">
                                    <Card.Img variant="top" src="images/individual.png" />
                                </header>
                                <Card.Body >
                                    <Card.Title className="shadow-sm">
                                        <p class="ar">أفراد</p>
                                        <p>Individuals</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <b>خدمات إلكترونية متكاملة</b>
                                        <b>Integrated eServices</b>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={6} sm={12}>
                        <Link className="home--page__block blue-block flex-start" to="/business">
                            <Card style={{ width: '17rem' }}>
                                <header className="card-header shadow-sm">
                                    <Card.Img variant="top" src="images/business.png" />
                                </header>
                                <Card.Body >
                                    <Card.Title className="shadow-sm">
                                        <p class="ar">أعمال</p>
                                        <p>Business</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <b class="ar">خدمات مؤسستك بين يديك</b>
                                        <b>Establishments eServices</b>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
