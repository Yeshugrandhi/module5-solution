// dataService.js
app.service('DataService', ['$http', function($http) {
  var userPreferences = {};

  this.getMenuItem = function(menuNumber) {
    var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${menuNumber.charAt(0)}/menu_items/${menuNumber.substring(1)}.json`;
    return $http.get(url);
  };

  this.saveUserPreferences = function(user) {
    userPreferences = angular.copy(user);
  };

  this.getUserPreferences = function() {
    return angular.copy(userPreferences);
  };
}]);
