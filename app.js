var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
  });
});
