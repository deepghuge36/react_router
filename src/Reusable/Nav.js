import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/names'>Home</Link>
        <ul>
          <li><Link to='/names'>Names</Link></li>
          <li><Link to='/details_page'>Details Page</Link></li>          
        </ul>
        
      </nav>
    )
  }
}
