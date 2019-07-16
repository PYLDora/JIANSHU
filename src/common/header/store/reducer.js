import * as actiontypes from '../../../store/actiontype';
import { fromJS } from 'immutable';

const defauleState = fromJS( {
    focused:false,
    list:[],
    page:1,
    totalpage:0,
    mouseIn:false,
});

export default (state = defauleState,action) => {

    switch (action.type){
        case actiontypes.INPUT_TYPE :
            return state.set( 'focused',true );
        case actiontypes.BLUR_TYPE:
            return state.set('focused',false);
        case actiontypes.LIST_TYPE:
            return state.set('list',action.data).set('totalpage',action.totalpage);
        case actiontypes.MOUSEOVER_TYPE:
            return state.set('mouseIn',true);
        case actiontypes.MOUSEOUT_TYPE:
            return state.set('mouseIn',false);
        case actiontypes.ONCLICKCHANGE_TYPE:
            return state.set('page', action.page);
        default:
            return state;
    }


}