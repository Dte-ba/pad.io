'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  // Theming
  $mdThemingProvider.definePalette('bagrey', {
    '50': '#e9eaea',
    '100': '#c2c3c5',
    '200': '#a6a7a9',
    '300': '#818486',
    '400': '#727477',
    '500': '#636567',
    '600': '#545657',
    '700': '#454648',
    '800': '#363738',
    '900': '#272829',
    'A100': '#e9eaea',
    'A200': '#c2c3c5',
    'A400': '#727477',
    'A700': '#454648',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 A100 A200'
  });

  $mdThemingProvider.definePalette('bagreen', {
    '50': '#eff7da',
    '100': '#d3e99c',
    '200': '#bfdf6e',
    '300': '#a5d233',
    '400': '#94bd2a',
    '500': '#80a424',
    '600': '#6c8b1e',
    '700': '#597219',
    '800': '#455913',
    '900': '#32400e',
    'A100': '#eff7da',
    'A200': '#d3e99c',
    'A400': '#94bd2a',
    'A700': '#597219',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
  });

  $mdThemingProvider.definePalette('ba-dark-gray', {
    '50': 'e8e8e8',
    '100': 'c5c5c6',
    '200': '9e9fa0',
    '300': '777879',
    '400': '5a5b5d',
    '500': '3d3e40',
    '600': '37383a',
    '700': '2f3032',
    '800': '27282a',
    '900': '1a1b1c',
    'A100': '70b2f5',
    'A200': '4199f1',
    'A400': '007fff',
    'A700': '0073e6',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      'A100',
      'A200'
    ],
    'contrastLightColors': [
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A400',
      'A700'
    ]
  });

  $mdThemingProvider.theme('default')
  .primaryPalette('ba-dark-gray')
  .accentPalette('blue');
}
