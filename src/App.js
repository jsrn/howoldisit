import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      technologies: [
        { name: "Ember.js", released: new Date(2011, 12, 8) },
        { name: "Node.js", released: new Date(2009, 5, 27) },
        { name: "React", released: new Date(2013, 5, 29) },
        { name: "Ruby", released: new Date(1995, 12, 21) },
        { name: "Ruby on Rails", released: new Date(2005, 12, 21) },
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
        <tr key={this.state.technologies[i].name} style={this.rowStyle(this.state.technologies[i].name)}>
          <td>{this.state.technologies[i].name}</td>
          <td>{this.daysSince(this.state.technologies[i].released)} years</td>
        </tr>
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
          <table>
            <thead>
              <tr>
                <th>Technology</th>
                <th>How Long Has It Been Out?</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}

export default App;
