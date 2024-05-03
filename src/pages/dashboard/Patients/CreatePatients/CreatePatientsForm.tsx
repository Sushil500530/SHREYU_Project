import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const CreatePatientsForm = () => {
    return (
        <>
            <Row>
                <Col lg={4} md={12} sm={12} className="mt-3">
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-person-fill"></i></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Client Name"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a ExtrameLab.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-geo-alt-fill"></i></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a Egypt.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Col>
                <Col lg={4} md={12} sm={12} className="mt-3">
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-envelope-fill"></i></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Email Address"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose United State Dollu.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-gender-trans"></i></InputGroup.Text>
                            <Form.Select
                                placeholder="Select Gender"
                                aria-describedby="inputGroupPrepend"
                                required>
                                <option selected >Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Select>
                            {/* </Form.Select> */}
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                </Col>
                <Col lg={4} md={12} sm={12} className="mt-3">
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose United State Dollu.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-calendar-check-fill"></i></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Date of Birth"
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
            <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4">
                <i className="bi bi-check-lg"></i>
                Save
            </Button>
        </>
    );
};

export default CreatePatientsForm;