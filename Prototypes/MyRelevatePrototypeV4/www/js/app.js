// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
   .state('app.newsfeed',{
    url: '/newsfeed',
    views: {
      'menuContent': {
        templateUrl: 'templates/newsfeed.html'
      }
    }
   })
   .state('app.community',{
    url: '/community',
    views: {
      'menuContent': {
        templateUrl: 'templates/community.html'
      }
    }
   })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.mydata', {
    url: '/mydata',
    views: {
      'menuContent': {
        templateUrl: 'templates/mydata.html'
        }
      }
  })

  .state('app.journal', {
    url: '/journal',
    views:{
      'menuContent': {
        templateUrl: 'templates/journal.html'
      }
    }
  })
  .state('app.quizzes', {
    url: '/quizzes',
    views: {
      'menuContent': {
        templateUrl: 'templates/quizzes.html',
        controller: 'QuizzesCtrl'
      }
    }
  })
  .state('app.quiz', {
    url: '/quizzes/:quizId',
    views: {
      'menuContent': {
        templateUrl: 'templates/quiz.html',
        controller: 'QuizCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/quizzes');
});
