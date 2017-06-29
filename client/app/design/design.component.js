'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './design.routes';

export class DesignComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('padApp.design', [uiRouter])
  .config(routes)
  .component('design', {
    template: require('./design.html'),
    controller: DesignComponent,
    controllerAs: 'designCtrl'
  })
  .name;
