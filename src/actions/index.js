import { CHANGE_BACK_FLAG, GET_MOVIES, GET_MORE_MOVIES, CHANGE_LOADING_FLAG } from './actionType';
import request from 'utils/request';

export const changeBackFlag = val => ({
    type: CHANGE_BACK_FLAG,
    payload: val
})

export const getMovies = () => {
    return async dispatch => {
        const result = await request({
            url: '/ajax/movieOnInfoList',
            params: {
                token: ''
            }
        });

        // console.log(result.data);
        dispatch({
            type: GET_MOVIES,
            payload: result.data
        });
    }
}

export const getMoreMovies = ids => {
    return async dispatch => {
        const result = await request({
            url: '/ajax/moreComingList',
            params: {
                token: '',
                movieIds: ids.join()
            }
        });

        // console.log(result.data.coming);

        dispatch({
            type: GET_MORE_MOVIES,
            payload: result.data.coming
        });
    }
}

export const changeLoadingFlag = payload => ({
    type: CHANGE_LOADING_FLAG,
    payload
})

