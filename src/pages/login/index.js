import React,{ PureComponent } from 'react';
import { Loginwapper,
    Logincontent,
    Logincontentforthefirstsidearea,
    Label,
    Logincontentforthebottomofcenter,
    Bottom
} from './styles'
import { connect } from 'react-redux';
import * as actioncreator from'./store/actioncreator';
import { Redirect } from'react-router-dom';

class Login extends PureComponent {
    render() {
        const {loginState}=this.props;
        console.log(loginState);

                if(!loginState) {
                    return (
                        <div>
                            <Loginwapper>
                                <Logincontent>
                                    <Logincontentforthefirstsidearea>
                                        <Label>登录</Label>
                                        <b>·</b>
                                        <Label>注册</Label>
                                    </Logincontentforthefirstsidearea>

                                    <input type="text" className="input_content" name="name" placeholder="手机号或邮箱"
                                           ref={(input) => {
                                               this.account = input
                                           }}/>
                                    <input type="password" className="input_content" name="password" placeholder="密码"
                                           ref={(input) => {
                                               this.password = input
                                           }}/>

                                    <Logincontentforthebottomofcenter>
                                        <input type="checkbox" name="choice" className="choice"/> 记住我
                                        <p className="problem">登录遇到问题？</p>
                                    </Logincontentforthebottomofcenter>

                                    <Bottom onClick={() => {
                                        this.props.login(this.account, this.password)
                                    }}>
                                        登录
                                    </Bottom>
                                </Logincontent>
                            </Loginwapper>
                        </div>
                    );
                }
                else {
                    return <Redirect to ='/'/>;
                }
    }

}

const mapstatetoprops = (state) =>({
    loginState:state.get("login").get("login")
});


const mapdispatchtoprops = (dispatch) =>({
    login(account,password){
        dispatch(actioncreator.login(account.value,password.value));
    }
});

export default connect(mapstatetoprops,mapdispatchtoprops)( Login);