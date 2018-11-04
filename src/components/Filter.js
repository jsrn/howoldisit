import React from 'react'

export default props => (
	<div className='Filter'>
	  <p className='Filter__title'>Order Tech by </p>
	  <select onChange={ props.handleSort }>
	    <option value='name_asc'>Name A-Z</option>
	    <option value='name_desc'>Name Z-A</option>
	    <option value='age_asc'>Age Asc</option>
	    <option value='age_desc'>Age Desc</option>
	  </select>	  
	</div>
)