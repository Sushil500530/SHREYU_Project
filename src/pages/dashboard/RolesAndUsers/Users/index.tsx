import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import MidItemBar from "../../Contracts/MidItemBar";
import UsersTable from "./UsersTable";
import { Link } from "react-router-dom";

const UsersDashboard = () => {
    const [newTaskDetails, setNewTaskDetails] = useState<any>(null);
    // add task 
    const newTask = (status: string, queue: string) => {
        setNewTaskDetails({
            dueDate: new Date(),
            //   userAvatar: [defaultAvatar],
            status: status,
            queue: queue,
        });
        // setNewTaskModal(true);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/users" },
                    { label: "Users", path: "/dashboard/users", active: true },
                ]}
                title={"Users"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                    Users Table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                    <Link to="/dashboard/users/create">
                                        <Button className='btn-sm fs-5'>
                                            <i className="uil-plus me-1"></i>Create
                                        </Button>
                                    </Link>
                                </Col>
                            </div>
                        </Card.Body>
                        <hr className="my-0 mb-3" />
                        <MidItemBar />
                        <UsersTable />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default UsersDashboard;