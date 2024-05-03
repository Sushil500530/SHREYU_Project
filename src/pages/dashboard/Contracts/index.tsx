import React, { useState } from 'react';

// components
import { Button, Card, Col, Dropdown, Row, ButtonGroup } from "react-bootstrap";
import PageTitle from '../../../components/PageTitle';
import ContractsTable from './ContractsTable';
import MidItemBar from './MidItemBar';
import FeatherIcon from 'feather-icons-react';






const ContractsDashboard = () => {

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
                    { label: "Dashboard", path: "/dashboard/contracts" },
                    { label: "Contracts", path: "/dashboard/contracts", active: true },
                ]}
                title={"Contracts"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="float-sm-start">
                                <label className="form-check-label">
                                    Contracts Table
                                </label>
                            </div>
                            <div className="float-sm-end">
                                <Col className="text-sm-end mt-sm-0 mt-2">

                                    <Dropdown as={ButtonGroup} align="end">
                                        <Dropdown.Toggle
                                            variant="primary"
                                            id="dropdown-basic"
                                            className=" p-0"
                                        >
                                            <Button className='btn-sm fs-5'>
                                                <i className="uil-plus me-1"></i>Create
                                            </Button>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item className="notify-item" href="#/">
                                                <FeatherIcon
                                                    icon="eye"
                                                    className="icon-dual icon-xs me-2"
                                                />
                                                <span>Show</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="notify-item" href="#/">
                                                <FeatherIcon
                                                    icon="edit"
                                                    className="icon-dual icon-xs me-2"
                                                />
                                                <span>Edit</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="notify-item" href="#/">
                                                <FeatherIcon
                                                    icon="trash-2"
                                                    className="icon-dual icon-xs me-2"
                                                />
                                                <span>Delet</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item className="notify-item" href="#/">
                                                <FeatherIcon
                                                    icon="filter"
                                                    className="icon-dual icon-xs me-2"
                                                />
                                                <span>Clear group tests</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* <Button onClick={() => newTask("Pending", "todoTasks")}>
                                        <i className="uil-plus me-1"></i>Create
                                    </Button> */}
                                </Col>
                            </div>
                        </Card.Body>
                        <hr className="my-0 mb-3" />
                        <MidItemBar />
                        <ContractsTable />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ContractsDashboard;