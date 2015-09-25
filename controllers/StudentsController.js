classroom.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.allStudents = StudentsFactory.allStudents;
  $scope.studentsHere = StudentsFactory.studentsHere;
  $scope.studentsGone = StudentsFactory.studentsGone;  
  $scope.StudentsFactory = StudentsFactory;
});
