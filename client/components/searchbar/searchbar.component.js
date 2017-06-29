'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class SearchbarComponent {
  /*@ngInject*/
  constructor(){
    this.isOpen = false;

    this.foobar = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };
  }
}

export default angular.module('directives.searchbar', [])
  .component('searchbar', {
    template: require('./searchbar.html'),
    controller: SearchbarComponent,
    controllerAs: 'vm'
  })
  .name;
