import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ValidatorsMenu from './ValidatorsMenu';
import UploadCSV from './UploadCSV';

const ValidatorsHome = () => {
  return (
    <div>
        <Navbar></Navbar>
        <ValidatorsMenu></ValidatorsMenu>
        <UploadCSV></UploadCSV>
    </div>
  );
};

export default ValidatorsHome;
