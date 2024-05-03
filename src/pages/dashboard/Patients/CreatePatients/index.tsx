import PageTitle from '../../../../components/PageTitle';
import { Card } from 'react-bootstrap';
import CreatePatientsForm from './CreatePatientsForm';

const CreatePatientsDashboard = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/patients/create" },
                    { label: "Create Patients", path: "/dashboard/patients/create", active: true },
                ]}
                title={"Create Patients"}
            />
            <div className="bg-primary text-white p-1">
                <span className=" mx-3 fs-5 ">Create Patients</span>
            </div>
            <Card>
                <Card.Body>
                    <CreatePatientsForm />
                </Card.Body>
            </Card>
        </>
    );
};

export default CreatePatientsDashboard;