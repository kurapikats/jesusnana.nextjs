import React, { Fragment } from 'react'

const Projects = () => (
  <Fragment>
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
          Redwood Hill Farm &amp; Creamery
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
  </Fragment>
)

export default Projects
