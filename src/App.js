import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Icon from './icon';
import Fuse from 'fuse.js'

import Filter from './components/Filter'

class App extends Component {
  delayTimer = null

  state = {
    filter: "",
    sortBy: "tech",
    orderDesc: false,    
    items: technologies
  }

  fuse = new Fuse(technologies, {
    shouldSort: true,
    keys: [
      "name"
    ]
  })
  
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

  yearsSince = (date) => {
    return Math.floor((new Date() - new Date(date)) / (365 * 60 * 24 * 1000 * 60));
  }

  handleSort = (e) => {
    const value = e.target.value    
    this.setState({
      sortBy: value.split('_')[0],
      orderDesc: value.split('_')[1] === 'desc'
    })
    setTimeout(() => { // Wait for update state
      this.orderTechnologies()
    }, 10)
  }

  orderTechnologies = () => {        
    const { orderDesc, sortBy, items } = this.state
    let sortedItems = items.slice(0)    
    if(sortBy === 'name'){
      sortedItems.sort((a, b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if (aName > bName) return orderDesc ? -1 : 1;
        if (aName < bName) return orderDesc ? 1 : -1;
        return 0;
      });
    }else { // sort by age
      sortedItems.sort((a, b) => {
        let aRel = a.released;
        let bRel = b.released;
        if (aRel > bRel) return orderDesc ? 1 : -1;
        if (aRel < bRel) return orderDesc ? -1 : 1;
        return 0;
      });
    }

    this.setState({
      items: sortedItems
    })
  }

  render() {
    let options = [];
   
    for (let i = 0; i < this.state.items.length; i++) {     
      options.push(
         <option key={this.state.items[i].name} value={this.state.items[i].name} />
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
          <Filter
            handleSort={this.handleSort} />
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
