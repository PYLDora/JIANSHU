import React,{ PureComponent } from 'react';
import {
        HomeWrapper,
        HomeLeft,
        HomeRight,
        Top
        } from './style';

import List from './components/List';
import Recomments from './components/Recomments';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import * as actionCreators  from './components/store/actionCreators';


class Home extends PureComponent {
    render() {
        return (
            <div>
                < HomeWrapper >
                    <HomeLeft>

                        <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4652/f32e7f414d86d5a1709f8e6f00ec3272fd9f604b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=''/>
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recomments/>
                        <Writer/>
                    </HomeRight>
                    {this.props.BackTopShow? <Top onClick={ this.props.handleTopClick }>^</Top>:null}
                </HomeWrapper>
            </div>
                );
    }

    componentDidMount(){
       this.props.homestate();
       this.bindEvent();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll",this.props.handlescrollstate);
    }


    bindEvent(){
        window.addEventListener("scroll",this.props.handlescrollstate);
    }

}

const mapStateToProps = (state)=>({
   BackTopShow:state.get('home').get('BackTopShow')
});

const mapdispatchtostate = (dispatch)=>({
    homestate(){
        dispatch(actionCreators.loadingdata())
    },
    handleTopClick() {
        window.scrollTo(0,0);
    },
    handlescrollstate(){
        if(document.documentElement.scrollTop>100) {
            dispatch(actionCreators.backtop(true));
        }
        else {
            dispatch(actionCreators.backtop(false));
        }

    }
});

export default connect(mapStateToProps,mapdispatchtostate)(Home);