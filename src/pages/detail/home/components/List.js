import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem,
         ListInfo ,
         Loadmore
} from '../style';
import * as actionCreators from './store/actionCreators';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const{ list,handleloadmorestate,loadmore } = this.props;
        console.log(loadmore);
        return (
            <div>
                {
                    list.map((item,index)=> {
                            const a = item.get('haspic');
                            if (a === false) {
                                return (
                                    < Link   to={'/detail/' + item.get('id')} >
                                    <ListItem key={index}>
                                        <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className = 'desc'>{item.get('desc')}</p>
                                        </ListInfo>
                                    </ListItem>
                                    </Link>
                                );
                            }


                            return (
                                <ListItem key={item.get('id')}>
                                    <img className='list-pic' src ={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className = 'desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            );
                        })



                }

                <Loadmore onClick={ handleloadmorestate}>阅读更多</Loadmore>


            </div>


        );
    }
}
const mapStateToProps=(state)=>({
    list:state.get('home').get('listList'),
});

const mapDispathToState = (dispath) =>({
   handleloadmorestate(){
       dispath(actionCreators.loadmore());
       console.log("已成功");
   }

});
export default connect(mapStateToProps,mapDispathToState)(List);