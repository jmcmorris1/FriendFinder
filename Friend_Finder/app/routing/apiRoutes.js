//linking the route to the data source
var friendList = require('../data/friends.js');

module.exports = function(app) {
    //a GET request that displays all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function(req, res) {
        //a POST request that grabs friend's scores to compare with friends in friendList array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //goes through all the current friends in the list
        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;
            //run through scores to compare friends; Math.abs returns absolute value of the number
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var love = friendList[bestMatch];
        res.json(love);

        //pushes into friendsList array
        friendList.push(req.body);
    });
};
