import * as actiontypes  from './actiontypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const detaildata = (title,content) =>({
    type:actiontypes.DETAIL_DATA_TYPE,
    title:fromJS(title),
    content:fromJS(content)
});


export const dataildatamount =(id)=>{
    return(dispatch) => {
        axios.get('/api/detaildata.json?id=' + id).then((res) => {
                const data =  res.data.data ;
                dispatch(detaildata(data.title,data.content));
            }).catch((e) =>{
            console.log(e);
        })
    }
};