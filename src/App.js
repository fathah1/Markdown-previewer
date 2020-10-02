import React, {Component} from 'react';
import './App.css';


let marked = require('marked');

class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      markdown:""
    }  
    this.handleChange =this.handleChange.bind(this)
  }

  

  handleChange(markdown){
    this.setState({markdown});
  };



  render(){ 
    let { markdown } = this.state;

    return (
    <div>
      <header>
          <h1>Mark Down Previewer</h1>
          <h2>get to know how your mark down looks</h2>  
      </header>

.     <div className="headings">
      <h3>write your markdown here</h3>
      <h3>preview will be here</h3>
      </div>
      
      <textArea value={markdown} name="md" id="editor" cols="100" rows="50" placeholder="write markdown here" onChange={(event)=>this.handleChange(event.target.value)}/>
      
      <div dangerouslySetInnerHTML= {{__html:marked(markdown)}}>
  
      </div>


    </div>
  )
  }
}

export default App;

