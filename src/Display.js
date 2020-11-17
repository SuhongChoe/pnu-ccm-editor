import React, {Component} from 'react';
import './asset/Display.css'

class Display extends Component{
    render(){
        return(
            <button type="button" className={this.props.display? 'Display' : 'Display_none'} onClick={this.props.changedDisplay}>
              {this.props.display? '<' : '>'}
            </button>
        );
    }
}

export default Display;