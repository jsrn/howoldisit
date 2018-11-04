import React, { Component } from 'react';
import technologies from './technologies';
import './App.css';
import Fuse from 'fuse.js'

import Filter from './components/Filter'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

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
      } else {
        this.setState({        
          items: technologies // Show all technologies if not searching
        })           
      }
      setTimeout(() => { // Wait for update state
        this.orderTechnologies()
      }, 10)
    }, 200)
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
    const { items } = this.state
    return (
      <div className="App">
        <Header
          options={items.slice(0, 10)}
          onChange={this.filterChanged}/>
        <main>
          <p>This is a handy tool for tech recruiters who ask for fifteen years experience in technologies that have only existed for three months.</p>
          <Filter
            handleSort={this.handleSort} />
          <List items={items}/>
          <Footer/> 
        </main>
      </div>
    );
  }
}

export default App;
