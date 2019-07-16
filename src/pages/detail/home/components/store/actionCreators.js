import * as actiontypes  from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const writerclicktype = (page)=>({
        type: actiontypes.WRITER_CLICK_TYPE,
        page: page,
    }
);

const loaddata = (topicList,listList,writerlist,recommentspic)=>({
    type:actiontypes.INDEX_LOAD_TYPE,
    topicList:fromJS(topicList),
    listList:fromJS(listList),
    writerlist:fromJS(writerlist),
    recommentspic:fromJS(recommentspic),
});

const loadmoredata = (data) => ({
   type:actiontypes.LOAD_MORE_TYPE,
   data: fromJS(data)
});

export const loadingdata = ()=>{
    return(dispatch)=>{
        axios.get('homeData.json').then((res)=>{
            const date=res.data;
            dispatch( loaddata(date.topicList,date.listList,date.writerlist,date.recommentspic))
        }).catch((e)=>{
            console.log(e);
        })
    }
};

export const loadmore = ()=>{
    return (dispatch) => {
        axios.get('loadmore.json').then((res)=>{
            console.log(res.data);
            dispatch(loadmoredata(res.data.data))
        }).catch((e)=>{console.log(e)});
    }
};

 const backtopaction = (data) =>({
     type:actiontypes.INDEX_BACKTOP_TYPE,
     boolean:data
});

 export const backtop = (data) => {
     return(dispatch) => {
         dispatch (backtopaction(data));
     }
 }
