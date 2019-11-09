import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import Scorecard from "./components/Scorecard/Scorecard.js";
import Alert from "./components/Alert/Alert.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Puppycard from "./components/Puppycard/Puppycard.js";
import puppies from "./puppies.json";

class App extends Component {
  state = {
    puppies,
    score: 0,
    topscore: 0
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Scorecard />
        <Wrapper>
          {this.state.puppies.map(puppy => (
            <Puppycard
            id={puppy.id}
            name={puppy.name}
            image={puppy.img}
            />
          ))}
        </Wrapper>
        
        
        
      </div>
    );
  }
}

export default App;
