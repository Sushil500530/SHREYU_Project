import { Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
// components 
import PageTitle from "../../../components/PageTitle";
import MidItemBar from "../Contracts/MidItemBar";
import Filtered from "./Filtered";
import HomeVisitsTable from "./HomeVisitsTable";
import { Link } from "react-router-dom";

const HomeVisitsDashboard = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/home-visits" },
                    { label: "Home Visits", path: "/dashboard/home-visits", active: true },
                ]}
                title={"Home visits"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                    Home visits table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                    <Link to="/dashboard/home-visits/create">
                                        <Button className='btn-sm fs-5'>
                                            <i className="uil-plus me-1"></i>Create
                                        </Button>
                                    </Link>
                                </Col>
                            </div>
                        </Card.Body>
                        <hr className="m-0" />
                        <Card.Body>
                            <Filtered />
                        </Card.Body>
                        <MidItemBar />
                        <HomeVisitsTable />
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default HomeVisitsDashboard;