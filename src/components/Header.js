import React from 'react'

export default props => (
	<header className="App-header">
	  <h1>How long has <input id="tech-dropdown" type="search" list="technologies" placeholder="react, vue, ember, etc." onChange={props.onChange} /> existed?
	    <datalist id="technologies">
	      {props.options}
	    </datalist> </h1>
	</header>
)