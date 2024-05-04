import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import CreateHomeVisitsMap from "./CreateHomeVisitsMap";
import CreateHomeVisitsImageUpload from "./CreateHomeVisitsImageUpload";

const CreateHomeCustomForm = () => {
    const [validated, setValidated] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Col lg={12} md={12} sm={12} className="mt-1">
                    <Form.Group className="mb-3" controlId="validationCustomUsername">
                        <Form.Label>Select Patients</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Select
                                aria-describedby="inputGroupPrepend"
                                required >
                                <option selected disabled>Client Name</option>
                                <option>Searching...</option>
                                <option>aaaf</option>
                                <option>greg</option>
                                <option>jyhjghd</option>
                                <option>sss</option>
                                <option>gsfg</option>

                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please choose a ExtrameLab.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Col>
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
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-calendar-check-fill"></i></InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Visit Date"
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
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mt-3">
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
                <div className="bg-danger text-white py-2 d-flex align-items-center justify-content-start gap-1 mt-4 fs-5">
                    <i className="bi bi-geo-alt-fill"></i>Location on map
                </div>
                <Col lg={12} md={12} sm={12} >
                    <CreateHomeVisitsMap />
                </Col>

                <div className="bg-danger text-white p-2">
                    <span className=" mx-3 fs-5 ">Create Home Visits</span>
                </div>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="mt-1">
                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                    <Form.Label>Attachment Image (optional)</Form.Label>
                                    <CreateHomeVisitsImageUpload />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4 inline-block">
                    <i className="bi bi-check-lg"></i>
                    Save
                </Button>
            </Form>
        </>
    );
};

export default CreateHomeCustomForm;