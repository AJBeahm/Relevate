angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.userData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  $scope.allowSignUp = function() {
    return ($scope.userData.email == $scope.userData.confirmemail)
            && ($scope.userData.password == $scope.userData.confirmpassword);
  };
  $scope.doSignUp = function() {
    console.log('Signing up', $scope.userData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
    $location.path('/app/mydata');  
  };
})

.controller('MenuCtrl', function($scope, $location, $stateParams, $ionicHistory){
    $scope.ToNewsFeed = function(){
      $ionicHistory.clearCache();
      $location.path('/app/newsfeed');
    };

    $scope.ToCommunity = function(){
      $location.path('/app/community');
    };
})

.controller('QuizzesCtrl', function($scope, Quizzes) {
  $scope.quizzes = Quizzes.all();
  $scope.allQuizzesFinished = function(){
    return !$scope.quizzes.length;
  }
})

.controller('JournalCtrl', function($scope, Journals){
  $scope.journals = Journals.all();
  $scope.newEntry = '';
  $scope.submitJournal = function(str){
    Journals.add(str);
    $scope.newEntry = '';
    $location.path('/app/journal');
  };
})
.controller('QuizCtrl', function($scope, $stateParams, $ionicHistory, Quizzes) {
  $scope.quiz = Quizzes.get($stateParams.quizId);
  $scope.quizFinished = function(quiz){
    Quizzes.remove(quiz);
    $ionicHistory.goBack();
  }
})

.controller('NewsFeedCtrl', function($scope, $ionicHistory, News){
  $scope.news = News.all();
})

.controller('NewsArticleCtrl', function($scope, $stateParams, $ionicHistory, News){
  $scope.newsArticle = News.get($stateParams.newsArticleId);
})
.controller('CommunityCtrl', function($scope){
  
});
