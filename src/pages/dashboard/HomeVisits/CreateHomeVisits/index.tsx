import React from 'react';
import PageTitle from '../../../../components/PageTitle';
import { Card } from 'react-bootstrap';
import CreateHomeVisitsForm from './CreateHomeVisitsForm';

const CreateHomeVisitsDashboard = () => {
    return (
        <>
              <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/home-visits/create" },
                    { label: "Create Home Visits", path: "/dashboard/home-visits/create", active: true },
                ]}
                title={"Home Visits"}
            />
            <div className="bg-primary text-white p-2">
                <span className=" mx-3 fs-5 ">Create Home Visits</span>
            </div>
            <Card>
                <Card.Body>
                    <CreateHomeVisitsForm />
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateHomeVisitsDashboard;