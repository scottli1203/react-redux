import React, {Component} from 'react';
import Departments from './Departments';
import UserInfo from './Users';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

class AppContainer extends Component{
    render() {
        return (
            < div
        className = "container-main" >
            < Departments / >
            < UserInfo / >
            < / div >
    )
    }
}


export default AppContainer;
