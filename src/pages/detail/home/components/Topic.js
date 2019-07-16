import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,
          TopicItem,
          More
        } from '../style';

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item)=>{

                        return (<TopicItem key = {item.get('id')}>
                                    <img className="topic-pic" src={item.get('imgUrl')} alt=''/>
                                {item.get('title')}
                            </TopicItem>
                            );

                    })


                    }

                <More>
                    更多热门专题 >
                </More>
        </TopicWrapper>);
    }
}
const mapState = (state) =>({
   list:state.get('home').get('topicList'),
});

export default connect(mapState,null)(Topic);