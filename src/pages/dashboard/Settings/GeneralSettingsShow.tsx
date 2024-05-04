import { Button, Card, Form, InputGroup } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import LogoImageForm from "./LogoImageForm";
import { useState } from "react";



// ChatArea
const GeneralSettingsShow = () => {
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
            <Card>
                <Card.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={12} lg={12}>
                                <Nav variant="pills" className="flex-row bg-primary pt-1 mt-1">
                                    <Nav.Item className="m-0 pt-1">
                                        <Nav.Link eventKey="first" className="cursor-pointer fs-5 m-0 px-2 py-1 fw-semibold">General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-0 pt-1">
                                        <Nav.Link eventKey="second" className="cursor-pointer fs-5 m-0 px-2 py-1 fw-semibold">Social</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-0 pt-1">
                                        <Nav.Link eventKey="third" className="cursor-pointer fs-5 m-0 px-2 py-1 fw-semibold">Logos</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-pencil-square"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="ExtrameLab"
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
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-zoom-in"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Egypt"
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
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-envelope"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="support1Gextremelab.tech"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose support1Gextremelab.tech.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-currency-pound"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="United State Dollar"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose United State Dollar.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="002151564251"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Number.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><FeatherIcon icon="globe" className="w-75" /></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="https://extremelab.tech/admin"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Website.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-vinyl-fill"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="All rights are reserverd ExtremeLab Company@2021"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose reserverd ExtremeLab Company@2021.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button type="submit" className="d-flex align-items-center justify-content-center gap-1">
                                            <i className="bi bi-check-lg"></i>
                                            Save
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-facebook"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            value={"https://facebook.com"}
                                                            placeholder="https://facebook.com"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose Facebook website.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-instagram"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            value={"https://instagram.com"}
                                                            placeholder="https://instagram.com"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose Instagram website.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-twitter"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            value={"https://twitter.com"}
                                                            placeholder="https://twitter.com"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose Twitter website.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-youtube"></i></InputGroup.Text>
                                                        <Form.Control
                                                            type="text"
                                                            value={"https://youtube.com"}
                                                            placeholder="https://youtube.com"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a youtube website.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button type="submit" className="d-flex align-items-center justify-content-center gap-1">
                                            <i className="bi bi-check-lg"></i>
                                            Save
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <Col lg={12}>
                                            <LogoImageForm />
                                            <LogoImageForm />
                                        </Col>
                                    </Row>
                                    <Button type="submit" className="d-flex align-items-center justify-content-center gap-1">
                                        <i className="bi bi-check-lg"></i>
                                        Save
                                    </Button>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Card.Body>
            </Card>
        </>
    );
};

export default GeneralSettingsShow;
