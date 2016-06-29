'use strict';

const app = require('../app.js');

const successSignUp = (data) => {
  if (data) {
    // console.log(data);
    $("#signup-success").text("User has successfully signed up");
    $("#signup-success").show();
      setTimeout(function() { $("#signup-success").hide(); }, 5000);

  } else {
    // console.log('Success');
    $("#signup-success").text("User has successfully signed up");


  }
};

const successChangePassword = (data) => {
  if (data) {
    // console.log(data);
    $("#password-changed-success").text("User has successfully changed password");
    $("#password-changed-success").show();
      setTimeout(function() { $("#password-changed-success").hide(); }, 5000);
  } else {
    // console.log('Success');
    $("#password-changed-success").text("User has successfully changed password");
    $("#password-changed-success").show();
      setTimeout(function() { $("#password-changed-success").hide(); }, 5000);

  }
};


const failure = (error) => {
  // console.error(error);
};


const signInSuccess = (data) => {
  app.user = data.user;
  $("#sign-in-success").text("User has successfully signed in");
  $("#sign-in-success").show();
    setTimeout(function() { $("#sign-in-success").hide(); }, 5000);
};

const signOutSuccess = () => {
  // console.log('User signed out successfully');
  app.user = null;
  $("#sign-out-success").text("User has successfully signed out");
  $("#sign-out-success").show();
    setTimeout(function() { $("#sign-out-success").hide(); }, 5000);
  $("#game-history").text("");
};

const getGamesSuccess = (data) => {
  app.matches = data.matches;
  // console.log(data);
  if (app.matches != undefined )
  {
    let matchHistory = "<table> <tr> <th> Opponent </th> <th>Date</th> <th> Result </th> <th> Delete </th> <th> Update </th> </tr>";
      for (let i = 0; i < app.matches.length; i++)
        {
          matchHistory = matchHistory + "<tr><td>" + app.matches[i].opponent + "</td><td>" +
          app.matches[i].date + "</td><td>" +
          app.matches[i].result + "</td><td>" +
          "<button class='deleteButtons' data-match-id='" + app.matches[i].id + "'>Delete</button>" + "</td><td>" +
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

const successCreateMatch = (data) => {
  if (data) {
    // console.log(data);
    $("#match-created-success").text("User has created a match, click Get Match History to display");
    $("#match-created-success").show();
      setTimeout(function() { $("#match-created-success").hide(); }, 5000);

  } else {
    // console.log('Success');
    $("#match-created-success").text("User has created a match, click Get Match History to display");
    $("#match-created-success").show();
      setTimeout(function() { $("#match-created-success").hide(); }, 5000);
  }
};


const successUpdateMatch = (data) => {
  if (data) {
    // console.log(data);
    $("#match-updated-success").text("User has updated a match, click Get Match History to display");
    $("#match-updated-success").show();
      setTimeout(function() { $("#match-updated-success").hide(); }, 5000);

  } else {
    // console.log('Success');
    $("#match-updated-success").text("User has updated a match, click Get Match History to display ");
    $("#match-updated-success").show();
      setTimeout(function() { $("#match-updated-success").hide(); }, 5000);
  }
};

const successDeleteMatch = (data) => {
  if (data) {
    // console.log(data);
    $("#match-deleted-success").text("User has deleted a match, click Get Match History to display");
    $("#match-deleted-success").show();
      setTimeout(function() { $("#match-deleted-success").hide(); }, 5000);

  } else {
    // console.log('Success');
    $("#match-deleted-success").text("User has deleted a match, click Get Match History to display");
    $("#match-deleted-success").show();
      setTimeout(function() { $("#match-deleted-success").hide(); }, 5000);
  }
};

module.exports = {
  // success,
  failure,
  signInSuccess,
  signOutSuccess,
  getGamesSuccess,
  successChangePassword,
  successSignUp,
  successCreateMatch,
  successUpdateMatch,
  successDeleteMatch,
};
