classroom.factory('UtilitiesFactory', function() {

    factory.findById = function(array, id) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id == id) {
          return array[i];
        }
      }
      return null;
    }

 });
