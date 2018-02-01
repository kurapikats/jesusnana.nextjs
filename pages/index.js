import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

import NavBar from '../components/navbar/NavBar';
import SideNav from '../components/sidenav/SideNav';

export default class Home extends Component {
  componentDidMount() {
    $('.button-sidenav').sideNav({
      edge: 'right',
      closeOnClick: true,
      draggable: true
    });

    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();
    $('.chips').material_chip();

    const scrollFireOptions = [
      {
        selector: '#professional-attributes',
        offset: 100,
        callback: function(el) {
          $('#professional-attributes').addClass('animated fadeIn');
        }
      },
      {
        selector: '#professional-attributes-ul',
        offset: 100,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#projects-collection',
        offset: 100,
        callback: function(el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#certifications-table',
        offset: 100,
        callback: function(el) {
          Materialize.fadeInImage('#certifications-table img');
        }
      },
      {
        selector: '.sde',
        offset: 0,
        callback: function(el) {
          $('.sde').addClass('animated fadeIn');
        }
      },
      {
        selector: '.wec',
        offset: 100,
        callback: function(el) {
          $('.wec').addClass('animated fadeIn');
        }
      },
      {
        selector: '.cer',
        offset: 100,
        callback: function(el) {
          $('.cer').addClass('animated fadeIn');
        }
      },
      {
        selector: '.pro',
        offset: 100,
        callback: function(el) {
          $('.pro').addClass('animated fadeIn');
        }
      },
      {
        selector: '.char',
        offset: 100,
        callback: function(el) {
          $('.char').addClass('animated fadeIn');
        }
      },
      {
        selector: '.cont',
        offset: 100,
        callback: function(el) {
          $('.cont').addClass('animated fadeIn');
        }
      }
    ];
    Materialize.scrollFire(scrollFireOptions);

    ReactGA.initialize('UA-111998172-1');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

    Materialize.toast(`Hello Friend! Welcome to my webpage.‎`, 3500);
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Jesus B. Nana &raquo; Business App Programmer</title>
          <meta name="description" content="Onin's Official Webpage" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>

        <NavBar />
        <SideNav />

        <div className="row">
          <div className="col s12">
            <h5 id="software-development" className="sde section scrollspy">
              Software Development Expertise
            </h5>
            <ul className="sde browser-default">
              <li>
                <strong>Job Titles</strong>
                <br />
                <div className="chip">Business App Programmer</div>
                <div className="chip">Web Developer</div>
                <div className="chip">Android App Developer</div>
                <div className="chip">iOS App Developer</div>
                <div className="chip">Mobile App Developer</div>
                <div className="chip">Backend Developer</div>
                <div className="chip">Frontend Developer</div>
                <div className="chip">Web Master</div>
                <div className="chip">Full-Stack Developer</div>
                <div className="chip">Software Engineer</div>
                <div className="chip">Computer Programmer</div>
              </li>

              <li>
                <strong>Things I can do</strong>
                <br />
                <ul className="browser-default">
                  <li>
                    Architecture Planning, Use Best Practices and Production
                    Deployment
                  </li>
                  <li>
                    Integrate systems, internal and external applications to
                    third party APIs
                  </li>
                  <li>Design and develop scalable platform structures</li>
                  <li>Design database structures, horizontal system scaling</li>
                  <li>Create Isomorphic Applications</li>
                  <li>Real-time web application development</li>
                  <li>Native iOS and Android App Development</li>
                  <li>Hybrid Mobile App Development using Apache Cordova</li>
                  <li>
                    Create tools and utilities to automate repetitive tasks
                  </li>
                  <li>Manage Domains and Linux Web Servers</li>
                  <li>
                    Convert PSD files to HTML, image optimizations for Web
                  </li>
                </ul>
              </li>

              <li>
                <strong>Programming &amp; Scripting</strong>
                <br />
                <div className="chip">Javascript (ES2015+)</div>
                <div className="chip">PHP</div>
                <div className="chip">Java</div>
                <div className="chip">Python</div>
                <div className="chip">SQL</div>
              </li>

              <li>
                <strong>Methodologies</strong>
                <br />
                <div className="chip">Functional</div>
                <div className="chip">OOP</div>
                <div className="chip">Design Patterns</div>
                <div className="chip">UML</div>
                <div className="chip">Waterfall</div>
                <div className="chip">Agile</div>
                <div className="chip">Scrum</div>
              </li>

              <li>
                <strong>Frameworks, Libraries, Tools &amp; Technologies</strong>
                <ul className="browser-default">
                  <li>
                    NodeJs, Redux, NativeScript, MeteorJs, MantraJs, ReactJs,
                    Laravel, JQuery, Drupal
                  </li>
                  <li>
                    Nginx, Apache, Lighttpd, SSH, XAMPP, Atom, Vim, VSCode,
                    HTML5, Smarty, Material Design
                  </li>
                  <li>
                    Git, Subversion, tmux, Firefox and Firebug, LESS, Twitter
                    Bootstrap, Google Search and APIs
                  </li>
                  <li>
                    npm, yarn, PEAR, PECL, Doctrine, Composer, Bower, Memcached
                  </li>
                  <li>
                    XML, SOAP, REST, WAP, GSM-SMS, AJAX, Web2.0, Modernizr
                  </li>
                  <li>Appnexus API, Selenium, PHPUnit, Browserify, Webpack</li>
                  <li>
                    Adobe Photoshop, Dreamweaver, MS Office, Cygwin, VirtualBox,
                    Docker
                  </li>
                  <li>
                    Manage Amazon Servers and APIs, EC2, S3, Cloudfront CDN,
                    Heroku, DigitalOcean
                  </li>
                </ul>
              </li>

              <li>
                <strong>Operating Systems</strong>
                <br />
                <div className="chip">Linux (Debian, Centos)</div>
                <div className="chip">FreeBSD</div>
                <div className="chip">MSWindows</div>
                <div className="chip">MacOSX</div>
              </li>

              <li>
                <strong>Databases</strong>
                <br />
                <div className="chip">MySQL</div>
                <div className="chip">MariaDB</div>
                <div className="chip">MongoDB</div>
                <div className="chip">PostgreSQL</div>
              </li>

              <li>
                <strong>Others</strong>
                <br />
                <div className="chip">Hardware Troubleshooting</div>
                <div className="chip">Software Troubleshooting</div>
                <div className="chip">Router</div>
                <div className="chip">LAN Management</div>
              </li>
            </ul>
            <h5 id="professional-attributes" className="section scrollspy">
              Professional Attributes
            </h5>
            <ul id="professional-attributes-ul" className="browser-default">
              <li>
                Devoted learner; have insatiable appetite to gain and apply new
                knowledge.
              </li>
              <li>
                A high-energy, enthusiastic and dependable individual who excels
                in challenging and competitive environments.
              </li>
              <li>
                Proven ability to work independently, competent in setting
                priorities, handle simultaneous projects, and meet deadlines.
              </li>
              <li>Proven effective and versatile skills in problem solving.</li>
              <li>
                A loyal, team-spirited individual, able to effectively gain
                confidence of people.
              </li>
            </ul>
            <h5 id="work-experiences" className="wec section scrollspy">
              Work Experiences
            </h5>
            <ul
              id="work-experiences-collapsible"
              className="wec collapsible popout"
              data-collapsible="accordion"
            >
              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      PrimaCard Philippines - Senior Software Engineer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2017]</div>
                </div>

                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Planned and designed the whole system for PrimaCard
                      Platform
                    </li>
                    <li>
                      Developed backend payment API system in Amazon Web
                      Services
                    </li>
                    <li>
                      Developed Two-factor One-Time Password (OTP) Token
                      authentication method
                    </li>
                    <li>
                      Integrated with third party SMS provider for customer
                      notification system
                    </li>
                    <li>Integrated Quick Response (QR) Code scanning system</li>
                    <li>
                      Integrated Near-Field Communication (NFC) Card ID
                      detection system
                    </li>
                    <li>
                      Integrated Keycloak Access Management System on API
                      endpoints
                    </li>
                    <li>Developed Android App for clients and supervisor</li>
                    <li>
                      Developed WebTools for Clients and System Administrators
                    </li>
                    <li>Planned and designed DiscountKiosk platform</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      Metrobank Philippines - Senior Software Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2016]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Developed Internal Content Management System called
                      "Insights"
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      StrikeVideo / AdGent Digital - Senior Software Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2010 - 2015]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>Developed Internal Content Management System</li>
                    <li>
                      Developed and maintain company website adgentdigital.com
                    </li>
                    <li>Developed Video Overlay Ad Manager / Player</li>
                    <li>Developed HTML5 Ad Manager / Viewer</li>
                    <li>Developed VAST/VPAID Player</li>
                    <li>Developed HTML5 AdTouch Advertisements for clients</li>
                    <li>
                      Developed AdTouch Framework - Ad management and monitoring
                      tool
                    </li>
                    <li>Developed custom mass mailer notification system</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      ModelWorks Philippines - Senior Full-Stack Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2009 - 2010]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>Converted backend of WarPlanes.com from ASP to PHP</li>
                    <li>Developed custom mass mailer notification system</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>Gameloft Philippines - Senior PHP Developer</strong>
                  </div>
                  <div className="col s3 right-align">[2009]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>Developed in-house Time Attendance System</li>
                    <li>Bug fixing of existing internal office tools</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      AmPhil Technologies Inc. - Senior Web Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2009]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Developed CMS for Drag Racing Social Networking
                      DragFools.com
                    </li>
                    <li>
                      Developed Personalized Legal Services Online
                      LawFirmAtHome.com
                    </li>
                    <li>Data mining and site scraping</li>
                    <li>Maintenance of Company website amphiltech.com</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      Monark Customs Brokerage - Lead Web Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2008 - 2009]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>Developed BalikBayanBox Tracking System</li>
                    <li>Created custom mass mailer notification system</li>
                    <li>Created Company website monarkworldwide.com</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      Digital Media Exchange (Mobius Games) - Web Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2006 - 2008]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Planned, designed and developed Customer Relationship
                      Management System
                    </li>
                    <li>
                      Converted Photoshop PSD files to HTML to create static web
                      pages
                    </li>
                    <li>Optimized Images for websites</li>
                    <li>
                      Integrated third party SMS provider to our custom
                      notification systems
                    </li>
                    <li>
                      Integrated Paypal payment system to mobiusonline.net e-Pin
                      store
                    </li>
                    <li>
                      Developed CMS for company and game websites – dmii.net,
                      muonline.ph, gunbound.ph, mobiuskids.net, mobiusgames.net,
                      mobiusonline.net
                    </li>
                    <li>
                      Developed Java app - Café of Choice (COC) IP Updater
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      University of the Philippines - Junior Web Developer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2004 - 2006]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Participated in the development of CRS/SRS Online
                      Enrollment System
                    </li>
                    <li>
                      Created database migration scripts for DB2 Databases to
                      PostgreSQL
                    </li>
                    <li>Created custom mass mailer notification system</li>
                    <li>Update and maintain UPM official website</li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="collapsible-header">
                  <div className="col s9">
                    <strong>
                      Micro Computer Leader Distributors Inc. - Technical
                      Support Engineer
                    </strong>
                  </div>
                  <div className="col s3 right-align">[2000 - 2004]</div>
                </div>
                <div className="collapsible-body">
                  <ul className="browser-default">
                    <li>
                      Troubleshoot Network and Internet connection problem
                    </li>
                    <li>
                      Hardware, OS Software Installation, Microsoft Office,
                      Adobe Products, etc.
                    </li>
                    <li>
                      Linux Server Installation, configuration and management
                    </li>
                    <li>Hardware and Software maintenance</li>
                  </ul>
                </div>
              </li>
            </ul>
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
                      src="/static/img/certificates/htmlprogrammer.gif"
                      alt="HTML 4.0"
                    />
                  </td>
                  <td>
                    <img
                      src="/static/img/certificates/javascript18.gif"
                      alt="Javascript 1.8"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/static/img/certificates/linuxadministrator.gif"
                      alt="Linux Administration (General)"
                    />
                  </td>
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
                    <img src="/static/img/certificates/php5.gif" alt="PHP 5" />
                  </td>
                  <td>
                    <img
                      src="/static/img/certificates/php53.gif"
                      alt="PHP 5.3"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/static/img/certificates/php54.gif"
                      alt="PHP 5.4"
                    />
                  </td>
                  <td>
                    <img
                      src="/static/img/certificates/php55.gif"
                      alt="PHP 5.5"
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
                  <td>
                    <img
                      src="/static/img/certificates/rdbmsdeveloper.gif"
                      alt="RDBMS Concepts"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/static/img/certificates/sqlansi.gif"
                      alt="SQL (ANSI)"
                    />
                  </td>
                  <td>
                    <img
                      src="/static/img/certificates/visualbasic2008fundamentals.gif"
                      alt="Visual Basic 2008 Fundamentals"
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
            <h5 id="projects" className="pro section scrollspy">
              Projects
            </h5>
            <ul id="projects-collection" className="pro collection">
              <li className="collection-item">
                <a
                  href="http://www.github.com/kurapikats"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="My Public Source Code Collections"
                >
                  <i className="tiny material-icons right">public</i>
                  My Github Projects
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://dcman.depedcapiz.ph"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="Department of Education Document Tracker"
                >
                  <i className="tiny material-icons right">public</i>
                  DepEd Capiz Document Tracking System
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="https://itunes.apple.com/us/app/acta-medica-ph/id1220666080?mt=8"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="iOS App for Acta PH"
                >
                  <i className="tiny material-icons right">public</i>
                  Acta Medica Philippina IOS App
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ph.actamedicaphilippina"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="Android App for Acta PH"
                >
                  <i className="tiny material-icons right">public</i>
                  Acta Medica Philippina Android App
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://www.taxicomplaints.net"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="My personal TaxiComplaints project"
                >
                  <i className="tiny material-icons right">public</i>
                  Taxi Complaints Philippines
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://www.redwoodhill.com"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="Official Website of Redwood Hill Farm"
                >
                  <i className="tiny material-icons right">public</i>
                  Redwood Hill Farm & Creamery
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://www.actamedicaphilippina.com.ph"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="Official Website of Acta Medica Philpppina"
                >
                  <i className="tiny material-icons right">public</i>
                  National Health Science Journal
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://www.upm.edu.ph"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="Official website of UPM"
                >
                  <i className="tiny material-icons right">public</i>
                  UP Manila Official Website
                </a>
              </li>
              <li className="collection-item">
                <a
                  href="http://crs2.upm.edu.ph"
                  target="_blank"
                  className="tooltipped"
                  data-tooltip="UPM Online Student Registration"
                >
                  <i className="tiny material-icons right">public</i>
                  UPM Online Student Registration
                </a>
              </li>
            </ul>
            <h5 id="character-references" className="char section scrollspy">
              Character References
            </h5>
            <table className="char bordered striped highlight">
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://www.metrobank.com.ph/contact_us.asp"
                      target="_blank"
                    >
                      <strong>Anthony Zamora</strong>
                    </a>
                  </td>
                  <td>Director (Innovations Dept.)</td>
                  <td>Metrobank Main Office Philippines</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="http://www.linkedin.com/in/cameronyuill"
                      target="_blank"
                    >
                      <strong>Cameron Yuill</strong>
                    </a>
                  </td>
                  <td>Founder and CEO</td>
                  <td>StrikeVideo / AdGent Digital</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="http://ph.linkedin.com/pub/rob-locke/0/1a5/455"
                      target="_blank"
                    >
                      <strong>Robert Locke</strong>
                    </a>
                  </td>
                  <td>Chief Technology Officer</td>
                  <td>Digital Media Exchange (Mobius Games)</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="http://www.linkedin.com/in/ericpareja"
                      target="_blank"
                    >
                      <strong>Eric Pareja</strong>
                    </a>
                  </td>
                  <td>Network Administrator</td>
                  <td>University of the Philippines Manila</td>
                </tr>
              </tbody>
            </table>
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
              <span className="brown-text">+63 908 215 0659</span>
            </div>

            <p className="center cont">* * *</p>
            <p className="right cont" style={{ fontSize: 14 }}>
              Last update: Feb 1, 2018
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div className="fixed-action-btn hide-on-med-and-down">
              <a
                href="#top"
                className="animated slideInUp btn-floating btn-large brown accent-4 waves-effect"
              >
                <i className="large material-icons">arrow_upward</i>
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          h5 {
            color: #6d4c41;
          }
          a {
            color: #4e342e;
          }
          .nav-wrapper .left,
          .nav-wrapper .right,
          .sde,
          .cont,
          .scrollspy,
          #projects-collection li,
          #professional-attributes-ul li,
          #certifications-table img {
            opacity: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}
