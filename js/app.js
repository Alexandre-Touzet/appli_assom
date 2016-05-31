// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  }
})

.filter('unique', function() {
  return function(collection, keyname) {
    var output = [], 
        keys = [];

    angular.forEach(collection, function(item) {
        var key = item[keyname];
        if(keys.indexOf(key) === -1) {
            keys.push(key);
            output.push(item);
        }
    });

    return output;
  };
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html', 
    controller: 'AppCtrl'
  })

  .state('app.accueil', {
    url: '/accueil',
    views: {
      'menuContent': {
        templateUrl: 'templates/accueil.html',
        controller: 'AccueilCtrl'
      }
    }
  })
  .state('app.assomRush', {
      url: '/assomRush',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html',
          controller: 'CalendarDetailCtrl'
        }
      }
    })
  .state('app.assomRushs', {
      url: '/assomRush/:calendarId',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendars.html',
          controller: 'CalendarsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/accueil');
});