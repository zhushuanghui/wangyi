import React,{Component} from 'react';
export default class Dynamic extends Component{
    render(){
    return (
        <div>
            {this.props.children}
        </div>
    );
    }
}