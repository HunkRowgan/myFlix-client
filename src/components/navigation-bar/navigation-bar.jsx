import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const NavigationBar = ({user, onLoggedOut}) => {
    return (
       <Navbar className="my-navbar shadow-lg ">
        <Container>
        <Navbar.Brand> {/*insert image*/}
        </Navbar.Brand>
          <Nav className="me-auto">

            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}

            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}

          </Nav>
        </Container>
       </Navbar>

    )
}