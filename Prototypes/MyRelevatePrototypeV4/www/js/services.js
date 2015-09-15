angular.module('starter.services', [])

.factory('Quizzes', function(){

  var quizzes = [
  {
    id: 1,
    title: 'Quiz #1',
    description: 'A quick quiz to see how well you can romance!',
    length: '10m',
    type: 'Q'
  },
  {
    id: 2,
    title: 'Quiz #2',
    description: 'Quiz about your past romantic interests',
    length: '30m',
    type: 'S'
  },
  {
    id: 3,
    title: 'Quiz #3',
    description: 'Quiz about your last couple dates',
    length: '15m',
    type: 'S'
  }];

	return {
		all: function() {
			return quizzes;
		},
		remove: function(quiz){
			quizzes.splice(quizzes.indexOf(quiz),1);		
		},
		get: function(quizId){
			for (var i = 0; i < quizzes.length; i++){
				if (quizzes[i].id === parseInt(quizId)){
					return quizzes[i];
				}
			}
			return null;
		}
		
 
		};
	});