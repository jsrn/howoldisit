import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Icon from './icon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      technologies
    };

    this.filterInput = React.createRef();

    this.filterChanged = this.filterChanged.bind(this);
    this.rowStyle = this.rowStyle.bind(this);
  }

  filterChanged(event) {
    window.location.hash = event.target.value;
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

  yearsSince(date) {
    return Math.floor((new Date() - date) / (365 * 60 * 24 * 1000 * 60));
  }

  render() {
    let rows = [];
    let options = [];

    for (let i = 0; i < this.state.technologies.length; i++) {
      let years = this.yearsSince(this.state.technologies[i].released)
      rows.push(
        <p key={this.state.technologies[i].name} style={this.rowStyle(this.state.technologies[i].name)}>
          <a target={this.state.technologies[i].link ? "_blank": ""} rel='noopener noreferrer' href={this.state.technologies[i].link ? this.state.technologies[i].link: '#'}>
            <Icon icon={this.state.technologies[i].icon} />
            <strong>{this.state.technologies[i].name}</strong>
          </a> has been out for <strong>{years < 1 ? 'less than a' : years} year{years > 1 ? 's' : ''}</strong>
        </p>
      );

      options.push(
        <option key={this.state.technologies[i].name} value={this.state.technologies[i].name} />
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>How long has <input id="tech-dropdown" type="search" list="technologies" placeholder="react, vue, ember, etc." onChange={this.filterChanged} ref={this.filterInput} /> existed?
            <datalist id="technologies">
              {options}
            </datalist></h1>
        </header>

        <main>
          <p>This is a handy tool for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months.</p>

          {rows}

          <div id="footer">
            <p>Missing a technology? Find this repo on <a href="https://github.com/jsrn/howoldisit">GitHub</a>. Want a piece of me? Hurl abuse on <a href="https://twitter.com/jsrndoftime">Twitter</a>.
            </p>
          </div>

        </main>
      </div>
    );
  }
}

export default App;
