import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommentsWrapper,
    RecommentsItem,
    Morecode
} from '../style';

class Recomments extends PureComponent {
    render() {
        const { piclist } = this.props;
        return (
            <RecommentsWrapper>
                {
                    piclist.map(( item )=>(
                        <RecommentsItem key = {item.get('id')}  imgUrl = {item.get('imgUrl')}/>
                    ))
                }
                <Morecode>
                    <img className='code-pic' src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
                    <div className="right">
                    <p className='one'>下载简书手机APP ></p>
                    <p className='two'>随时随地发现和创作内容</p>
                    </div>
                </Morecode>
            </RecommentsWrapper>


        );
    }
}

const mapstatetoprops = (state) =>({
    piclist:state.get('home').get('recommentspic')
});

export default connect(mapstatetoprops,null)(Recomments);