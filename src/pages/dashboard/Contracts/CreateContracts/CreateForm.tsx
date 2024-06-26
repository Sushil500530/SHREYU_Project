import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
// styles
import "easymde/dist/easymde.min.css";
import SimpleMDEReact from 'react-simplemde-editor';
import { useState } from "react";

const CreateForm = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const delay = 1000;
    const options = {
        autofocus: true,
        autosave: {
            enabled: true,
            uniqueId: "1",
            delay,
        },
    };

    return (
        <>
            <Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col lg={6} md={12} sm={12} className="mt-1">
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Title</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Contract Title"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose Contracts Title.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={6} md={12} sm={12} className="mt-1">
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Discount%</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="number"
                                    placeholder="Contract Discoun%t"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose Discount.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col lg={12} md={12} sm={12} >
                        <div className="mb-2">
                            <span className="title fs-5 fw-bold mb-n4">Description</span>
                        </div>
                        {/* form editor  */}
                        <SimpleMDEReact id="1" options={options} />
                    </Col>

                    <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4">
                        <i className="bi bi-check-lg"></i>
                        Save
                    </Button>
                </Form>
            </Row >
        </>
    );
};

export default CreateForm;