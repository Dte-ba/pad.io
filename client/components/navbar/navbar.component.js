'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [];
  isCollapsed = true;
  /*@ngInject*/
  constructor($rootScope){
    this.$rootScope = $rootScope;
  }
  /*@ngInject*/
  toggle($event){
    this.$rootScope.toggleSidenav();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
    controllerAs: 'vm'
  })
  .name;
