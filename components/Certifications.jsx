import React, { Fragment } from 'react'

const Certifications = () => (
  <Fragment>
    <h5 id="certifications" className="cer section scrollspy">
      Certifications
    </h5>
    <table
      id="certifications-table"
      className="centered highlight responsive-table"
    >
      <tbody>
        <tr>
          <td>
            <img src="/static/img/certificates/csharp.gif" alt="C#" />
          </td>
          <td>
            <img src="/static/img/certificates/css3.gif" alt="CSS 3" />
          </td>
          <td>
            <img
              src="/static/img/certificates/html5.gif"
              alt="HTML 5"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/javascript18.gif"
              alt="Javascript 1.8"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/linuxadministrator.gif"
              alt="Linux Administration (General)"
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/static/img/certificates/ooconcepts.gif"
              alt="OO Concepts"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/oodesignpatterns.gif"
              alt="OO Design Patterns"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/php56.gif"
              alt="PHP 5.6"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/programmingconcepts.gif"
              alt="Programming Concepts"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/python24.gif"
              alt="Python 2.4"
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/static/img/certificates/rdbmsdeveloper.gif"
              alt="RDBMS Concepts"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/sqlansi.gif"
              alt="SQL (ANSI)"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/webdesignconcepts.gif"
              alt="Web Design Concepts"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/webdevelopmentconcepts.gif"
              alt="Web Development Concepts"
            />
          </td>
          <td>
            <img
              src="/static/img/certificates/webdeveloperbcip.gif"
              alt="Web Developer (BCIP)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </Fragment>
)

export default Certifications
