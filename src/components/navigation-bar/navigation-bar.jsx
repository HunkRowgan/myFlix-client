import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const NavigationBar = ({user, onLoggedOut}) => {
    return (
<Navbar className="my-navbar shadow-lg ">
       
       <Navbar.Brand style={{padding: '10px'}}> MYFLIX
       </Navbar.Brand>
       <Navbar.Collapse className="justify-content-end">
         <Nav>
           {!user && (
             <>
               <Nav.Link className="nav-link" as={Link} to="/login">
                 Login
               </Nav.Link>
               <Nav.Link className="nav-link" as={Link} to="/signup">
                 Signup
               </Nav.Link>
             </>
           )}

     </Nav> 
     </Navbar.Collapse >
     <Nav >
           {user && (
             <>
               <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
               <Nav.Link className="nav-link" as={Link} to="/profile">My Profile</Nav.Link>
               <Nav.Link className="nav-link" onClick={onLoggedOut}>Logout</Nav.Link>
             </>
           )}
           
     </Nav>
      </Navbar>

    )
}