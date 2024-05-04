import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const CreatePatientsForm = () => {
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
                <Row>
                    <Col lg={4} md={12} sm={12}>
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
                                    Please choose Client Name.
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
                                    Please choose a Address.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>

                    <Col lg={4} md={12} sm={12}>
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
                                    Please choose Email Address.
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
                                    <option selected disabled >Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Select>
                                {/* </Form.Select> */}
                                <Form.Control.Feedback type="invalid">
                                    Please choose a Gender.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                    </Col>

                    <Col lg={4} md={12} sm={12}>
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
                                    Please choose Phone Number.
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
                                    Please choose Date of Birth.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4">
                    <i className="bi bi-check-lg"></i>
                    Save
                </Button>
            </Form >
        </>
    );
};

export default CreatePatientsForm;