import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import Scorecard from "./components/Scorecard/Scorecard.js";
import { Container, Col, Row } from "./components/Wrapper/Wrapper.js";
import Puppycard from "./components/Puppycard/Puppycard.js";
import puppies from "./puppies.json";

class App extends Component {
  state = {
    puppies,
    score: 0,
    topscore: 0,
    alert: "",
    clickedPuppies: []
  }


  handleOnClick = id => {
    let clickedPuppies = this.state.clickedPuppies;
    let score = this.state.score;
    let topscore = this.state.topscore;

    if(clickedPuppies.includes(id)) {
      this.setState({ clickedPuppies: [], score: 0, topscore: 0, alert: "You already guess that pup! Better luck next time." })
    } else {
      clickedPuppies.push(id)

      if (clickedPuppies === 12) {
        this.setState({ topscore: 12, alert: "You won! Nice job", clickedPuppies: [] });
      } else if (score > topscore) {
        topscore = score
      }

      this.setState({ puppies, clickedPuppies, score: clickedPuppies.length, topscore: topscore, alert: "You guessed correct! Keep going." });

      for (let i = puppies.length -1; i> 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
      [puppies[i], puppies[j]] = [puppies[j], puppies[i]];
      }
    }
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Navbar />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Scorecard score={this.state.score} topScore={this.state.topscore} correct={this.state.correctguess} wrong={this.state.wrongguess} alert={this.state.alert}/>
          </Col>
        </Row>

        <Row>
          <Col size="md-10">
            {this.state.puppies.map(puppy => (
              <Puppycard
              id={puppy.id}
              key={puppy.name}
              image={puppy.img}
              handleOnClick={this.handleOnClick}
              />
            ))}
          </Col>
        </Row>
        
        
        
        </Container>
    );
  }
}

export default App;
