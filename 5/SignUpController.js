// mainController.js
app.controller('SignUpController', ['$scope', '$http', 'DataService', function($scope, $http, DataService) {
  $scope.user = {};
  $scope.invalidMenuNumber = false;
  $scope.successMessage = false;

  $scope.submitForm = function() {
    // Validate and save user information
    // ...

    // Check if the menu number exists
    DataService.getMenuItem($scope.user.menuNumber)
      .then(function(response) {
        if (response.data) {
          // Valid menu number, save user preferences
          DataService.saveUserPreferences($scope.user);
          $scope.successMessage = true;
          $scope.invalidMenuNumber = false;
        } else {
          // Invalid menu number
          $scope.invalidMenuNumber = true;
          $scope.successMessage = false;
        }
      })
      .catch(function(error) {
        console.error('Error retrieving menu item:', error);
      });
  };
}]);
