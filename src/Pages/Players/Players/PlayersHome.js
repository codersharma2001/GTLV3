import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import PlayersMenu from './PlayersMenu';
import PlayersFilter from './PlayersFilter';
import AddPlayers from './AddPlayers';

const PlayersHome = () => {
  return (
    <div className='bg-gray-50'>
        <Navbar></Navbar>
        <PlayersMenu></PlayersMenu>
        <PlayersFilter></PlayersFilter>
    </div>
  );
};

export default PlayersHome;
