import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SideNav from '../components/SideNav';
import SoftDevExp from '../components/SoftDevExp';
import ProAttr from '../components/ProAttr';
import WorkExp from '../components/WorkExp';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import CharRef from '../components/CharRef';
import Contact from '../components/Contact';

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

    Materialize.toast(`HI THERE! WELCOME TO MY PERSONAL PORTFOLIO`, 3500);
  }

  render() {
    return (
      <Fragment>
        <Header />

        <NavBar />
        <SideNav />

        <div className="row">
          <div className="col s12">

            <SoftDevExp />
            <ProAttr />
            <WorkExp />
            <Certifications />
            <Projects />
            <CharRef />
            <Contact />

            <p className="center cont">* * *</p>
            <p className="right cont" style={{ fontSize: 14 }}>
              Last Updated on Feb. 10, 2019
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
