import React, { Component, Fragment } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'

import NavBar from '../components/navbar/NavBar'
import SideNav from '../components/sidenav/SideNav'

export default class Home extends Component {
  componentDidMount() {
    $('.button-sidenav').sideNav({
      edge: 'right',
      closeOnClick: true,
      draggable: true,
    })

    $('.scrollspy').scrollSpy()

    ReactGA.initialize('UA-111998172-1');
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    return <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Jesus B. Nana &raquo; Business App Programmer</title>
        <meta name="description" content="Onin's Official Webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
      </Head>

      <NavBar />
      <SideNav />

      <div className="row flow-text">
        <div className="col s12">
          <h4 id="professional-attributes" className="section scrollspy">Professional Attributes</h4>
          <ul className="browser-default">
            <li>Devoted learner; have insatiable appetite to gain and apply new knowledge.</li>
            <li>A high-energy, enthusiastic and dependable individual who excels in challenging and competitive environments.</li>
            <li>Proven ability to work independently, competent in setting priorities, handle simultaneous projects, and meet deadlines.</li>
            <li>Proven effective and versatile skills in problem solving.</li>
            <li>A loyal, team-spirited individual, able to effectively gain confidence of people.</li>
          </ul>

          <h4 id="technical-skills" className="section scrollspy">Technical Skills</h4>
          <ul className="browser-default">
            <li><strong>Job Titles</strong>
              <ul className="browser-default">
                <li>Business App Programmer, Web Developer, Android App Developer, iOS App Developer, Mobile App Developer, Backend Developer, Frontend Developer, Web Master, Software Programmer, Computer Programmer</li>
              </ul>
            </li>

            <li><strong>Programming &amp; Scripting</strong>
              <ul className="browser-default">
                <li>Javascript (ES2015+), PHP, Java, Python, SQL</li>
              </ul>
            </li>

            <li><strong>Methodologies</strong>
              <ul className="browser-default">
                <li>Functional, OOP, Design Patterns, UML, Waterfall, Agile, Scrum</li>
              </ul>
            </li>

            <li><strong>Tools &amp; Technologies</strong>
              <ul className="browser-default">
                <li>Redux, NativeScript, MeteorJs, MantraJs, ReactJs, Laravel, Twitter Bootstrap, JQuery, Drupal</li>
                <li>Nginx, Apache, Lighttpd, SSH, XAMPP, Atom, Vim, VSCode, HTML5, Smarty, Material Design</li>
                <li>Git, Subversion, tmux, Firefox and Firebug, LESS, Google Search and APIs</li>
                <li>npm, yarn, PEAR, PECL, Doctrine, Composer, Bower, Memcached</li>
                <li>XML, SOAP, REST, WAP, GSM-SMS, AJAX, Web2.0, Modernizr</li>
                <li>Appnexus API, Selenium, PHPUnit, Browserify, Webpack</li>
                <li>Adobe Photoshop, Dreamweaver, MS Office, Cygwin, VirtualBox, Docker</li>
                <li>Manage Amazon Servers and APIs, EC2, S3, Cloudfront CDN, Heroku, DigitalOcean</li>
              </ul>
            </li>

            <li><strong>Operating Systems</strong>
              <ul className="browser-default">
                <li>Linux (Debian, Centos), FreeBSD, MSWindows, MacOSX</li>
              </ul>
            </li>

            <li><strong>Databases</strong>
              <ul className="browser-default">
                <li>MySQL, MariaDB, MongoDB, PostgreSQL</li>
              </ul>
            </li>

            <li><strong>Others</strong>
              <ul className="browser-default">
                <li>Hardware and software troubleshooting</li>
                <li>Router, LAN Management</li>
              </ul>
            </li>
          </ul>

          <h4 id="company-work" className="section scrollspy">Company Work &amp; Responsibilities</h4>
          <ul className="browser-default">
            <li><strong>PrimaCard Philippines (2017)</strong>
              <ul className="browser-default">
                <li>Planned and designed the whole system for PrimaCard Platform</li>
                <li>Developed backend payment API system in Amazon Web Services</li>
                <li>Developed Two-factor One-Time Password (OTP) Token authentication method</li>
                <li>Integrated with third party SMS provider for customer notification system</li>
                <li>Integrated Quick Response (QR) Code scanning system</li>
                <li>Integrated Near-Field Communication (NFC) Card ID detection system</li>
                <li>Integrated Keycloak Access Management System on API endpoints</li>
                <li>Developed Android App for clients and supervisor</li>
                <li>Developed WebTools for Clients and System Administrators</li>
                <li>Planned and designed DiscountKiosk platform</li>
              </ul>
            </li>

            <li><strong>Metrobank Philippines (2016)</strong>
              <ul className="browser-default">
                <li>Developed “Insights” Content Management System</li>
              </ul>
            </li>

            <li><strong>AdGent Digital (2010 - 2015)</strong>
              <ul className="browser-default">
                <li>Developed Internal Content Management System</li>
                <li>Developed and maintain company website adgentdigital.com</li>
                <li>Developed Video Overlay Ad Manager / Player</li>
                <li>Developed HTML5 Ad Manager / Viewer</li>
                <li>Developed VAST/VPAID Player</li>
                <li>Developed HTML5 AdTouch Advertisements for clients</li>
                <li>Developed AdTouch Framework - Ad management and monitoring tool</li>
                <li>Developed custom mass mailer notification system</li>
              </ul>
            </li>

            <li><strong>Modelworks Philippines (2009 - 2010)</strong>
              <ul className="browser-default">
                <li>Converted backend of WarPlanes.com from ASP to PHP</li>
                <li>Developed custom mass mailer notification system</li>
              </ul>
            </li>

            <li><strong>Gameloft Philippines (2009)</strong>
              <ul className="browser-default">
                <li>Developed in-house Time Attendance System</li>
                <li>Bug fixing of existing internal office tools</li>
              </ul>
            </li>

            <li><strong>AmPhil Technologies Inc. (2009)</strong>
              <ul className="browser-default">
                <li>Developed CMS for Drag Racing Social Networking dragfools.com</li>
                <li>Developed Personalized Legal Services Online LawFirmAtHome.com</li>
                <li>Data mining and site scraping</li>
                <li>Maintenance of Company website amphiltech.com</li>
              </ul>
            </li>

            <li><strong>Monark Customs Brokerage (2008 - 2009)</strong>
              <ul className="browser-default">
                <li>Developed BalikBayanBox Tracking System</li>
                <li>Created custom mass mailer notification system</li>
                <li>Created Company website monarkworldwide.com</li>
              </ul>
            </li>

            <li><strong>Digital Media Exchange (2006 - 2008)</strong>
              <ul className="browser-default">
                <li>Planned, designed and developed Customer Relationship Management System</li>
                <li>Converted Photoshop PSD files to HTML to create static web pages</li>
                <li>Optimized Images for websites</li>
                <li>Integrated third party SMS provider to our custom notification systems</li>
                <li>Integrated Paypal payment system to mobiusonline.net e-Pin store</li>
                <li>Developed CMS for company and game websites – dmii.net, muonline.ph, gunbound.ph, mobiuskids.net, mobiusgames.net, mobiusonline.net</li>
                <li>Developed Java app - Café of Choice (COC) IP Updater</li>
              </ul>
            </li>

            <li><strong>University of the Philippines Manila (2004 - 2006)</strong>
              <ul className="browser-default">
                <li>Participated in the development of CRS/SRS Online Enrollment System</li>
                <li>Created database migration scripts for DB2 Databases to PostgreSQL</li>
                <li>Created custom mass mailer notification system</li>
                <li>Update and maintain UPM official website</li>
              </ul>
            </li>

            <li><strong>Micro Computer Leader (MCL) Distributors Inc. (2000 - 2004)</strong>
              <ul className="browser-default">
                <li>Troubleshoot Network and Internet connection problem</li>
                <li>Hardware, OS Software Installation, Microsoft Office, Adobe Products, etc.</li>
                <li>Linux Server Installation, configuration and management</li>
                <li>Hardware and Software maintenance</li>
              </ul>
            </li>
          </ul>

          <h4 id="software-development" className="section scrollspy">Software Development Expertise</h4>
          <ul className="browser-default">
            <li>Architecture Planning, Using Best Practices and Production Deployment</li>
            <li>Integrate systems, internal and external applications to third party APIs</li>
            <li>Design and develop scalable platform structures</li>
            <li>Design database structures, horizontal system scaling</li>
            <li>Create Isomorphic Applications</li>
            <li>Real-time web application development</li>
            <li>Native iOS and Android App Development</li>
            <li>Hybrid Mobile App Development using Apache Cordova</li>
            <li>Create tools and utilities to automate repetitive tasks</li>
            <li>Manage Domains and Linux Web Servers</li>
            <li>Convert PSD files to HTML, image optimizations for Web</li>
          </ul>

          <h4 id="work-experiences" className="section scrollspy">Work Experiences</h4>
          <table className="bordered striped highlight">
            <tbody>
              <tr>
                <td>Mar 2016 – Aug 2016</td>
                <td>Metrobank Philippines</td>
                <td className="hide-on-small-only">Makati Ave., Makati</td>
                <td><em><strong>Senior Software Developer</strong></em></td>
              </tr>
              <tr>
                <td>Sep 2010 – Mar 2015</td>
                <td>AdGent Digital Inc.</td>
                <td className="hide-on-small-only">Ayala, Makati</td>
                <td><em><strong>Senior Software Developer</strong></em></td>
              </tr>
              <tr>
                <td>Mar 2016 – Aug 2016</td>
                <td>Metrobank Philippines</td>
                <td className="hide-on-small-only">Makati Ave., Makati</td>
                <td><em><strong>Senior Software Developer</strong></em></td>
              </tr>
              <tr>
                <td>Sep 2009 – Sep 2010</td>
                <td>ModelWorks Philippines</td>
                <td className="hide-on-small-only">Pasong Tamo, Makati</td>
                <td><em><strong>Senior Full-Stack Developer</strong></em></td>
              </tr>
              <tr>
                <td>Mar 2009 – Sep 2009</td>
                <td>Gameloft Philippines</td>
                <td className="hide-on-small-only">Buendia, Makati</td>
                <td><em><strong>Senior PHP Developer</strong></em></td>
              </tr>
              <tr>
                <td>Feb 2009 – Sep 2009</td>
                <td>AmPhil Tech Inc.</td>
                <td className="hide-on-small-only">AFOVAI, Taguig</td>
                <td><em><strong>Senior Web Developer</strong></em></td>
              </tr>
              <tr>
                <td>Feb 2008 – Feb 2009</td>
                <td>Monark Customs Brokerage</td>
                <td className="hide-on-small-only">BF Homes, Paraňaque</td>
                <td><em><strong>Lead Web Developer</strong></em></td>
              </tr>
              <tr>
                <td>Feb 2006 – Feb 2008</td>
                <td>Digital Media Exchange (Mobius)</td>
                <td className="hide-on-small-only">Fort Bonifacio, Taguig</td>
                <td><em><strong>Web Developer</strong></em></td>
              </tr>
              <tr>
                <td>Mar 2004 – Jan 2006</td>
                <td>University of the Philippines</td>
                <td className="hide-on-small-only">Ermita, Manila</td>
                <td><em><strong>Junior Web Developer</strong></em></td>
              </tr>
              <tr>
                <td>Dec 2000 – Jan 2004</td>
                <td>MCL Distributors Inc.</td>
                <td className="hide-on-small-only">San Antonio, Makati</td>
                <td><em><strong>Technical Support Engineer</strong></em></td>
              </tr>
            </tbody>
          </table>

          <h4 id="certifications" className="section scrollspy">Certifications</h4>
          <table className="bordered centered highlight responsive-table">
            <tbody>
              <tr>
                <td><img src="/static/img/certificates/csharp.gif" alt="C#" /></td>
                <td><img src="/static/img/certificates/css3.gif" alt="CSS 3" /></td>
                <td><img src="/static/img/certificates/html5.gif" alt="HTML 5" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/htmlprogrammer.gif" alt="HTML 4.0" /></td>
                <td><img src="/static/img/certificates/javascript18.gif" alt="Javascript 1.8" /></td>
                <td><img src="/static/img/certificates/linuxadministrator.gif" alt="Linux Administration (General)" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/ooconcepts.gif" alt="OO Concepts" /></td>
                <td><img src="/static/img/certificates/oodesignpatterns.gif" alt="OO Design Patterns" /></td>
                <td><img src="/static/img/certificates/php5.gif" alt="PHP 5" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/php53.gif" alt="PHP 5.3" /></td>
                <td><img src="/static/img/certificates/php54.gif" alt="PHP 5.4" /></td>
                <td><img src="/static/img/certificates/php55.gif" alt="PHP 5.5" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/programmingconcepts.gif" alt="Programming Concepts" /></td>
                <td><img src="/static/img/certificates/python24.gif" alt="Python 2.4" /></td>
                <td><img src="/static/img/certificates/rdbmsdeveloper.gif" alt="RDBMS Concepts" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/sqlansi.gif" alt="SQL (ANSI)" /></td>
                <td><img src="/static/img/certificates/visualbasic2008fundamentals.gif" alt="Visual Basic 2008 Fundamentals" /></td>
                <td><img src="/static/img/certificates/webdesignconcepts.gif" alt="Web Design Concepts" /></td>
              </tr>
              <tr>
                <td><img src="/static/img/certificates/webdevelopmentconcepts.gif" alt="Web Development Concepts" /></td>
                <td><img src="/static/img/certificates/xhtml11.gif" alt="XHTML 1.1" /></td>
                <td><img src="/static/img/certificates/webdeveloperbcip.gif" alt="Web Developer (BCIP)" /></td>
              </tr>
            </tbody>
          </table>

          <h4 id="projects" className="section scrollspy">Projects</h4>
          <ul className="collection">
            <li className="collection-item">
              <a href="http://www.github.com/kurapikats" target="_blank">My Github Projects</a>
            </li>
            <li className="collection-item">
              <a href="http://dcman.depedcapiz.ph" target="_blank">DepEd Capiz Document Tracking System</a>
            </li>
            <li className="collection-item">
              <a href="https://itunes.apple.com/us/app/acta-medica-ph/id1220666080?mt=8" target="_blank">Acta Medica Philippina IOS App</a>
            </li>
            <li className="collection-item">
              <a href="https://play.google.com/store/apps/details?id=com.ph.actamedicaphilippina" target="_blank">Acta Medica Philippina Android App</a>
            </li>
            <li className="collection-item">
              <a href="http://www.taxicomplaints.net" target="_blank">Taxi Complaints Philippines</a>
            </li>
            <li className="collection-item">
              <a href="http://www.redwoodhill.com" target="_blank">Redwood Hill Farm & Creamery</a>
            </li>
            <li className="collection-item">
              <a href="http://www.actamedicaphilippina.com.ph" target="_blank">National Health Science Journal</a>
            </li>
            <li className="collection-item">
              <a href="http://www.upm.edu.ph" target="_blank">UP Manila Official Website</a>
            </li>
            <li className="collection-item">
              <a href="http://crs2.upm.edu.ph" target="_blank">UPM Online Student Registration</a>
            </li>
          </ul>

          <h4 id="character-references" className="section scrollspy">Character References</h4>
          <table className="bordered striped highlight">
            <tbody>
              <tr>
                <td>
                  <a href="https://www.metrobank.com.ph/contact_us.asp" target="_blank">
                    <strong>Anthony Zamora</strong>
                  </a>
                </td>
                <td>Director (Innovations Dept.)</td>
                <td>Metrobank Main Office Philippines</td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.linkedin.com/in/cameronyuill" target="_blank">
                    <strong>Cameron Yuill</strong>
                  </a>
                </td>
                <td>Founder and CEO</td>
                <td>StrikeVideo / AdGent Digital</td>
              </tr>
              <tr>
                <td>
                  <a href="http://ph.linkedin.com/pub/rob-locke/0/1a5/455" target="_blank">
                    <strong>Robert Locke</strong>
                  </a>
                </td>
                <td>Chief Technology Officer</td>
                <td>Digital Media Exchange (Mobius)</td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.linkedin.com/in/ericpareja" target="_blank">
                    <strong>Eric Pareja</strong>
                  </a>
                </td>
                <td>Network Administrator</td>
                <td>University of the Philippines Manila</td>
              </tr>
            </tbody>
          </table>

          <h4 id="contact" className="section scrollspy">Contact</h4>
          <div>
            <i className="tiny material-icons brown-text lighten-2">email</i>&nbsp;
            <a href="mailto:jesus.nana@gmail.com" target="_blank" className="brow-text">
              jesus.nana@gmail.com
            </a>
          </div>
          <div>
            <i className="tiny material-icons brown-text lighten-2">phone</i>&nbsp;
            <span className="brown-text">+63 908 215 0659</span>
          </div>

          <p className="right" style={{ fontSize: 14 }}>Last update: Jan 5, 2018</p>

          <p className="center">* * *<br /></p>

          <div className="fixed-action-btn hide-on-med-and-down">
            <a href="#top" className="btn-floating btn-large brown accent-4 waves-effect">
              <i className="large material-icons">arrow_drop_up</i>
            </a>
          </div>

        </div>
      </div>

      <style jsx>{`
        h4 {
          color: #6d4c41
        }
        a {
          color: #4e342e
        }
      `}</style>
    </Fragment>
  }
}
