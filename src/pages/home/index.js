import React, { Component } from 'react';
import './index.scss';
import HomeNav from './HomeNav';
import { Route } from 'react-router-dom';
import Hot from './Hot';
import Coming from './Coming';

class Home extends Component {
    render() {
        return (<div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
            <HomeNav />
            <Route path="/home/hot" component={Hot} />
            <Route path="/home/coming" component={Coming} />
        </div>);
    }
}

export default Home;