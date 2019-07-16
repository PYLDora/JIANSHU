import { fromJS } from 'immutable';
import * as actiontypes from './actionTypes';

const defaultState = fromJS( {
    topicList:[],
    listList:[],
    writerlist:[],
    page:1,
    recommentspic:[],
    BackTopShow:true
});

export default (state = defaultState,action) => {

    switch (action.type){
        case actiontypes.WRITER_CLICK_TYPE :
            return state.set('page',action.page);
        case actiontypes.INDEX_LOAD_TYPE :
            return state.merge({
                topicList:fromJS(action.topicList),
                listList:fromJS(action.listList),
                writerlist:fromJS(action.writerlist),
                recommentspic:fromJS(action.recommentspic),
                loadmore:fromJS(action.loadmore)
            });
        case actiontypes.LOAD_MORE_TYPE :
            return state.set('listList',state.get('listList').concat(action.data));
        case actiontypes.INDEX_BACKTOP_TYPE:
            return state.set('BackTopShow',action.boolean);


        default:
            return state;
    }


}