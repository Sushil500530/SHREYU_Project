import { Card } from "react-bootstrap";
import PageTitle from "../../../../components/PageTitle";
import CreateForm from "./CreateForm";

const CreateContractsDashboard = () => {

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "Dashboard", path: "/dashboard/contracts/create" },
                    { label: "Create Contracts", path: "/dashboard/contracts/create", active: true },
                ]}
                title={"Contracts"}
            />
            <div className="bg-primary text-white p-1">
                <span className=" mx-3 fs-5 ">Create Contracts</span>
            </div>
            <Card>
                <Card.Body>
                    <CreateForm />
                </Card.Body>
            </Card>
        </>
    );
};

export default CreateContractsDashboard; 