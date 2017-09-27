app.controller('mainController', function($scope, contactsFactory) {

  $scope.contacts = contactsFactory.contacts;


  $(document).on("click", ".expandList", function () {
      $('ul', $(this).parent()).eq(0).slideToggle();
  });

});
