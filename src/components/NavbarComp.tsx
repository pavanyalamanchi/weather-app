import {Navbar, Container} from 'react-bootstrap'
import {WiEarthquake} from 'react-icons/wi'


const NavbarComp = () => {

    return(
        <>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
        <WiEarthquake size='sm' style={{height:'50px',width:'50px'}}/>
      Weather Retriever
      </Navbar.Brand>
    </Container>
  </Navbar>
        </>
    )
}

export default NavbarComp