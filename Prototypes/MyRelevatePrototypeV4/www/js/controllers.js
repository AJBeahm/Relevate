angular.module('starter.controllers', [])

.controller('AuthCtrl', function($scope, $state, $location, Users){
  $scope.email = '';
  $scope.password = '';
  $scope.errorMessage = null;
  $scope.Login = function(username, password) {
      if(Users.get(username,password))
      {
          $location.path('/app/about');
      }
      else
      {
        $scope.errorMessage = 'Invalid email and/or password';
        $state.reload();
      }
  };
  $scope.ToRegister = function() {
    $location.path('/register');
  };
})

.controller('RegCtrl', function($scope, $state, $location, Users){
    $scope.email = '';
    $scope.password = '';
    $scope.confirmPass = '';
    $scope.errorMessage = '';
    $scope.Confirm = function(email, password, confirmPass) {
      if(password.length > 8)
      {
        if(password == confirmPass)
        {
            if($scope.checkEmailValid())
            {
              $scope.errorMessage = 'Okay email is valid...';
              $state.reload();
              Users.add(email, password);
              $location.path('/app/about');
            }
           else
           {
              $scope.errorMessage = 'Invalid email';
              $state.reload();
            }
          }
          else
          {
          $scope.errorMessage = 'Passwords do not match';
          $state.reload();
          }
        }
        else
        {
         $scope.errorMessage = 'Password not greater than 8 characters';
         $state.reload();
        }
    };

    $scope.checkEmailValid  = function(email)
    {
      return (!Users.getEmail(email) && email.length()>8)
    }

    $scope.ToLogin = function(){
      $location.path('/auth');
    };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

})

//Controller for all templates.
.controller('MenuCtrl', function($scope, $window, $location, $stateParams, $ionicHistory){

    $scope.screenWidth = $window.innerWidth;
    if($scope.screenWidth > 450)
    {
      $scope.comString = "Community";
      $scope.newsString= "NewsFeed";
      $scope.logString = "LogOut";
    }

    $scope.ToNewsFeed = function() {
      $ionicHistory.clearHistory();
      $location.path('/app/newsfeed').replace();
    };

    $scope.ToCommunity = function() {
      $ionicHistory.clearHistory();
      $location.path('/app/community').replace();
    };

    $scope.LogOut = function() {
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
      $location.path('/auth');
      $scope.apply();
      $location.replace();
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
  $scope.contributors = Contributors.all();
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