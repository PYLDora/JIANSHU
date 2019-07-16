import * as actiontypes  from './actiontypes';
import axios from 'axios';

const loginaction = () =>({
    type: actiontypes.LOG_IN_TYPE,
    value:true
});

export  const loginout = ()=>({
    type:actiontypes.LOG_OUT_TYPE,
    value:false
});

export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('/api/login.json?account'+account+'&password'+password).then((res)=>{
            if(res.data.data) {
                dispatch(loginaction());
            }
            else {
                alert("登录失败");
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
};

