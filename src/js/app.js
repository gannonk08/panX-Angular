(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.main.service'
    ]);

})();
