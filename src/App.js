import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import * as DataApi from './Data'


class App extends Component {

   state = {
     query:'',
     data:[]
}

componentDidMount(){
  console.log("DataApi",DataApi.Reggae);
  const data = DataApi.Reggae;
  this.setState({data:data})
}

  render() {

    let data = this.state.data?this.state.data:[]
      console.log("data",data);

    return (
      <div className="App">
        <h1>React search</h1>
        <p>here is a list of people rendered from a json object </p>
      {
        data.map(newData => <li>{ newData }</li>)
      }
      </div>
    );
  }
}

export default App;
