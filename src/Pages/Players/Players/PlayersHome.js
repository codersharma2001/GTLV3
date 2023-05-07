import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import PlayersMenu from './PlayersMenu';
import PlayersFilter from './PlayersFilter';
import AddPlayers from './AddPlayers';
import EventSlider from './EventSlider';
import JoinTheDAOcard from './JoinTheDAOcard';

const PlayersHome = () => {
  return (
    <div>
        <Navbar></Navbar>
        <PlayersMenu></PlayersMenu>
        <EventSlider></EventSlider>
        <JoinTheDAOcard></JoinTheDAOcard>
    </div>
  );
};

export default PlayersHome;
