import { Button, Dropdown, Form, ButtonGroup } from "react-bootstrap";
import { GlobalFilter } from "./ContractsTable";
import ButtonImageUpload from "./ButtonImageUpload";






const MidItemBar = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3 px-3">
                <div className="d-flex justify-content-start align-items-center gap-1">
                    Show <Form.Control className='w-25' type="number" placeholder="10" required /> records
                </div>
                <div className='d-flex align-items-center justify-content-center bg-black text-white rounded-1' style={{ height: "40px" }}>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border' style={{ width: "100px", height: "40px" }}>
                        <i className='uil uil-copy text-white fs-4'></i>
                        Coppy
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border' style={{ width: "100px", height: "40px" }}>
                        <ButtonImageUpload accept={['.exel']} text="Exel" icon={"bi bi-file-earmark-x-fill text-white"} />
                    </Button>
                    <Button variant="white" className='btn-sm d-flex align-items-center gap-1 bg-black text-white border' style={{ width: "100px", height: "40px" }}>
                        <ButtonImageUpload accept={['.cvs']} text="CVS" icon={"uil uil-copy text-white"} />
                    </Button>

                    <Button variant="white" className='btn-sm d-flex align-items-center justify-content-center gap-1 bg-black text-white border p-0' style={{ width: "100px", height: "40px" }}>
                        <ButtonImageUpload accept={['.pdf']} text="PDF" icon={"bi bi-file-earmark-pdf-fill"} />
                    </Button>

                    <Dropdown as={ButtonGroup} align="end">
                        <Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                            className="btn-sm d-flex align-items-center gap-1 bg-black text-white p-0" >
                            <Button variant="black" className='btn-sm  '>
                                <i className='uil uil-eye text-white fs-4'></i>
                                <i className='bi bi-caret-down-fill text-white fs-4'></i>
                            </Button>
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="white" className="bg-black text-black">
                            <Dropdown.Item className="notify-item text-white" variant="black" href="#/">
                                <span>#</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="notify-item text-white hover:text-black" href="#/">
                                <span>Title</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="notify-item text-white hover:text-black" href="#/">
                                <span>Discount</span>
                            </Dropdown.Item>
                            <Dropdown.Item className="notify-item text-white hover:text-black" href="#/">
                                <span>Action</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <GlobalFilter setGlobalFilter={5} searchBoxClass="suhil" />
                </div>
            </div>
        </>
    );
};

export default MidItemBar;