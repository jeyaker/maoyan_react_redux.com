import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import homeReducer from './homeReducer';


const rootReducer = combineReducers({
    tabReducer,
    homeReducer,
});

export default rootReducer;