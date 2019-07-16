import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {

    render() {
        const { loginin } = this.props;
        console.log(loginin);
        if(loginin){
        return (
            <div>详情待开发</div>
        );
    }
    else {
            return  <Redirect to ='/login'/>;
        }
    }
}

const mapstatetoprops = (state) =>({
    loginin:state.get('login').get('login')
});

export default connect(mapstatetoprops,null)(Write);