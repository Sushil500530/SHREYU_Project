import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import PageTitle from "../../../../../components/PageTitle";

const CreateRolesDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/roles/create" },
                    { label: "Create Roles", path: "/dashboard/roles/create", active: true },
                ]}
                title={"Roles"}
            />
            <div className="bg-primary text-white p-1">
                <span className=" mx-3 fs-5 ">Create Roles</span>
            </div>
            <Card>
                <Card.Body>
                    <Col lg={12}>
                        <Form.Group className="mb-3" controlId="validationCustomUsername">
                            <Form.Label>Name</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Role Name"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose Name.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <span className="fs-5 fw-semibold">Permissions</span>
                        </div>
                        <div>
                            <Button variant="primary" className="btn-sm me-2">
                                <i className="bi bi-check-lg"></i>
                            </Button>
                            <Button variant="danger" className="btn-sm">
                                <i className="bi bi-x-lg"></i>
                            </Button>
                        </div>
                    </div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <span className="fs-5 fw-semibold">Tests</span>
                                        </div>
                                        <div>
                                            <Button variant="primary" className="btn-sm me-2">
                                                <i className="bi bi-check-lg"></i>
                                            </Button>
                                            <Button variant="danger" className="btn-sm">
                                                <i className="bi bi-x-lg"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <span className="fs-5 fw-semibold">Tests</span>
                                        </div>
                                        <div>
                                            <Button variant="primary" className="btn-sm me-2">
                                                <i className="bi bi-check-lg"></i>
                                            </Button>
                                            <Button variant="danger" className="btn-sm">
                                                <i className="bi bi-x-lg"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <span className="fs-5 fw-semibold">Tests</span>
                                        </div>
                                        <div>
                                            <Button variant="primary" className="btn-sm me-2">
                                                <i className="bi bi-check-lg"></i>
                                            </Button>
                                            <Button variant="danger" className="btn-sm">
                                                <i className="bi bi-x-lg"></i>
                                            </Button>
                                        </div>
                                    </div>
                                   <hr />
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h5 className="fs-5 fw-semibold">Tests</h5>
                                        <div className="form-check form-switch m-0" style={{ width: "20%"}}>
                                            <input className="form-check-input m-0 w-100 " type="checkbox" role="switch" style={{ padding: "15px 0px" }} id="flexSwitchCheckDefault" />
                                            <label className="form-check-label w-100 d-inline " htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="fs-5 fw-semibold">Create</h5>
                                        <div className="form-check form-switch" style={{ width: "20%"}}>
                                            <input className="form-check-input m-0 w-100 " type="checkbox" role="switch" style={{ padding: "15px 0px" }} id="flexSwitchCheckDefault" />
                                            <label className="form-check-label w-100 d-inline" htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-1">
                                            <h5 className="fs-5 fw-semibold">Edit</h5>
                                        <div className="form-check form-switch m-0" style={{ width: "20%"}}>
                                            <input className="form-check-input m-0 w-100 " type="checkbox" role="switch" style={{ padding: "15px 0px" }} id="flexSwitchCheckDefault" />
                                            <label className="form-check-label w-100 d-inline " htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="fs-5 fw-semibold">Delete</h5>
                                        <div className="form-check form-switch" style={{ width: "20%"}}>
                                            <input className="form-check-input m-0 w-100 " type="checkbox" role="switch" style={{ padding: "15px 0px" }} id="flexSwitchCheckDefault" />
                                            <label className="form-check-label w-100 d-inline" htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Button type="submit" className="d-flex align-items-center justify-content-center gap-1 mt-4">
                        <i className="bi bi-check-lg"></i>
                        Save
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateRolesDashboard;