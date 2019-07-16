import  React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
    HeadWrapper,
    HeadNav,
    Nav,
    NavMiddle,
    SearchWapper,
    NavItem,
    NavSearch,
    SearchTips,
    SearchTipsHeader,
    SearchTipsHeaderTips,
    SeatchBottom,
    SeatchTipsContents,
    Addition,
    Button,
} from "./style";
import  { actionCreators } from '../../store';
import  * as LoginactionCreators from '../../pages/login/store/actioncreator';


class Header extends PureComponent {
    render() {
        const { focused,list,handleInputFocus,handleInputFocusOut,page,totalpage,handleOnMouseOver,handleOnMouseOut,mouseIn,handleOnclickChange,loginState,loginout } = this.props;
        let newlist = [];
        const changelist = list.toJS();
        if(changelist.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                if (changelist[i]) {
                    newlist.push(<SeatchTipsContents key={changelist[i]}>{changelist[i]}</SeatchTipsContents>)
                }
            }
        }
        return (
            <HeadWrapper>
                <Nav>
                    <Link to={'/'}>
                    <HeadNav />
                     </Link>
                    <NavMiddle>
                        <NavItem className = 'left active'>首页</NavItem>
                        <NavItem className = 'left'>下载APP</NavItem>

                            {
                                loginState?<NavItem className = 'right' onClick={loginout}>退出</NavItem>
                                :<Link to="/login"><NavItem className = 'right'>登录</NavItem></Link>
                            }

                        <NavItem className = 'right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWapper>

                            <CSSTransition
                                timeout={200}
                                in={focused}
                                classNames="slide"
                            >
                                <NavSearch
                                    onFocus = {()=>{handleInputFocus(list)}}
                                    onBlur = {handleInputFocusOut}
                                    className={ focused  ? 'focused':'' }/>
                            </CSSTransition>

                            <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe623;</i>

                            <SearchTips
                                onMouseEnter = {handleOnMouseOver}
                                onMouseLeave = {handleOnMouseOut}
                                className={ (focused || mouseIn ) ? 'visiable':'' }>
                                <SearchTipsHeader>
                                    <SearchTipsHeaderTips className = 'left'>热门搜索</SearchTipsHeaderTips>
                                    <SearchTipsHeaderTips
                                        onClick = {( )=> { handleOnclickChange( page,totalpage,this.spinIcon) }}
                                        className = 'right'>
                                        <i ref = {(icon)=>{this.spinIcon = icon }} className = 'spin iconfont'>&#xe851;</i>
                                        换一批</SearchTipsHeaderTips>
                                    <SeatchBottom>
                                        {newlist}
                                    </SeatchBottom>
                                </SearchTipsHeader>
                            </SearchTips>

                        </SearchWapper>
                    </NavMiddle>
                    <Addition>
                        {

                        }
                        <Link to='write'>
                        <Button className = 'write'>
                            <i className="iconfont">&#xe602;</i>
                            写文章
                        </Button>
                        </Link>
                        <Button className = 'zhuce'>注册</Button>
                    </Addition>

                </Nav>
            </HeadWrapper>
        )
    }
}



const mapStateToProps = (state) =>{
    return {
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalpage:state.get('header').get('totalpage'),
        mouseIn:state.get('header').get('mouseIn'),
        loginState:state.get('login').get('login')
    }


};

const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispath(actionCreators.getList());
            dispath(actionCreators.inputtype);
        },

        handleInputFocusOut() {
            dispath(actionCreators.blurtype);
        },
        handleOnMouseOver() {
            dispath(actionCreators.onmouseovertype);
            console.log('succ');
    },
        handleOnMouseOut() {
            dispath(actionCreators.onmouseouttype);
        },
        handleOnclickChange(page,totalpage,spin) {
            console.log(spin);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt( originAngle ,10 );
            }
            else  {
                originAngle = 0;
            }

            spin.style.transform = 'rotate('+( originAngle+360 )+'deg)';
            console.log(originAngle);
            if( page < totalpage-1 ) {
                dispath(actionCreators.onclickchangetype(page+1));
            }
            else {
                dispath(actionCreators.onclickchangetype(0));
            }

        },
        loginout(){
            dispath(LoginactionCreators.loginout());
        }
    }
};

export default connect(mapStateToProps,mapDispathToProps)(Header);