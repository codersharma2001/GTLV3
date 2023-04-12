import React from 'react';
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';
import Dashboard from '../../Dashboard/Dashboard.js/Dashboard';
import Login from '../../Login/Login';

const Home = () => {
    return (
        <div>
            <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        </div>
    );
};

export default Home;