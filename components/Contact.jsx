import React, { Fragment } from 'react'

const Contact = () => (
  <Fragment>
    <h5 id="contact" className="cont section scrollspy">
      Contact
    </h5>
    <div className="cont">
      <i className="tiny material-icons brown-text lighten-2">email</i>&nbsp;
      <a
        href="mailto:jesus.nana@gmail.com"
        target="_blank"
        className="brow-text"
      >
        jesus.nana@gmail.com
      </a>
    </div>
    <div className="cont">
      <i className="tiny material-icons brown-text lighten-2">phone</i>&nbsp;
      <span className="brown-text">+63 995 643 3610</span>
    </div>      
  </Fragment>
)

export default Contact
