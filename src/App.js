import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      technologies: [
        // Please maintain alphabetical order when you add a technology :)
        // Remember that months are zero-indexed in javascript date objects
        { name: "Angular", released: new Date(2016, 8, 14) },
        { name: "AngularJS", released: new Date(2010, 9, 20) },
        { name: "Babbage Assembly", released: new Date(1971, 0, 1) },
        { name: "Bash", released: new Date(1989, 5, 8) },
        { name: "BASIC", released: new Date(1964, 4, 1) },
        { name: "Bootstrap 4", released: new Date(2018, 0, 18) },
        { name: "CakePHP", released: new Date(2005, 3, 1) },
        { name: "Django", released: new Date(2005, 6, 15) },
        { name: "Drupal", released: new Date(2000, 4, 18) },
        { name: "Elixir", released: new Date(2011, 0, 1) },
        { name: "Ember.js", released: new Date(2011, 11, 8) },
        { name: "Flask", released: new Date(2010, 3, 1) },
        { name: "Go", released: new Date(2009, 9, 10) },
        { name: "Java", released: new Date(1996, 9, 10) },
        { name: "Javascript", released: new Date(1995, 11, 4) },
        { name: "jQuery", released: new Date(2006, 7, 26) },
        { name: "Kotlin", released: new Date(2016, 1, 15) },
        { name: "Laravel", released: new Date(2011, 8, 9) },
        { name: "Node.js", released: new Date(2009, 4, 27) },
        { name: "PHP", released: new Date(1995, 5, 8) },
        { name: "Python 2", released: new Date(1991, 1, 20) },
        { name: "Python 3", released: new Date(2008, 11, 3) },
        { name: "React", released: new Date(2013, 4, 29) },
        { name: "Ruby on Rails", released: new Date(2005, 11, 21) },
        { name: "Ruby", released: new Date(1995, 11, 21) },
        { name: "Sass", released: new Date(2006, 10, 28) },
        { name: "Swift", released: new Date(2014, 5, 2) },
        { name: "This project", released: new Date(2018, 9, 25) },
        { name: "TypeScript", released: new Date(2012, 9, 1) },
        { name: "Vue", released: new Date(2014, 1, 1) },
        { name: "Windows 10", released: new Date(2015, 6, 29) },
        { name: "WordPress", released: new Date(2003, 4, 27) }
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
          <p>This is a handy tool for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months.</p>

          {rows}

          <p>Missing a technology? Find this repo on <a href="https://github.com/jsrn/howoldisit">GitHub</a>. Want a piece of me? Hurl abuse on <a href="https://twitter.com/jsrndoftime">Twitter</a>.</p>
        </main>
      </div>
    );
  }
}

export default App;
