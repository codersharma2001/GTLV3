import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ValidatorsMenu from './ValidatorsMenu';

const ValidatorsHome = () => {
  return (
    <div className='bg-gray-50'>
        <Navbar></Navbar>
        <ValidatorsMenu></ValidatorsMenu>
    </div>
  );
};

export default ValidatorsHome;
