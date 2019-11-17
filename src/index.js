import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'utils/rem'; // 移动端rem设置
import 'assets/style/reset.scss'; // 重置样式
import { Provider } from 'react-redux'; // 通过上下文传递store
import store from 'store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root')
);