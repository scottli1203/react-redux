import React,{Component} from 'react';
import {fetchAllUsers,fetchAllDeps} from '../actions'
import { connect } from 'react-redux'

class Departments extends Component{
    getDepUsers(depId){
        this.props.dispatch(fetchAllUsers(depId));

    }
    componentDidMount(){
        this.props.dispatch(fetchAllDeps());
    }
    render(){
        let data = this.props.deps;
        if(!data || JSON.stringify(data) == "{}"){
            return <div/>
        }
        return (
            <div>
                <span>选择部门：</span>
                <select className="form-control" onChange={(e) => this.getDepUsers(e.target.value)}>
                {
                    data.map((item) => {
                        let {depId, depName} = item;
                        return <option value={depId} key={depId}>{depName}</option>
                    })

                }
                </select>
           </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        deps: state.getAllDeps.departments
    }
}

export default connect(mapStateToProps)(Departments)
