import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import * as DataApi from './api'

// export async function fetchData() {
//   let url = 'https://gist.githubusercontent.com/shalurai/942783a364a260c66d877a0ce957afc5/raw/4ac6ce02f2ab7c4087dc42b4d507b559bb21415b/Data.json';
//   let response = await fetch(url);
//  let body = await response.json();
//  let bodyData = await body.Reggae;
//   console.log("body", bodyData);
//   return bodyData;
//
// }

export default class App extends Component {

   state = {
     query:'',
     data:[]
}


componentDidMount =() => {
 DataApi.fetchData().then(data => this.setState({data}))
}

updateQuery = (query) =>{
  this.setState(
    {query:query.trim()}
  )
}

  render() {

    let data = this.state.data?this.state.data:[]
      console.log("data",data);
      let { query }  =this.state
      let showingPeople

      if (query) {
        console.log("query", query);
        const match = new RegExp(escapeRegExp(query), 'i')
        console.log("showingDta",match);
        showingPeople = data.filter((people) => match.test(people))
        console.log("showing0",showingPeople)
      }
      else {
        showingPeople = data
        console.log("showingPeople",showingPeople);
      }

    return (
      <div className="App">
        <h1>React search</h1>
        <p>here is a list of people rendered from a json object </p>
        <input
         type='text'
         placeholder='Search People'
         value={query}
         onChange={(event) => this.updateQuery(event.target.value)}
        />
        {
          showingPeople.map((newData, index) =>
          <li key={index}>{ newData }</li>
          )
        }
      </div>
    );
  }
}
