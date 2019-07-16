import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    Writersize,
    Writerbanner,
    Writercontent,
    Writerall
} from '../style';
import * as actionCreators  from './store/actionCreators'

class Writer extends PureComponent {
    render() {
        const { list,handlePageClick,page } = this.props;
        const changelist = list.toJS();
        const totalpage = Math.ceil(changelist.length/5);
        let writerlist = [];
        if(changelist.length) {
            for (let i = (page - 1)*5; i < page * 5; i++) {
                if(changelist[i]) {
                    writerlist.push(changelist[i]);
                }
            }
        }

        return (
            <Writersize>
            <Writerbanner>
                <div className = 'left'>推荐作者</div>
                <div
                    className = 'right'
                    onClick={()=>{ handlePageClick(page,totalpage,this.spinIcon) }}
                >
                    <i ref = {(icon)=>{this.spinIcon = icon }} className='spin iconfont '>&#xe851;</i>
                    换一批
                </div>
            </Writerbanner>


                    {
                        writerlist.map((item) =>(
                        <Writercontent key={item.id}>
                        <div className='guanzhu'>+关注</div>
                        <img className='writer-pic' src={item.imgUrl} alt=""/>
                        <p className='writer-name'>{item.writer}</p>
                        <p className='writer-content'>{item.content}</p>
                        </Writercontent>
                        ))
                    }

                <Writerall>
                        查看全部 >
                </Writerall>

            </Writersize>

            );
    }
}

const mapstate = (state) => ({
    list:state.get('home').get('writerlist'),
    page:state.get('home').get('page'),
});

const mapDispath = (dispath) =>({
        handlePageClick(page,totalpage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt( originAngle ,10 );
            }
            else  {
                originAngle = 0;
            }

            spin.style.transform = 'rotate('+( originAngle+360 )+'deg)';
            if( page<totalpage ) {
                page++;
            }
            else {
                page = 1;
            }
            dispath(actionCreators.writerclicktype(page));
        },

});
export default connect(mapstate,mapDispath)(Writer);