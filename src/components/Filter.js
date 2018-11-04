import React from 'react'

export default props => (
	<div className='Filter'>
	  <p className='Filter__title'>Order Tech by </p>
	  <select>
	    <option value='nameaz'>Name A-Z</option>
	    <option value='nameza'>Name Z-A</option>
	    <option value='ageasc'>Age Asc</option>
	    <option value='agedesc'>Age Desc</option>
	  </select>	  
	</div>
)