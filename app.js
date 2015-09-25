var classroom = angular.module('classroom', ['ui.router']);

classroom.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('students', {
    url: "/students",
    templateUrl: "partials/students.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('teacher', {
    url: "/teacher",
    templateUrl: "partials/teacher.html",
    controller: "StudentsCtrl"
  });
});
