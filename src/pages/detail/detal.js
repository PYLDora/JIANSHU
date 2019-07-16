import React,{ PureComponent } from 'react';
import { DetailHead,
          DetailContent
        } from './home/style'
import { connect } from 'react-redux';
import * as actioncreators from './store/actioncreator';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render() {
        return (

            <div>
                <DetailHead>{this.props.title}</DetailHead>
                <DetailContent dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </div>
        );
    }


    componentDidMount() {
        this.props.detaildatamount(this.props.match.params.id);
    }
}

const mapstatetoprops = (state) =>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content')
} );

const mapdispatchtoprops = (dispatch) =>({
    detaildatamount(id){
        dispatch(actioncreators.dataildatamount(id));
    },
});

export default connect(mapstatetoprops,mapdispatchtoprops)(withRouter(Detail));