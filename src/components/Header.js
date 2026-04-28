import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image}from 'react-bootstrap';
const Header= () => {
    return(
        <header>
            <Navbar className='navbar-style' expands="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Image className='logo-img-style'
                        src='images/logo.png' alt="VTU"roundedCircle/>
                        <h6 className='logo-text-style'>Visvesvaraya Technological University,Belagavi</h6>

                    </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mlauto">
                            
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <NavDropdown title="Academic"id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Circulars and Notifications</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
                                    
                                </NavDropdown>
                                 <NavDropdown title="Examination"id="basic-nav-dropdown"> 
                                    <NavDropdown.Item href="#action/3.1">Examination Guidelines</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Examination Application</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
                                    
                                </NavDropdown>
                                
                                 <NavDropdown title="VTU Departments"id="basic-nav-dropdown"> 
                                    <NavDropdown.Item href="#action/3.1">Civil Engg</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Computer Science</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Electronic and Communication Engg</NavDropdown.Item>
                                    
                                </NavDropdown>

                                <NavDropdown title="Staff Login"id="basic-nav-dropdown"> 
                                    <NavDropdown.Item href="#action/3.1">Login as Admin</NavDropdown.Item>
                                    
                                    
                                </NavDropdown>

                        </Nav>

      
                    </Navbar.Collapse>
                                                           
                </Container>
                
            
            
              

            </Navbar>
        </header>
    )

}
export default Header