import React, { Component } from 'react';



class App extends Component {

   state = {
     data:
     {
           "reggae": [
           "The Abyssinians",
           "The Aces",
           "Glen Adams",
           "Admiral T",
           "Yasus Afari",
           "African Brothers",
           "The Aggrovators",
           "Aisha",
           "Bobby Aitken",
           "Laurel Aitken",
           "Alaine",
           "Alborosie"
         ]
     }

}
  render() {
    return (
      <div className="App">
        <h1>React search</h1>
        <p>here is a list of people rendered from a json object </p>
        {this.state.data.reggae.map(data => <li>{data}</li>
        )}

      </div>
    );
  }
}

export default App;
