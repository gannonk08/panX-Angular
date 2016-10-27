(function() {

  'use strict';

  angular
    .module('myApp.main.service', [])
    .service('mainService', mainService);

  mainService.$inject = ['$http'];

  function mainService($http) {
    /*jshint validthis: true */
    const baseURL = 'http://ec2-54-198-89-180.compute-1.amazonaws.com/';
    this.getMarket = function() {
      return $http({
        method: 'GET',
        url: baseURL,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }
})();
