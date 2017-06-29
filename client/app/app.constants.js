'use strict';

import angular from 'angular';

export default angular.module('padApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .run(['$rootScope', '$mdSidenav', function($rootScope, $mdSidenav) {
    const buildToggler = (componentId) => {
      return () => {
        $mdSidenav(componentId).toggle();
      };
    }

    $rootScope.toggleSidenav = buildToggler('main-sidenav');
  }])
  .name;
