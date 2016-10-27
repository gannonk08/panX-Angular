(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope','mainService'];

  function mainController($scope, mainService) {
    /*jshint validthis: true */
    const vm = this;
    this.getMarketData = function () {
      mainService.getMarket()
      .then((marketData) => {
        console.log(marketData);
        vm.marketInfo = marketData.data.marketInfo;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    };
    this.greeting = 'Market Data';
  }

})();
