angular.module('starter.controllers',[])

.controller('MenuController', function($scope, $location, MenuService)
{
	$scope.list = MenuService.all();
})

.controller('SideBarCtrl', function($scope, $ionicSideMenuDelegate){
	$scope.toggleLeftMenu = function(){
	  $ionicSideMenuDelegate.toggleLeft();
	};
});
