import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Icon from './icon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      sortBy: "tech",
      orderDesc: false,
      technologies
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

  yearsSince(date) {
    return Math.floor((new Date() - date) / (365 * 60 * 24 * 1000 * 60));
  }

  handleSort = (e) => {
    let sortBy = this.state.sortBy;
    let newSort = e.target.innerText.toLowerCase();
    let orderDesc = this.state.orderDesc;
  
    if(sortBy === newSort){
        orderDesc = !orderDesc;
    }else{
      sortBy = newSort;
      orderDesc = false;      
    }
    
    this.setState({
      orderDesc: orderDesc,
      sortBy: sortBy
    }, () => this.orderTechnologies());
  }

  orderTechnologies(){
    let techList = Object.assign([], this.state.technologies);

    if(this.state.sortBy === 'tech'){
      techList.sort((a, b) => this.state.orderDesc ? a.name.toLowerCase() < b.name.toLowerCase() : a.name.toLowerCase() > b.name.toLowerCase() )
    }else{
      techList.sort((a, b) => this.state.orderDesc ? a.released > b.released : a.released < b.released )
    }

    this.setState({
      technologies: techList
    });
  }


  render() {
    let rows = [];
    let options = [];
   
    for (let i = 0; i < this.state.technologies.length; i++) {
      let years = this.yearsSince(this.state.technologies[i].released)
      rows.push(
        <p key={this.state.technologies[i].name} style={this.rowStyle(this.state.technologies[i].name)}>
          <Icon icon={this.state.technologies[i].icon} />
          <strong>{this.state.technologies[i].name}</strong> has been out for <strong>{years < 1 ? 'less than a' : years} year{years > 1 ? 's' : ''}</strong>
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
          
          <div className="inline">
            <p className="inline">Order by </p>
            <div className={this.state.sortBy === "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Tech
            </div>
            {this.state.sortBy === "tech" && <div className={this.state.orderDesc ? "arrow-down" : "arrow-up"} />}
            <p className="inline">, </p>           
            <div className={this.state.sortBy !== "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Age
            </div>
            {this.state.sortBy !== "tech" && <div className={this.state.orderDesc ? "arrow-down" : "arrow-up"} />}
          </div>    

          {rows}

          <p>Missing a technology? Find this repo on <a href="https://github.com/jsrn/howoldisit">GitHub</a>. Want a piece of me? Hurl abuse on <a href="https://twitter.com/jsrndoftime">Twitter</a>.</p>
        </main>
      </div>
    );
  }
}

export default App;
