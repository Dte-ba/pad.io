'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';
import ngLoader from 'angular-loading-bar';

import {
  routeConfig
} from './app.config';

import dcAngular from '../lib/dc.angular.js';

import navbar from '../components/navbar/navbar.component';
import searchbar from '../components/searchbar/searchbar.component';
import sidenav from '../components/sidenav/sidenav.component';
import footer from '../components/footer/footer.component';
import menuRoulette from '../components/menu-roulette/menu-roulette.component';
import testComponent from './test/test.component';
import main from './main/main.component';
import design from './design/design.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import 'angular-material/angular-material.css';
import 'angular-loading-bar/build/loading-bar.css'
import './app.scss';

angular.module('padApp', [
  ngAnimate,
  ngCookies,
  ngResource,
  ngSanitize,
  uiRouter,
  ngMaterial,
  dcAngular,
  navbar,
  searchbar,
  sidenav,
  footer,
  menuRoulette,
  main,
  design,
  testComponent,
  'angular-loading-bar',
  constants,
  util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['padApp'], {
      strictDi: true
    });
  });
