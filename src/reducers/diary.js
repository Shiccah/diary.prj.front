import {
    SET_ENTRYS
} from '../actions/diary';

const initialState = {
    isReady: false,
    entry: [],
};

export default (state = initialState, action) => {

    switch (action.type){
        case SET_ENTRYS:
            return{
                ...state,
                entry: action.payload,
                isReady: true,
            };
        default:
            return state
    }
};