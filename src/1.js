import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

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
                <h1>Hi, I'm Matt</h1>
                <h2>Here I am on top of the world</h2>
            </div>
        );
    }
}

class RightContainer extends Component{
    render() {
        let imageUrl = "/img/whitney.jpg";
        return(
            <div className='right'>
                <div className='img' style={{'backgroundImage':`url(${imageUrl})`}}/>
            </div>
        );
    }
}