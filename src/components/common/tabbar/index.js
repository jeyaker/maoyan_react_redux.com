import React, { Component } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [{
                id: 1,
                text: "电影",
                iconName: "fa-home",
                path: "/home"
            }, {
                id: 2,
                text: "影院",
                iconName: "fa-film",
                path: "/cinema"
            }, {
                id: 3,
                text: "我的",
                iconName: "fa-user-tie",
                path: "/mine"
            }],
            tabFlag: true
        }
    }

    renderItem = () => {
        return this.state.tabs.map(item => <li key={item.id}>
            <NavLink to={item.path}>
                <i className={'fas ' + item.iconName}></i>
                <span>{item.text}</span>
            </NavLink>
        </li>)
    }

    render() {
        return (<footer>
            <ul>
                {this.renderItem()}
            </ul>
        </footer>);
    }
}

export default TabBar;