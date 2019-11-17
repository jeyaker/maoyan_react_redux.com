import { GET_MOVIES, GET_MORE_MOVIES, CHANGE_LOADING_FLAG } from 'actions/actionType';

const initState = {
    data: null,
    loadingFlag: false
}


const homeReducer = (state = initState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case GET_MOVIES:
            newState.data = action.payload;
            break;
        case GET_MORE_MOVIES:
            newState.data.movieList = newState.data.movieList.concat(action.payload);
            break;
        case CHANGE_LOADING_FLAG:
            newState.loadingFlag = action.payload;
            break;
        default:
            break;
    }

    return newState;
}

export default homeReducer;