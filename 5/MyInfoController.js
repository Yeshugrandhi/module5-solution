// mainController.js
app.controller('MyInfoController', ['$scope', 'DataService', function($scope, DataService) {
  $scope.user = DataService.getUserPreferences();
  $scope.userSignedUp = $scope.user && Object.keys($scope.user).length > 0;
}]);
