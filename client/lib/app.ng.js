(function() {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

// This code only runs on the client
  angular.module('tisch', [
    'angular-meteor',
    'accounts.ui',
    'ui.router',
    'toastr',
    'ui.bootstrap',
    'ui.timepicker',
    'ui.select',
    'ui.calendar'
  ]);

})();
/*
function onReady() {
  angular.bootstrap(document, ['tisch'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on('deviceready', onReady);
else
  angular.element(document).ready(onReady);
*/