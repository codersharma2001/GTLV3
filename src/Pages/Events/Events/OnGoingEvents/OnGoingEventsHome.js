import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import EventsMenu from '../EventsMenu';
import OnGoingEventsMenu from './OnGoingEventsMenu';

const OnGoingEventsHome = () => {
    return (
        <>
            <Navbar></Navbar>
            <EventsMenu></EventsMenu>
            <OnGoingEventsMenu></OnGoingEventsMenu>
            
        </>
    );
};

export default OnGoingEventsHome;