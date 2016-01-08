(function() {
  angular
    .module('tisch')
    .directive('agenda', Agenda);

  function Agenda() {
    var directive = {
      bindToController: true,
      controller: AgendaController,
      controllerAs: 'vm',
      templateUrl: 'client/app/agenda/agenda.ng.html',
      restrict: 'E',
      scope: {}
    };
    return directive;
  }

  AgendaController.$inject = ['$scope', '$stateParams', 'toastr', '$uibModal'];

  function AgendaController($scope, $stateParams, toastr, $uibModal) {
    var vm = this;

    vm.calendarConfig = getCalendarConfig();
    vm.eventSources = [[]];

    function getCalendarConfig() {
      return {
        calendar: {
          lang: 'nl',
          timezone: 'local',
          height: 650,
          header: false,
          allDaySlot: false,
          slotDuration: '00:15:00',
          defaultView: 'agendaDay',
         // eventClick: shiftDetail,
          //eventResize: shiftDetail,
         // eventDrop: shiftDetail,
          selectable: true,
          selectHelper: true,
          //select: newShift,
          editable: false,
          businessHours: {
            start: '09:00',
            end: '18:00',
            dow: [1, 2, 3, 4, 5, 6]
          },
          eventColor: '#e6463a'
        }
      };
    }
  }
})();
