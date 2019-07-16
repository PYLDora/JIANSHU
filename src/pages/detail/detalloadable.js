import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
    loader: () => import('./detal.js'), //完成加载后加载的组件
    loading (){
        return <div>正在拼命的加载ING</div>
},
});

export default () => <LoadableComponent/>;


