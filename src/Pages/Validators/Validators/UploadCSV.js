import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import Navbar from '../../Shared/Navbar/Navbar';
import ValidatorsMenu from './ValidatorsMenu';
import { toast } from 'react-hot-toast';

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/upload-csv', formData);
      setMessage(response.data);
      toast.success('SBT Token minted successfully.....', { duration: 10000 })
      toast.success('Tickets Generated Successfully.....', { duration: 10000 })
      setError(false);
      setFile(null);
    } catch (error) {
      setMessage(error.response.data);
      setError(true);
      setFile(null);
    }
  };

  
  return (
    <>
 
      <div className=" bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Upload CSV file</h2>
      </div>
  
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {message && (
          <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${error ? 'bg-red-500' : 'bg-green-500'}`}>
            <span className="text-xl inline-block mr-5 align-middle">
              {error ? 'Error' : 'Success'}
            </span>
            <span className="inline-block align-middle mr-8">{message}</span>
          </div>
        )}
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="text-center">
              <div {...getRootProps()} className="cursor-pointer">
                <input {...getInputProps()} />
                {file ? (
                  <p className="text-center">{file.name}</p>
                ) : (
                  <p className="text-center">
                    Drag 'n' drop CSV file here, or click to select file
                  </p>
                )}
              </div>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              disabled={!file}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {file ? (
                  <span className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                    <span className="sr-only">File uploaded successfully</span>
                  </span>
                ) : (
                  <span className="h-5 w-5 rounded-full bg-gray-400 flex items-center justify-center">
                    <span className="h-2.5 w-2.5 text-white rounded-full bg-gray-900"></span>
                  </span>
                )}
              </span>
              {file ? (
                <span>Upload</span>
              ) : (
                <span>Select a file</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
  
};

export default UploadCSV;