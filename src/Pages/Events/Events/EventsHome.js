import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import EventsMenu from './EventsMenu';

const EventsHome = () => {
  return (
    <div className='bg-gray-50'>
        <Navbar></Navbar>
        <EventsMenu></EventsMenu>
    </div>
  );
};

export default EventsHome;
