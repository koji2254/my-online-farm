import React from 'react'
import { NavLink } from 'react-router-dom'

const PageTitle = ({title, url}) => {
  return (
    <div className='shadow p-3 py-1.5'>
        { url &&  
            <NavLink to={`${url}`}>
                <i className="fa-solid fa-chevron-left p-2 text-gray-600"></i>
            </NavLink>
        }
      
      <span className='text-gray-700 font-semibold'>{title}</span>  
    </div>
  )
}

export default PageTitle
