classroom.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.allStudents = [
    'Rose Tyler',
    'Jack Harkness',
    'Martha Jones',
    'Mickey Smith',
    'Donna Nobel',
    'Amy Pond',
    'Rory Williams',
    'River Song',
    'Clara Oswald',
    'Melody Pond'
    ];

  factory.studentsHere = [
    'Rose Tyler',
    'Jack Harkness',
    'Martha Jones',
    'Mickey Smith',
    'Donna Nobel',
    'Amy Pond'
  ];

  factory.studentsGone = [
    'Rory Williams',
    'River Song',
    'Clara Oswald',
    'Melody Pond'
  ];


  factory.signIn = function(student) {
    var index = factory.studentsGone.indexOf(student);
    var studentToMove = factory.studentsGone.splice(index, 1);
    factory.studentsHere.push(student);
  }

  factory.signOut = function(student) {
    var index= factory.studentsHere.indexOf(student)
    var studentToMove = factory.studentsHere.splice(index, 1);
    factory.studentsGone.push(student);
  }

  return factory;
});
