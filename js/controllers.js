angular.module('starter.controllers', ['ionic', 'starter.services'])

.controller('AppCtrl', function($scope) {})

.controller('AccueilCtrl', function($scope) {})

.controller('CalendarsCtrl', function($scope, Calendars){
  $scope.calendars = Calendars.all();
  $scope.remove = function(calendar) {
    Calendars.remove(calendar);
  };
    $scope.date = new Date();
})

.controller('CalendarDetailCtrl', function($scope, $stateParams, Calendars){
  $scope.calendar = Calendars.get($stateParams.calendarId);
  $scope.calendarDesc = Calendars.get($stateParams.desc);
})

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function () {
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.confirm({
          title: "Internet Disconnected",
          content: "Internet is disconnected on your device."
        })
        .then(function(result) {
          if(!result) {
            $ionicPopup.confirm({
              title: "Internet Connected",
              content: "Internet is connected on your device."
            });
          }
        });
      }
    }
  });
});
