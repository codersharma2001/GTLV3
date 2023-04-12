import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddCampusMenu from './AddCampusMenu';

const AddCampusHome = () => {
  return (
    <div className='bg-gray-50'>
        <Navbar></Navbar>
        <AddCampusMenu></AddCampusMenu>
    </div>
  );
};

export default AddCampusHome;
