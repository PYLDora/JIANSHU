import { fromJS } from 'immutable';
import * as actiontypes from './actiontypes';

const defaultState = fromJS( {
    login:false
});

export default (state = defaultState,action) => {

    switch (action.type){
        case actiontypes.LOG_IN_TYPE:
            return state.set("login",action.value);
        case actiontypes.LOG_OUT_TYPE:
            return state.set("login",action.value);


        default:
            return state;
    }


}