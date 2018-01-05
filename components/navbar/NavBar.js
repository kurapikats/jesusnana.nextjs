import React, { Component } from 'react'

class NavBar extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav()
  }

  render() {
    return (
      <div id="top" className="scrollspy navbar-fixed">
        <nav>
          <div className="nav-wrapper brown">
            <a href="#top" className="brand-logo left waves-effect" style={{ marginLeft: 10 }}>
              Jesus B. Nana
              <span className="hide-on-med-and-down">&nbsp;&raquo; Business App Programmer</span>
            </a>
            <ul className="right">
              <li>
                <a href="#contact" className="waves-effect">
                  <i className="material-icons left hide-on-med-and-down">phone</i>
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" data-activates="slide-out" className="button-sidenav waves-effect">
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
