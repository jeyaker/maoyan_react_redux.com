import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, getMoreMovies, changeLoadingFlag } from 'actions';
import BScroll from 'better-scroll';
import _ from 'lodash';
import Loading from './Loading';

class Hot extends Component {

    componentDidMount() {
        const { getMovies, getMoreMovies, changeLoadingFlag } = this.props;
        getMovies();
        // console.log(this.props.data.movieIds);
        // console.log(getMoreMovies);

        const bs = new BScroll('.hot', {
            pullUpLoad: {
                threshold: 30 // 时机
            }
        });

        let count = 0; // 计数器
        bs.on('pullingUp', () => {
            const { movieIds } = this.props.data;
            let ids = _.chunk(movieIds.slice(12), 10); // 使用_.chunk分割为二维数组
            // console.log(ids.length);

            if (count < ids.length) {
                changeLoadingFlag(true);
                getMoreMovies(ids[count]);

                setTimeout(() => {
                    changeLoadingFlag(false);
                    // console.log(count);
                    count++;
                }, 1000)
            }
            bs.finishPullUp();
        });
    }

    renderItem = () => {
        const reg = '/w.h/';
        return this.props.data && this.props.data.movieList.map(item => <li key={item.id} className="hot-content">
            <div className="hot-content-left">
                <img src={item.img.replace(reg, '/128.180/')} />
            </div>
            <div className="hot-content-right">
                <h3>{item.nm}</h3>
                {item.globalReleased && (<p className="audience">
                    <span>观众评 </span>
                    <em>{item.sc.toFixed(1)}</em>
                </p>) || <p className="audience">
                        <em>{item.wish}</em>
                        <span> 人想看</span>
                    </p>}
                <p className="starring">主演: {item.star}</p>
                <p className="showinfo">{item.showInfo}</p>
                <button className={item.globalReleased && 'buy normal_button' || 'buy pre_button'} type="button">{item.globalReleased && '购票' || '预售'}</button>
            </div>
        </li>);
    }

    render() {
        const { loadingFlag } = this.props;
        return (<div className="hot">
            <ul>
                {this.renderItem()}
            </ul>
            {loadingFlag && <Loading />}
        </div>);
    }
}

export default connect(state => state.homeReducer, disptach => bindActionCreators({ getMovies, getMoreMovies, changeLoadingFlag }, disptach))(Hot);
