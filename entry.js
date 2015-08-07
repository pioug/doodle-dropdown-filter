require('angular');
require('angular-animate');

require("./style.scss");

angular
  .module('Doodle', ['ngAnimate'])
  .directive('dropdownFilter', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'dropdown-filter.html',
      controller: function($scope) {
        $scope.list = [{
          year: '1998',
          title: 'The Horse Whisperer',
          role: 'Grace MacLean '
        }, {
          year: '2003',
          title: 'Lost in Translation',
          role: 'Charlotte'
        }, {
          year: '2005',
          title: 'Match Point',
          role: 'Nola'
        }, {
          year: '2005',
          title: 'The Island',
          role: 'Jordan Two Delta / Sarah Jordan'
        }, {
          year: '2006',
          title: 'Scoop',
          role: 'Sondra Pransky'
        }, {
          year: '2006',
          title: 'The Prestige',
          role: 'Olivia Wenscombe'
        }, {
          year: '2008',
          title: 'The Other Boleyn Girl',
          role: 'Mary Boleyn'
        }, {
          year: '2008',
          title: 'Vicky Cristina Barcelona',
          role: 'Cristina'
        }, {
          year: '2010',
          title: 'Iron Man 2',
          role: 'Natasha Romanoff / Black Widow'
        }, {
          year: '2012',
          title: 'The Avengers',
          role: 'Natasha Romanoff / Black Widow'
        }, {
          year: '2014',
          title: 'Captain America: The Winter Soldier',
          role: 'Natasha Romanoff / Black Widow'
        }, {
          year: '2014',
          title: 'Lucy',
          role: 'Lucy'
        }, {
          year: '2015',
          title: 'Avengers: Age of Ultron',
          role: 'Natasha Romanoff / Black Widow'
        }];

        $scope.select = function(movie) {
          $scope.search = movie.title;
        };
      }
    };
  })
  .filter('highlight', function($sce) {
    return function(input, search) {
      if (!input) {
        return;
      }
      var filtered = search ? input.replace(new RegExp(search.replace(/[^\w\s]/gi, ''), 'gi'), '<mark >$&</mark>') : input;
      return $sce.trustAsHtml(filtered);
    };
  });
