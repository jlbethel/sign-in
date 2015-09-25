classroom.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.allStudents = [
    { name: 'Rose Tyler', id: 1 },
    { name: 'Jack Harkness', id: 2 },
    { name: 'Martha Jones', id: 3 },
    { name: 'Mickey Smith', id: 4 },
    { name: 'Donna Nobel', id: 5 },
    { name: 'Amy Pond', id: 6 },
    { name: 'Rory Williams', id: 7 },
    { name: 'River Song', id: 8 },
    { name: 'Clara Oswald', id: 9 },
    { name: 'Melody Pond', id: 10 }
    ];

  factory.studentsHere = [
    { name: 'Rose Tyler', id: 1 },
    { name: 'Jack Harkness', id: 2 },
    { name: 'Martha Jones', id: 3 },
    { name: 'Mickey Smith', id: 4 },
    { name: 'Donna Nobel', id: 5 },
    { name: 'Amy Pond', id: 6 }
  ];

  factory.studentsGone = [
    { name: 'Rory Williams', id: 7 },
    { name: 'River Song', id: 8 },
    { name: 'Clara Oswald', id: 9 },
    { name: 'Melody Pond', id: 10 }
  ];

  factory.signIn = function(student) {
    var index = factory.studentsGone.indexOf(student);
    var studentToMove = factory.studentsGone.splice(index, 1);
    factory.studentsHere.push(studentToMove);
  }

  return factory;
});
