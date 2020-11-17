import React,{Component} from 'react';
import './asset/App.css';
import Editor from './Editor';
import Result from './Result';
import Title from './Title';
import Description from './Description'
import Display from './Display'

class App extends Component {

  constructor(){
    super();
    
    this.state = {
       display:true
    }
  }

  changedDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    return (
      <div className={this.state.display ? 'App' : 'App_display_none'}>
        <Title/>
        <Editor/>
        <Description display={this.state.display}/>
        <Display display={this.state.display} changedDisplay={this.changedDisplay}/>
        <Result/>
      </div>
    );
  }
}

export default App;
