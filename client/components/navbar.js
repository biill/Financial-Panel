import React from 'react'
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from 'react-bootstrap'

var {SocialIcon} = require('react-social-icons')

const header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Financial Panel</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/stock">
          Stock
        </NavItem>
        <NavItem eventKey={3} href="/currency">
          Currency
        </NavItem>
        <NavItem eventKey={4} href="/crypto">
          Cryptocurrencies
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown
          eventKey={1}
          title="Portfolio Page"
          id="basic-nav-dropdown"
        >
          <MenuItem eventKey={1.1} href="https://biill.github.io/">
            <SocialIcon
              url="https://biill.github.io/"
              style={{height: 25, width: 25}}
            />
            My Portfolio
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey={1.2}
            href="https://www.linkedin.com/in/shan-tang-mba-49074831/"
          >
            <SocialIcon
              url="http://linkedin.com/in/shan-tang-mba-49074831"
              style={{height: 25, width: 25}}
            />
            My LinkedIn
          </MenuItem>
          <MenuItem eventKey={1.3} href="https://github.com/biill">
            <SocialIcon
              url="https://github.com/biill"
              style={{height: 25, width: 25}}
            />
            My Github
          </MenuItem>

          <MenuItem eventKey={3.3} href="https://www.facebook.com/shan.tang.39">
            <SocialIcon
              url="https://www.facebook.com/shan.tang.39"
              style={{height: 25, width: 25}}
            />
            My Facebook
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

/**
 * CONTAINER
 */

export default header
