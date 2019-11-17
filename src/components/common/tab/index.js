import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeBackFlag } from 'actions';

class Tab extends Component {
    componentDidMount() {
        const { changeBackFlag } = this.props;
        const { pathname } = this.props.location;
        const { push } = this.props.history;

        changeBackFlag(pathname);
        if (pathname == '/home') {
            push('/home/hot');
        }
    }

    componentWillReceiveProps(nextProps) {
        const { changeBackFlag } = nextProps;
        const { pathname } = nextProps.location;
        const { push } = nextProps.history;

        changeBackFlag(pathname);
        if (pathname == '/home') {
            push('/home/hot');
        }
    }

    check = () => {
        const { title } = this.props;
        const { pathname } = this.props.location;
        for (let key in title) {
            if (pathname == key) {
                return <span>{title[key]}</span>
            }
        }
    }

    render() {
        const { backFlag } = this.props;
        const { goBack } = this.props.history;
        return (<header>
            {backFlag && <i className="fas fa-angle-left" onClick={goBack}></i>}
            {this.check()}
        </header>);
    }
}

export default connect(state => state.tabReducer, dispatch => bindActionCreators({ changeBackFlag }, dispatch))(Tab);