import React, { Component } from 'react';
import Tab from 'components/common/tab';
import TabBar from 'components/common/tabbar';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Home from 'pages/home';
import Cinema from 'pages/cinema';
import Mine from 'pages/mine';
import Error from 'pages/error';

class LayOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {
                '/home/hot': '猫眼电影',
                '/home/coming': '猫眼电影',
                '/cinema': '影院',
                '/mine': '我的'
            }
        }
    }


    render() {
        return (<div id="layout">
            <Tab {...this.props} {...this.state} />
            <Switch>
                <Redirect from="/" to="/home" exact />
                <Route path="/home" component={Home} />
                <Route path="/cinema" component={Cinema} />
                <Route path="/mine" component={Mine} />
                <Route component={Error} />
            </Switch>
            <TabBar />
        </div>);
    }
}

export default withRouter(LayOut);
