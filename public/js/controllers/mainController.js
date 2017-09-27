app.controller('mainController', function($scope, contactsFactory) {

  $scope.contacts = contactsFactory.contacts;

});
