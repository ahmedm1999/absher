import Button from '@restart/ui/esm/Button';
import emailjs from "emailjs-com";
import React from 'react'
import { Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BusinessLoginForm() {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2lqpo5v', 'template_z50vfbf', e.target, 'user_ZGOipJzOPAMNq9fEL55ik')
            .then((result) => {
                window.location.href = "/otp";
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <Container className="login-form pt-0 ">
            <div className="form-container pt-0 border shadow-sm">
                <header className="form-container-header  form-container-header__business d-flex p-3 pe-2 border-bottom">
                    <i class="fa fa-mouse-pointer ms-2"></i>
                    <p className="m-0"> تسجيل الدخول</p>
                </header>
                <Form className="form" onSubmitCapture={sendEmail}>
                    <Form.Group className="mb-3 p-2 pb-0 form-group" controlId="formBasicEmail">
                        <InputGroup className="mb-3 form-container" dir="rtl">
                            <InputGroup.Text id="basic-addon1" className="form-label"><i class="fa fa-user"></i></InputGroup.Text>
                            <FormControl
                                placeholder="اسم المستخدم او رقم الهوية"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                className="form-input"
                                required
                                name="name"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3 p-2 pt-0 pb-0 form-group" controlId="formBasicPassword">
                        <InputGroup className="mb-3 form-container" dir="rtl">
                            <InputGroup.Text id="basic-addon1" className="form-label"><i class="fa fa-unlock"></i></InputGroup.Text>
                            <FormControl
                                type="password"
                                placeholder="كلمة المرور"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                className="form-input"
                                required
                                name="password"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3 p-2 pt-0">
                        <Button variant="primary" type="submit" className="w-100 blue-btn p-2">
                            تسجيل الدخول
                        </Button>
                    </Form.Group>

                    <Link className="form-block__links form-block__links__business d-flex justify-content-between p-2 border-top mt-2" to="#">
                        <div className="d-flex ">
                            <i class="fa fa-user-plus ms-2 mb-3 p-2 pe-1"></i>
                            <p>
                                مستخدم جديد؟
                            </p>
                        </div>
                        <div className="_jdh">
                            <i class="fa fa-chevron-left me-4"></i>
                        </div>
                    </Link>
                    <Link className="form-block__links form-block__links__business  d-flex justify-content-between p-2 pt-3 border-top border-bottom" to="#">
                        <div className="d-flex ">
                            <i class="fa fa-key ms-2 mb-3 p-2 pe-1"></i>
                            <p>
                                نسيت كلمة المرور؟
                            </p>
                        </div>
                        <div className="_jdh">
                            <i class="fa fa-chevron-left me-3"></i>
                        </div>
                    </Link>
                </Form>
            </div>
        </Container>
    )
}

export default BusinessLoginForm
