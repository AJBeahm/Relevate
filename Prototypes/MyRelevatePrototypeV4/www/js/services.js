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
	})

.factory('Journals', function(){
  var journals = [];

    return {
    all: function() {
      return journals;
    },
    add: function(journalEntry){
      var newJournal = { 
        id: journals.length+1,
        text: String(journalEntry),
        date: new Date()
       };
      journals.push(newJournal);
    },
    remove: function(journalId){
      quizzes.splice(quizzes.indexOf(quiz),1);    
    },
    get: function(journalId){
      for (var i = 0; i < journals.length; i++){
        if (journals[i].id === parseInt(journalId)){
          return journals[i];
        }
      }
      return null;
    }
    
 
    };
  })

.factory('News', function(){
  var news = [
  {
    id : 1,
    title: '5 Relationship Tips',
    descshort: 'Check Out these 5 tips on relationships!',
    desclong: 'These 5 tips will help you and your partner on the best way to carry on a long term relationship.',
    image: 'img/RelevateLogoL.png',
    iconImage:'img/RelevateLogoL.png',
    date: new Date()
  },
  {
    id : 2,
    title: '5 Relationship Tips',
    descshort: 'Check Out these 5 tips on relationships!',
    desclong: 'These 5 tips will help you and your partner on the best way to carry on a long term relationship.',
    image: 'img/RelevateLogoL.png',
    iconImage: 'img/RelevateLogoL.png',
    date: new Date()
  },
  {
    id : 3,
    title: '5 Relationship Tips',
    descshort: 'Check Out these 5 tips on relationships!',
    desclong: 'These 5 tips will help you and your partner on the best way to carry on a long term relationship.',
    image: 'img/RelevateLogoL.png',
    iconImage: 'img/RelevateLogoL.png',
    date: new Date()
  }
  ];

    return {
    all: function() {
      return news;
    },
    remove: function(newsArticle){
      news.splice(news.indexOf(newsArticle),1);    
    },
    get: function(newsArticleId){
      for (var i = 0; i < news.length; i++){
        if (news[i].id === parseInt(newsArticleId)){
          return news[i];
        }
      }
      return null;
    }
    
 
    };
});