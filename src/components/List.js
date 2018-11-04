import React from 'react'
import Icon from '../icon'

import { yearsSince } from '../utils'

export default props => (
	<div>
		{
		  props.items.map(tech => {
		  	const years = yearsSince(tech.released)
		  	return (
				  <p key={tech.name}>
				    <a target={tech.link ? "_blank": ""} 
				    	rel='noopener noreferrer' 
				    	href={tech.link ? tech.link: '#'}>
				      <Icon icon={tech.icon} />
				      <strong>{tech.name}</strong>
				    </a> has been out for <strong>{ years < 1 ? 'less than a' : years} year{years > 1 ? 's' : ''}</strong>
				  </p>	  
			  )	
		  })
		}
	</div>
)