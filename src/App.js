import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Icon from './icon';

import Fuse from 'fuse.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: "",
      sortBy: "tech",
      orderDesc: false,
      technologies,
      items: technologies
    };

    this.fuse = new Fuse(technologies, {
      keys: [
        "name"
      ]
    })
  }
  delayTimer = null

  filterChanged = (event) => {
    clearTimeout(this.delayTimer)
    const searchWord = event.target.value
    this.delayTimer = setTimeout(() => {           
      if(searchWord.length) {
        const items = this.fuse.search(searchWord)      
        this.setState({
          items: items
        })
        return;
      }
      this.setState({
        filter: searchWord,
        items: technologies // Show all technologies if not searching
      })      
    }, 200)
  }

  yearsSince(date) {
    return Math.floor((new Date() - new Date(date)) / (365 * 60 * 24 * 1000 * 60));
  }

  handleSort = (e) => {
    let sortBy = this.state.sortBy;
    let newSort = e.target.innerText.toLowerCase();
    let orderDesc = this.state.orderDesc;
  
    this.setState({
      orderDesc: sortBy === newSort ? !orderDesc : false,
      sortBy: newSort
    }, () => this.orderTechnologies());
  }

  orderTechnologies(){
    let techList = JSON.parse(JSON.stringify(this.state.technologies));
    let orderDesc = this.state.orderDesc;

    if(this.state.sortBy === 'tech'){
      techList.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if (aName > bName) return orderDesc ? -1 : 1;
        if (aName < bName) return orderDesc ? 1 : -1;
        return 0;
      });
    }else{
      techList.sort((a, b) => {
        let aRel = a.released;
        let bRel = b.released;
        if (aRel > bRel) return orderDesc ? 1 : -1;
        if (aRel < bRel) return orderDesc ? -1 : 1;
        return 0;
      });
    }

    this.setState({
      technologies: techList
    });
  }

  render() {
     let rows = [];
     let options = [];
   
    for (let i = 0; i < this.state.technologies.length; i++) {     
      options.push(
         <option key={this.state.technologies[i].name} value={this.state.technologies[i].name} />
       )
     }
    const { items } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>How long has <input id="tech-dropdown" type="search" list="technologies" placeholder="react, vue, ember, etc." onChange={this.filterChanged} /> existed?
            <datalist id="technologies">
              {options}
            </datalist> </h1>
        </header>

        <main>
          <p>This is a handy tool for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months.</p>
          
          <div className="inline">
            <p className="inline">Order by </p>
            <div className={this.state.sortBy === "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Tech
            </div>
            {this.state.sortBy === "tech" && <div className={this.state.orderDesc ? "arrow arrow-down" : "arrow arrow-up"} />}
            <p className="inline">, </p>           
            <div className={this.state.sortBy !== "tech" ? "inline bold" : "inline"} onClick={this.handleSort}>
              Age
            </div>
            {this.state.sortBy !== "tech" && <div className={this.state.orderDesc ? "arrow arrow-down" : "arrow arrow-up"} />}
          </div>    

          {
            items.map(tech => 
              <p key={tech.name}>
                <a target={tech.link ? "_blank": ""} rel='noopener noreferrer' href={tech.link ? tech.link: '#'}>
                  <Icon icon={tech.icon} />
                  <strong>{tech.name}</strong>
                </a> has been out for <strong>{this.yearsSince(tech.released) < 1 ? 'less than a' : this.yearsSince(tech.released)} year{this.yearsSince(tech.released) > 1 ? 's' : ''}</strong>
              </p>
            )
          }

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
