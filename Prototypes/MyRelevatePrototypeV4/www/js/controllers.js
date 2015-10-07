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

  // Checks if user has matching emails and passwords for signup.
  $scope.allowSignUp = function() {
    return ($scope.userData.email == $scope.userData.confirmemail)
            && ($scope.userData.password == $scope.userData.confirmpassword);
  };

  // Signs the user up for the service.
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

//Controller for all templates.
.controller('MenuCtrl', function($scope, $window, $location, $stateParams, $ionicHistory){

    $scope.screenWidth = $window.innerWidth;

    $scope.ToNewsFeed = function(){
      $ionicHistory.clearCache();
      $location.path('/app/newsfeed');
    };

    $scope.ToCommunity = function(){
      $location.path('/app/community');
    };

    $scope.OnMobile = function(){
      return $scope.screenWidth <= 375;
    }
})

//Controller for the quizzes display page.
.controller('QuizzesCtrl', function($scope, Quizzes) {
  $scope.quizzes = Quizzes.all();
  $scope.allQuizzesFinished = function(){
    return !$scope.quizzes.length;
  }
})

//Controller for the journaling page.
.controller('JournalCtrl', function($scope, Journals){
  $scope.journals = Journals.all();
  $scope.newEntry = '';
  $scope.submitJournal = function(str){
    Journals.add(str);
    $scope.newEntry = '';
    $location.path('/app/journal');
  };
})

//Controller for the individual quiz pages.
.controller('QuizCtrl', function($scope, $stateParams, $ionicHistory, Quizzes) {
  $scope.quiz = Quizzes.get($stateParams.quizId);
  $scope.quizFinished = function(quiz){
    Quizzes.remove(quiz);
    $ionicHistory.goBack();
  }
})

//Controller for the newsfeed page.
.controller('NewsFeedCtrl', function($scope, $ionicHistory, $location, News, Contributors){
  $scope.news = News.all();
  $scope.goToArticle = function(articleId){
      $location.path('/app/newsfeed/'+articleId);
  }
})

//Controller for the individual news article page. NOT ACTIVE
.controller('NewsArticleCtrl', function($scope, $stateParams, $ionicHistory, News, Contributors){
  $scope.newsArticle = News.get($stateParams.newsArticleId);
  $scope.contributor = Contributors.get($scope.newsArticle.author);
})

//Controller for the community page. NOT ACTIVE
.controller('CommunityCtrl', function($scope){

})

.controller('ContributorsCtrl', function($scope, Contributors){
  $scope.contributors = Contributors.all();
})

.controller('ContributorCtrl', function($scope, $stateParams, $location, Contributors, News){
  $scope.contributor = Contributors.get($stateParams.contributorId);
  $scope.articles = News.getByAuthor($stateParams.contributorId);
  $scope.goToArticle = function(articleId){
      $location.path('/app/newsfeed/'+articleId);
  }
});