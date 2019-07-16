import { fromJS } from 'immutable';
import * as actiontypes from './actiontypes';

const defaultState = fromJS( {
   title:'',
    content:''
    });

export default (state = defaultState,action) => {

    switch (action.type){
        case actiontypes.DETAIL_DATA_TYPE:
            return state.merge({
                    title:action.title,
                    content:action.content
                    });


        default:
            return state;
    }


}