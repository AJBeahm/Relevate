angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, Users) {
    $scope.user = Users.get(username, password);
})

.controller('MyDataCtrl', function ($scope) {
})

.controller('NewsFeedCtrl', function($scope, Articles) {
  $scope.articles = Articles.all();
  $scope.remove = function(article) {
    Articles.remove(article);
  }
})

.controller('ArticleDetailCtrl', function($scope, $stateParams, Articles) {
  $scope.article = Articles.get($stateParams.articleId);
})

.controller('CommunityCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
