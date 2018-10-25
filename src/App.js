import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      technologies: [
        { name: "Angular", released: new Date(2016, 9, 14) },
        { name: "AngularJS", released: new Date(2010, 10, 20) },
        { name: "Babbage Assembly", released: new Date(1971, 1, 1) },
        { name: "Ember.js", released: new Date(2011, 12, 8) },
        { name: "Javascript", released: new Date(1995, 12, 4) },
        { name: "Node.js", released: new Date(2009, 5, 27) },
        { name: "React", released: new Date(2013, 5, 29) },
        { name: "Ruby", released: new Date(1995, 12, 21) },
        { name: "Ruby on Rails", released: new Date(2005, 12, 21) },
        { name: "This project", released: new Date(2018, 10, 25) },
        { name: "Vue", released: new Date(2014, 2, 1) }
      ]
    };

    this.filterChanged = this.filterChanged.bind(this);
    this.rowStyle = this.rowStyle.bind(this);
  }

  filterChanged(event) {
    this.setState({
      filter: event.target.value
    })
  }

  rowStyle(name) {
    let style = {};

    if (name.toLowerCase().indexOf(this.state.filter.toLowerCase()) === -1) {
      style.display = "none";
    }

    return style;
  }

  daysSince(date) {
    return Math.floor((new Date() - date) / (365 * 60 * 24 * 1000 * 60));
  }

  render() {
    let rows = [];
    let options = []

    for (let i = 0; i < this.state.technologies.length; i++) {
      rows.push(
        <p key={this.state.technologies[i].name} style={this.rowStyle(this.state.technologies[i].name)}>
          <strong>{this.state.technologies[i].name}</strong> has been out for <strong>{this.daysSince(this.state.technologies[i].released)} years</strong>
        </p>
      );

      options.push(
        <option key={this.state.technologies[i].name} value={this.state.technologies[i].name} />
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>How long has <input id="tech-dropdown" type="search" list="technologies" placeholder="react, vue, ember, etc." onChange={this.filterChanged} /> existed?
            <datalist id="technologies">
              {options}
            </datalist></h1>
        </header>

        <main>
          <p>This is a handy guide for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months. We laugh at you. We all gather around at our hackathons and we laugh at you. You don't want us to laugh at you, do you?</p>
          
          {rows}
          
          <p>Missing a technology? Find this repo on <a href="https://github.com/jsrn/howoldisit">GitHub</a>. Want a piece of me? Hurl abuse on <a href="https://twitter.com/jsrndoftime">Twitter</a>.</p>
        </main>
      </div>
    );
  }
}

export default App;
