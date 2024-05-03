import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
// components 
import PageTitle from "../../../components/PageTitle";
import MidItemBar from "../Contracts/MidItemBar";
import PatientsImageLoad from "./PatientsImageLoad";
import PatientsTable from "./PatientsTable";
import { Link } from "react-router-dom";





const PatientsDashboard = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/patients" },
                    { label: "Patients", path: "/dashboard/patients", active: true },
                ]}
                title={"Patients"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                    Patients Table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                    <Link to="/dashboard/patients/create">
                                        <Button className='btn-sm fs-5'>
                                            <i className="uil-plus me-1"></i>Create
                                        </Button>
                                    </Link>
                                </Col>
                            </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body>
                            <PatientsImageLoad />
                        </Card.Body>
                        <MidItemBar />
                        <PatientsTable />
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default PatientsDashboard;