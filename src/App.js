import React, { Component } from 'react';
import Header from "./common/header";
import { Provider } from 'react-redux';
import  { BrowserRouter , Route } from 'react-router-dom';
import { GlobalStyled } from './style';
import {GlobalStyleicon} from "./common/header/statics/iconfont/iconfont";
import Home from './pages/detail/home';
import Detail from './pages/detail/detalloadable';
import Login from './pages/login';
import store from './store';
import Write from'./pages/detail/home/components/Write';

class App extends Component {
  render() {
    return (
        <div>
            <Provider store = {store}>
                <div>
        <GlobalStyled />
                <GlobalStyleicon />
                <BrowserRouter>
                    <Header/>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/Write'exact component={Write}></Route>
                </BrowserRouter>
                </div>
            </Provider>
        </div>

    );
  }
}

export default App;
