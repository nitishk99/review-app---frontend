import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Card, CardBody, CardLink, ListGroup, ListGroupItem, Nav } from 'reactstrap'

const Navbar = () => {
  return (
    <Nav className='navlink pt-5 pb-5  '>
      

      <ListGroup >
         <Link to='/' className='list-group-item list-group-item-action' > Home </Link> 
       <Link to='/addreview'className='list-group-item list-group-item-action' > Add Review </Link>
       <Link to='/viewreviews' className='list-group-item list-group-item-action' > View Reviews </Link>
      </ListGroup>
      
     
      
      
       
      
      
    </Nav>
  )
}

export default Navbar
