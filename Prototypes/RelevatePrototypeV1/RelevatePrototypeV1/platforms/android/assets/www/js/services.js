angular.module('starter.services', [])

.factory('Articles', function() {
  // Might use a resource here that returns a JSON array

    var articles = [
        {
            id: 0,
            title: 'A Freshman Girl\'s Guide to Frat Parties',
            description: 'A large part of the ?#?college? culture includes binge drinking. Always know the facts before you make bar hopping a recreational activity. Students in a sorority or fraternity are more likely to participate in drinking mass amounts of ?#?alcohol? and partake in activities outside of the classroom according to research. And while some believe that this is an exceptional setting to meet the “person that ignites your flame,” things can get out of control fast with unwanted sexual advances. Whether you\'re a part of a ?#?Greeklife? get-together or simply celebrating a winning home game, place ?#?safety? on the highest wrung of your priority ladder. Make yourself an advocate of fun but also safe nights with friends with the attached tips. People admire leadership and a trendsetter. Set the standard for controlled parties and not blacked out mornings -- others will follow suit!',
            link: 'http://www.hercampus.com/life/campus-life/freshman-girl-s-guide-frat-parties',
            img: 'img/RelevateLogoXL.png',
            tags: ['Frat','Party','Safety','Tips','Freshman','Drinking']
        }
    ];

  return {
    all: function() {
      return articles;
    },
    remove: function(article) {
      articles.splice(articles.indexOf(article), 1);
    },
    get: function(articleId) {
      for (var i = 0; i < articles.length; i++) {
        if (articles[i].id === parseInt(articleId)) {
          return articles[i];
        }
      }
      return null;
    }
  };
})

.factory('Users', function () {

    var users = [
        {
            id: 0,
            name : Alex,
            username: test,
            password: test
        }
    ];

    return {
        get: function (username, password) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    if (users[i].password === password) {
                        return users[i];
                    }
                }
            }
            return null;
        }
    };
});
