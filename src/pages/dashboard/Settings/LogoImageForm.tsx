import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Dropzone from "react-dropzone";
import classNames from "classnames";

interface FileType extends File {
    preview?: string;
    formattedSize?: string;
}

interface FileUploaderProps {
    onFileUpload?: (files: FileType[]) => void;
    showPreview?: boolean;
}

const LogoImageForm = (props: FileUploaderProps) => {
    const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

    /**
     * Handled the accepted files and shows the preview
     */
    const handleAcceptedFiles = (files: FileType[]) => {
        var allFiles = files;

        if (props.showPreview) {
            (files || []).map((file) =>
                Object.assign(file, {
                    preview:
                        file["type"].split("/")[0] === "image"
                            ? URL.createObjectURL(file)
                            : null,
                    formattedSize: formatBytes(file.size),
                })
            );
            allFiles = [...selectedFiles];
            allFiles.push(...files);
            setSelectedFiles(allFiles);
        }

        if (props.onFileUpload) props.onFileUpload(allFiles);
    };

    /**
     * Formats the size
     */
    const formatBytes = (bytes: number, decimals: number = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    /*
     * Removes the selected file
     */
    const removeFile = (e: any, fileIndex: number) => {
        const newFiles = [...selectedFiles];
        newFiles.splice(fileIndex, 1);
        setSelectedFiles(newFiles);
        if (props.onFileUpload) props.onFileUpload(newFiles);
    };

    return (
        <>
            <Dropzone
                {...props}
                onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
            >
                {({ getRootProps, getInputProps }) => (
                    <div>
                        <div {...getRootProps()}>
                            <div className="dz-message needsclick text-black rounded">
                                <input {...getInputProps()} />
                                <Form.Group className="mb-3" controlId="validationCustomUsername">
                                    <InputGroup hasValidation className="d-flex align-items-center justify-content-between rounded border text-secondary">
                                        <span className="ms-2">Choose Report Logo [100 X 100]</span>
                                        <div className="d-flex align-items-center cursor-pointer">
                                            <InputGroup.Text id="inputGroupPrepend">Browse</InputGroup.Text>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="bi bi-card-image text-primary"></i></InputGroup.Text>
                                        </div>
                                        <Form.Control.Feedback type="invalid">
                                            Please choose United State Dollu.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </div>
                            {props.showPreview &&
                                (selectedFiles || []).map((f, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            {f.preview && (
                                                <div
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="dz-preview dz-processing dz-error dz-complete dz-image-preview"
                                                >
                                                    <div className="dz-image">
                                                        <img
                                                            key={i}
                                                            data-dz-thumbnail=""
                                                            alt={f.name}
                                                            src={f.preview}
                                                        />
                                                    </div>

                                                    <div className="dz-details">
                                                        <div className="dz-size">
                                                            <span data-dz-size="">
                                                                <strong>{f.formattedSize}</strong> KB
                                                            </span>
                                                        </div>
                                                        <div className="dz-filename">
                                                            <span data-dz-name="">{f.name}</span>
                                                        </div>
                                                    </div>

                                                    <div className="dz-remove">
                                                        <Button
                                                            variant=""
                                                            onClick={(e) => removeFile(e, i)}
                                                        >
                                                            <i className="uil uil-multiply"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                            {!f.preview && (
                                                <div
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="dz-preview dz-file-preview dz-processing dz-error dz-complete"
                                                >
                                                    <div className="dz-image">
                                                        <img data-dz-thumbnail="" alt="" />
                                                    </div>
                                                    <div className="dz-details">
                                                        <div className="dz-size">
                                                            <span data-dz-size="">
                                                                <strong>{f.formattedSize}</strong> KB
                                                            </span>
                                                        </div>
                                                        <div className="dz-filename">
                                                            <span data-dz-name="">{f.name}</span>
                                                        </div>
                                                    </div>

                                                    <div className="dz-remove">
                                                        <Button
                                                            variant=""
                                                            onClick={(e) => removeFile(e, i)}
                                                        >
                                                            <i className="uil uil-multiply"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </Dropzone>
        </>
    );
};

LogoImageForm.defaultProps = {
    showPreview: true,
};

export default LogoImageForm;
