'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './test.routes';

export class TestComponent {
  /*@ngInject*/
  constructor($http, $timeout, $mdMedia, $scope){
    this.$http = $http;
    this.$timeout = $timeout;
    this.$mdMedia = $mdMedia;
    this.$scope = $scope;
    this.working = false;
    this.page = 0;
    this.take = 10;
    this.items = [];

    this.currentCol = 0;

    this.medias = [
      // '(max-width: 599px)'
      { media: 'xs', columns: 1},
      //{ media: 'gt-xs', caption: '(min-width: 600px)' },
      // '(min-width: 600px) and (max-width: 959px)'
      { media: 'sm', columns: 2},
      //{ media: 'gt-sm', caption: '(min-width: 960px)' },
      // '(min-width: 960px) and (max-width: 1279px)'
      { media: 'md', columns: 3},
      //{ media: 'gt-md', caption: '(min-width: 1280px)' },
      // '(min-width: 1280px) and (max-width: 1919px)'
      { media: 'lg', columns: 3},
      //{ media: 'gt-lg', caption: '(min-width: 1920px)' },
      // '(min-width: 1920px)
      { media: 'xl', columns: 5},
    ];

    _.each(this.medias, m => {
      this.$scope.$watch(() => { return this.$mdMedia(m.media); }, (value) => {
        if (value){
          this.media = m;
          this.reset();  
        }
      });
    });
  }

  next(){
    this.working = true;
    this.$http
      .get(`/api/thing/${this.page}/${this.take}`)
      .then( res => {
        this.render(res.data);
        this.items = this.items.concat(res.data);
        this.working = false;
      });
  }

  reset(){
    this.page = 0;
    this.columns = [];
    this.currentCol = 0;

    // create columns
    for (var c=0; c < this.media.columns; c++){
      this.columns.push([]);
    }

    this.next();
  }

  render(newItems){
    var chunked = _.chunk(newItems, this.media.columns);

    do {
      let item = newItems.shift();
      this.columns[this.currentCol++].push(item);
      if (this.currentCol === this.media.columns)
        this.currentCol = 0;

    } while(newItems.length)
  }

  loadMore(){
    this.next();
  }
}

export default angular.module('padApp.test', [uiRouter])
  .config(routes)
  .component('test', {
    template: require('./test.html'),
    controller: TestComponent,
    controllerAs: 'vm'
  })
  .name;
