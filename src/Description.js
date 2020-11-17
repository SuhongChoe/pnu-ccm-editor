import React, {Component} from 'react';
import problems from './problems'
import './asset/Description.css'


class Description extends Component {
    state = {
        problems
    };

    render(){
        return(
            <div className={this.props.display? "des":"des_none"} style={{whiteSpace: 'pre-line'}}>
                <p>{this.state.problems[0].description}</p>
    
                <p id="bold">입력</p>
                <p>{this.state.problems[0].input}</p>
                <p id="bold">출력</p>
                <p>{this.state.problems[0].output}</p>
    
                {this.state.problems[0].example.map((ex,index)=><Example ex={ex} index={index} key={index}/>)}
                
                <p>⋇ 입출력 형식을 잘 지켜주세요</p>
            </div>
        );
    }
}

function Example({ex,index}){
    return(
        <div className="Example">
            <div id="bold">예시{index+1}</div>
            <div>입력</div>
            <div id="box">{ex[0]}</div>
            <div>출력</div>
            <div id="box">{ex[1]}</div>
        </div>
    );
}

export default Description;