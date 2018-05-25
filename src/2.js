import React, {Component} from 'react';

export default class Page extends Component {
    render(){
        return (
            <div className="page" id={this.props.page}>
                <LeftContainer/>
                <RightContainer/>
            </div>
        );
    }
}

class LeftContainer extends Component{
    render() {
        return(
            <div className='left'>
                <h1>you are not</h1>
            </div>
        );
    }
}

class RightContainer extends Component{
    render() {
        return(
            <div className='right'></div>
        );
    }
}