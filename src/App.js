import React,{Component} from 'react';
import './asset/App.css';
import Editor from './Editor';
import Result from './Result';
import Title from './Title';
import Description from './Description'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Title/>
        <Editor/>
        <Description/>
        <Result/>
      </div>
    );
  }
}

export default App;
