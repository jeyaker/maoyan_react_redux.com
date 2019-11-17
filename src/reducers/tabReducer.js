import { CHANGE_BACK_FLAG } from 'actions/actionType';

const initState = {
    noBack: ['/home/hot', '/home/coming'],
    backFlag: true
};


const tabReducer = (state = initState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case CHANGE_BACK_FLAG:
            // console.log(action.payload);
            const f = newState.noBack.some(item => item == action.payload);
            if (f) {
                newState.backFlag = false;
            } else {
                newState.backFlag = true;
            }
            break;
        default:
            break;
    }

    return newState;
}

export default tabReducer;