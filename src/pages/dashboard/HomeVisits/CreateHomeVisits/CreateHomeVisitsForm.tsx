import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CreateHomeVisitsImageUpload from "./CreateHomeVisitsImageUpload";
import CreateHomeVisitsMap from "./CreateHomeVisitsMap";
import CreateHomeCustomForm from "./CreateHomeCustomForm";

const CreateHomeVisitsForm = () => {
    return (
        <>
            <Row>
                <CreateHomeCustomForm />
                <div className="bg-danger text-white py-2 d-flex align-items-center justify-content-start gap-1 mt-4 fs-5">
                    <i className="bi bi-geo-alt-fill"></i>Location on map
                </div>
                <Col lg={12} md={12} sm={12} >
                    <CreateHomeVisitsMap />
                    <div className="mb-2">
                        <span className="title fs-5 fw-bold mb-n4">in this section set to map</span>
                    </div>
                </Col>
            </Row>
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
            <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4">
                <i className="bi bi-check-lg"></i>
                Save
            </Button>
        </>
    );
};

export default CreateHomeVisitsForm;