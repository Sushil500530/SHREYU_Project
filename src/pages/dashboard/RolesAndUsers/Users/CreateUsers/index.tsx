import React from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import PageTitle from '../../../../../components/PageTitle';

const CreateUsersDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/users/create" },
                    { label: "Create Users", path: "/dashboard/users/create", active: true },
                ]}
                title={"Users"}
            />
            <div className="bg-primary text-white p-1">
                <span className=" mx-3 fs-5 ">Create Users</span>
            </div>
            <Card>
                <Card.Body>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-person-fill fs-4"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose Name.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-envelope-fill fs-4"></i></InputGroup.Text>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please chooseEmail Address.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-key-fill fs-4"></i></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose Password.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustomUsername">
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-person fs-4"></i></InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                        </Col>
                    </Row>
                    <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-3">
                        <i className="bi bi-check-lg fs-4"></i>
                        Save
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateUsersDashboard;