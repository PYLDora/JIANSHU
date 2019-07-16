import * as actiontypes from './actiontype';
import axios from 'axios';
import { fromJS } from 'immutable';

const getlist =(data,totalpage)=>({
    type:actiontypes.LIST_TYPE,
    data:fromJS(data),
    totalpage:fromJS(totalpage)
});
export const inputtype = {
    type:actiontypes.INPUT_TYPE
};

export const blurtype = {
    type:actiontypes.BLUR_TYPE
};

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('jianshu.json').then((res)=>{
            const totalpage = Math.ceil((res.data.data.length)/10);
            dispatch(getlist(res.data.data,totalpage))}).catch(()=>{
                console.log('faild');
            });
}
};

export const onmouseovertype = {
    type:actiontypes.MOUSEOVER_TYPE
};

export const onmouseouttype ={
    type:actiontypes.MOUSEOUT_TYPE
};

export const onclickchangetype = (page)=>({
    type:actiontypes.ONCLICKCHANGE_TYPE,
    page:page,
});