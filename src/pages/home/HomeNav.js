import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class HomeNav extends Component {
    render() {
        return (<div className="home-nav">
            <div className="hz">
                <span>杭州</span>
                <i className="fas fa-caret-down"></i>
            </div>
            <div className="word">
                <NavLink to="/home/hot">正在热映</NavLink>
                <NavLink to="/home/coming">即将上映</NavLink>
            </div>
            <i className="fas fa-search search"></i>
        </div>);
    }
}