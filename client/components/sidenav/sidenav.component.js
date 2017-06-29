'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class SidenavComponent {
  items = [
      {
        name: 'bienvenida',
        caption: 'Bienvenida',
        icon: 'fa-map-marker',
        include: 'apps'
      },
      {
        name: 'padEnAccion',
        caption: 'PAD en Acción',
        icon: 'fa-users',
        include: 'groups'
      },
      {
        name: 'orientaciones',
        caption: 'Orientaciones',
        icon: 'fa-compass',
        include: 'users'
      },
      {
        name: 'transversales',
        caption: 'transversales',
        icon: 'fa-globe',
        include: 'users'
      },
      {
        name: 'contacto',
        caption: 'Contacto',
        icon: 'fa-envelope',
        include: 'users'
      }
    ];
}

export default angular.module('directives.sidenav', [])
  .component('sidenav', {
    template: require('./sidenav.html'),
    controller: SidenavComponent,
    controllerAs: 'nav'
  })
  .name;
