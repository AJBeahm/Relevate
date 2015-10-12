angular.module('starter.services', [])


//Factory for quiz data access
.factory('Quizzes', function(){

  //Local quiz objects for testing
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

  //Basic return functions
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

//Factory for journal data access
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
      journals.splice(journals.length,0,newJournal);
    },
    remove: function(journalId){
      journals.splice(journals.indexOf(journalId),1);
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

//Factory for new data access
.factory('News', function(){

  //Local news articles for testin
  var news = [
  {
    id : 1,
    author: 1,
    title: '5 Relationship Tips',
    descshort: 'Check Out these 5 tips on relationships!',
    desclong: 'These 5 tips will help you and your partner on the best way to carry on a long term relationship.',
    image: 'img/RelevateLogoL.png',
    iconImage:'img/RelevateLogoL.png',
    date: new Date()
  },
  {
    id : 2,
    author: 1,
    title: '5 Relationship Tips',
    descshort: 'Check Out these 5 tips on relationships!',
    desclong: 'These 5 tips will help you and your partner on the best way to carry on a long term relationship.',
    image: 'img/RelevateLogoL.png',
    iconImage: 'img/RelevateLogoL.png',
    date: new Date()
  },
  {
    id : 3,
    author: 3,
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
    },
    getByAuthor: function(authorId){
      var list = [];
      for (var i = 0;i < news.length; i++){
         if(news[i].author === parseInt(authorId)){
          list.push(news[i]);
         }
      }
      return list;
    }


    };
})

//Factory for contributors
.factory('Contributors', function(){

  //Local news articles for testin
  var contributors = [
  {
    id : 1,
    name: 'Dr. Alex Beahm',
    description: 'Easasd faa elakd fjdksald hddjdj au shasjdfa djsakdkadfgk'
  },
  {
    id : 2,
    name: 'Dr. George Baker',
    description: 'Easasd ldldlkh jdkjdjkuh dhsasehj ksudjehhdskk jdhskajdh'
  },
  {
    id : 3,
    name: 'Dr. Nelson Pence',
    description: 'Enum kdlal dsaieksa ldldl;lkh dhsa;lhdd dieies lskdjh dldk'
  }
  ];

    return {
    all: function() {
      return contributors;
    },
    get: function(contributorId){
      for (var i = 0; i < contributors.length; i++){
        if (contributors[i].id === parseInt(contributorId)){
          return contributors[i];
        }
      }
      return null;
    }


    };
});