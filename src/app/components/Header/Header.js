import react, { useState, useEffect } from 'react';
import { Row, Col, Container, Form, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import SearchField from '../FormFields/SearchFields';
import OutlineButtonField from '../FormFields/OutlineButtonField';
import { AiFillHome } from 'react-icons/ai';
import { TiMessages } from 'react-icons/ti';
import { ImUserPlus } from 'react-icons/im';
import { BiNetworkChart } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import logo from '../../assets/image/logo.jpeg';
import usarAvatar from '../../assets/image/usarAvatar.png';



const Header = props => {
  const { signIn } = props;
  const [searchValue, setInputValue] = useState();
  const handleSearch = () => {

  }
  const onHandleSearchChange = () => {

  }

  const handleUserProfile = () => {

  }
  return (
    <header>
      <Container>
        <Row>
          {
            signIn === true ?
              <>
                <Col sm="5" className="pt-2 pb-2">
                  <a href="/" className="community_logo_app"><img src={logo} alt="Transition Discoveries logo" /></a>
                  <Form className="searchInline">
                    <SearchField type="text"
                      value={searchValue}
                      name="searchValue"
                      placeholder="Search..."
                      onChange={onHandleSearchChange}
                      handleSearch={handleSearch} />
                  </Form>
                </Col>
                <Col sm="7">
                  <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav>
                        <Nav.Link href="/home"><AiFillHome />Home</Nav.Link>
                        <Nav.Link href="/message"><TiMessages />Message</Nav.Link>
                        <Nav.Link href="/home"><ImUserPlus />Followers</Nav.Link>
                        <Nav.Link href="/message"><BiNetworkChart />My Network</Nav.Link>
                        <Nav.Link href="/home"><MdNotifications />Notifications</Nav.Link>
                        <NavDropdown title={<span>Welcome, <strong>Matt</strong><span className="useravatar"><img src={usarAvatar} alt="username" /></span></span>} id="basic-nav-dropdown">
                          <NavDropdown.Header>
                            <strong className="userFullName">Matthew Flanagan</strong>
                            <span className="userRoles">Senior Researcher, Adjunct Instructor, Special Education and Disability Studies</span>
                            <OutlineButtonField id="outline-custom-btn" onClick={handleUserProfile} className="outline-custom-btn" text="View Personal Profile" />
                          </NavDropdown.Header>
                          <NavDropdown.Item href="/settingsPrivacy" className="headerDropdownListItems btop">Settings & Privacy</NavDropdown.Item>
                          <NavDropdown.Item href="/myConnections" className="headerDropdownListItems">My Connections</NavDropdown.Item>
                          <NavDropdown.Item href="/messages" className="headerDropdownListItems">Messages</NavDropdown.Item>
                          <NavDropdown.Item href="/logout" className="headerDropdownLogout">LOGOUT</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>

                </Col>
              </>
              :
              <Col className="text-center ">
                <a href="/" className="community_logo"><img src={logo} alt="Transition Discoveries logo" /></a>
              </Col>
          }
        </Row>
      </Container >
    </header >
  );
}

export default Header;
