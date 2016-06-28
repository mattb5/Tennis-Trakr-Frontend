'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};



const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

const getGamesSuccess = (data) => {
  app.matches = data.matches;
  console.log(data);
  if (app.matches != undefined )
  {
    let matchHistory = "";
      for (let i = 0; i < app.matches.length; i++)
        {
          matchHistory = matchHistory + "<tr><td>" + app.matches[i].opponent + "</td><td>" +
          "<button type='delete' class='deleteButtons' data-match-id='" + app.matches[i].id + "'>Delete</button> <br></br>" + "</td><td>" +
          "<button class='updateButtons' data-match-id='" + app.matches[i].id + "'>Update</button> </tr>";
        }
        matchHistory = matchHistory + "</table>"
    $("#game-history").html(matchHistory);
  }
  else
  {
    $("#game-history").text("Current user does not have any matches, create a match!");
  }
};



// let displayBooks = function(matches){
// let matchesListingTemplate = require('../templates/book-listing.handlebars');
//
//   $('.content').append(matchesListingTemplate(books));
//   console.log(books)
// };


module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getGamesSuccess,
};
