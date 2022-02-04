
import React from 'react';
import  { Navbar, Nav,  }  from 'react-bootstrap/'


const Navi = () => {
  return (
  <div>
      <Navbar bg='dark' variant='dark' sticky='top' expand='lg' collapseOnSelect>
         <Navbar.Brand>
             {/* <img src={logo} /> */}
             Junior's Portfolio
         </Navbar.Brand>

         <Navbar.Toggle />
         <Navbar.Collapse>
         <Nav>
           <Nav.Link href='home'>Home</Nav.Link>
           <Nav.Link href='portfolio'>Portfolio</Nav.Link>
           <Nav.Link href='about'>About</Nav.Link>
           <Nav.Link href='contact'>Contact</Nav.Link>
         </Nav>
         </Navbar.Collapse>
         
      </Navbar>
  </div>
  )
};

export default Navi;
