import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
const MakeAdmin = () => {

  
    // const addAdminHandler = (e) => {
    //     e.preventDefault()
    //     fetch('https://creative-agency-fullstack.herokuapp.com/add-admin', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ admin })
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             result && notify()
    //         })
    // }

    return (
        <div>
            <Row xs={12}>
                <Col xs={12} md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <div className='d-flex justify-content-between'>
                        <h4 className='mt-4 ml-5'>Make Admin</h4>
                        <h2 className='mt-4 pr-5 display-username-1' style={{ fontSize: '16px', fontWeight: '500' }}>User</h2>
                    </div>
                    <Container className=' add-service-form-container mt-5' style={{ background: '#f1f6ff' }}>
                        <Form>
                            <Row xs={12} className='p-4 align-items-center'>
                                <Col md={9} lg={7} >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Control  type="text" placeholder="abc@gmail.com" />

                                    </Form.Group>
                                </Col>
                                <Col md={2} >
                                    <Button className='float-left float-left btn-sm' style={{ background: '#009444', marginTop: '15px' }} type="submit">
                                        Submit
                            </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
            {/* <ToastContainer bodyClassName='toast-color' /> */}

        </div>
    );
};

export default MakeAdmin;