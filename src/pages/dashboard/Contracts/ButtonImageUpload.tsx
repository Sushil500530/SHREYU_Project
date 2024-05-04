import React from 'react';
// import { FileEarmarkPdfFill } from 'react-bootstrap-icons';
import { useDropzone } from 'react-dropzone';

interface Props {
  accept: string[];
  text: string;
  icon:string;

}

const ButtonImageUpload: React.FC<Props> = ({ accept, text,icon }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: accept
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-2 p-0" style={{height:"40px"}}>
      <div {...getRootProps({ className: " " })}>
        <input {...getInputProps()} />
        {isDragAccept && (<p>All files will be accepted</p>)}
        {isDragReject && (<p>Some files will be rejected</p>)}
        {!isDragActive && (
          <p className='d-flex justify-content-center align-items-center p-0 gap-1' >
             <i className={`${icon} fs-4`}></i>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default ButtonImageUpload;
