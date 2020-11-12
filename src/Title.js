import React, {Component} from 'react';
import problems from './problems'
import './asset/Title.css'

class Title extends Component {
    state = {
        problems
    };

    componentDidMount(){
        //this._getProblem();
    }

    // _renderProblem = () => {

    // }

    // _getProblem = async () => {
    //     const problem = await this._callApi();
    //     this.setState({
    //         problem
    //     });
    // };

    // _callApi = () => {
    //     return fetch("")
    //     .then((response) => response.json())
    //     .then((json) => json.data.problem)
    //     .catch((err) => console.log(err));
    // };

    render(){
        return(
            <div className="title">
                {this.state.problems[0].title}
            </div>
        );
    }
}

export default Title;