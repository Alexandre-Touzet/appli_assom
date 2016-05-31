angular.module('starter.services', [])

.factory('Calendars', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var calendars = [{
    id: 1,
    jour: 'Lundi',
    desc: 'Si la rivière enchanté tu dois affronter, de quelle filière dois-tu être l’initié ?',
    date: '22.02.2016',
    dateTxt: '29 février',
    numIndice: 1,
    img: 'P012902R.JPG'
  }, {
    id: 2,
    jour: 'Mardi',
    desc: 'Tu trouveras qqch !',
    date: '29.02.2016',
    dateTxt: '29 février',
    numIndice: 2,
    img: 'C022902B.JPG'
  }, {
    id: 2,
    jour: 'Mardi',
    desc: 'J\'entoure le point vert qui monte et qui descend, et je l\'apporte à la casserole.',
    date: '23.02.2016',
    dateTxt: '23 février',
    numIndice: 2,
    img: 'dateJour.jpg'
  }];

  return {
    all: function() {
      return calendars;
    },
    remove: function(calendar) {
      calendars.splice(calendars.indexOf(calendar), 1);
    },
    get: function(calendarId) {
      for (var i = 0; i < calendars.length; i++) {
        if (calendars[i].id === parseInt(calendarId)) {
          return calendars[i];
        }
      }
      return null;
    }
  };
});
