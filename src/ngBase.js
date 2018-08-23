// alert("hello");

var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello/:pk',
    templateUrl: 'threadview.html',
    controller: function($scope , $state) {
      console.log($scope);

      console.log($state.params);

      $scope.pk = $state.params.pk;


    }
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});


myApp.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);



myApp.controller("main" , function($scope){

  $scope.title = "Chat window";
  $scope.friends = [
    {name : 'Pradeep' , pk : 1},
    {name : 'Pradeep2' , pk : 2},
  ]


})
