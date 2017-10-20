import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import * as DataApi from './api'

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
            <div>
      <div className="header">
        <h1>React search</h1>
        <p>Here is a list of people rendered from a json object using Async function </p>
        </div>
       <div className='input'>
       <h3>Search</h3>
        <input
        className ="search"
         type='text'
         placeholder='Search People'
         value={query}
         onChange={(event) => this.updateQuery(event.target.value)}
        />
        </div>
        <ul>
        {
          showingPeople.map((newData, index) =>
          <li key={index}>{ newData }</li>
          )

        }
        </ul>
      </div>
    );
  }
}
