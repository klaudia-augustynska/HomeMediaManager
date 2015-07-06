angular.module('HomeMediaManager', [
  'ngRoute',
  'mobile-angular-ui',
  'HomeMediaManager.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'medialist.html',  reloadOnSearch: false});
  $routeProvider.when('/medialist', {templateUrl:'medialist.html',  reloadOnSearch: false});
  $routeProvider.when('/addmedia', {templateUrl:'addmedia.html',  reloadOnSearch: false});
  $routeProvider.when('/editmedia', {templateUrl:'editmedia.html',  reloadOnSearch: false});
  $routeProvider.when('/typeslist', {templateUrl:'typeslist.html',  reloadOnSearch: false});
  $routeProvider.when('/addtype', {templateUrl:'addtype.html',  reloadOnSearch: false});
  $routeProvider.when('/edittype', {templateUrl:'edittype.html',  reloadOnSearch: false});
  $routeProvider.when('/friends', {templateUrl:'friends.html',  reloadOnSearch: false});
  $routeProvider.when('/editfriend', {templateUrl:'editfriend.html',  reloadOnSearch: false});
  $routeProvider.when('/addfriend', { templateUrl: 'addfriend.html', reloadOnSearch: false });
  $routeProvider.when('/moviedata', { templateUrl: 'moviedata.html', reloadOnSearch: false });
  $routeProvider.when('/fightgame', { templateUrl: 'fightgame.html', reloadOnSearch: false });
  $routeProvider.when('/fightresult', { templateUrl: 'fightresult.html', reloadOnSearch: false });
});

