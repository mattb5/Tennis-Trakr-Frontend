'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.successSignUp)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.successChangePassword)
  .fail(ui.failure);
};

const onGetHistory = (event) => {
  event.preventDefault();
  api.getHistory()
  .done(ui.getGamesSuccess)
  .fail(ui.failure);
};

const onCreateMatch = (event) => {
  event.preventDefault();
  let opponentName = $("#getOpponentName").val();
  let matchDate = $("#create-opponent-date").val();
  let matchResult = $("#create-opponent-result").val();
  api.createMatch(opponentName,matchDate, matchResult)
  .done(ui.successCreateMatch)
  .fail(ui.failure);
};

const onMaybeDeleteMatch = (event)=> {
  event.preventDefault();
  let matchIDtoDelete = $(event.target).data("match-id");
  api.deleteMatch(matchIDtoDelete)
  .done(ui.successDeleteMatch)
  .fail(ui.failure);
};

const onMaybeUpdateMatch = (event) => {
  event.preventDefault();
  let matchIDtoUpdate = $(event.target).data("match-id");
    let updatedOpponentName = $("#update-opponent-name").val();
    let updatedMatchDate = $("#update-opponent-date").val();
    let updatedMatchResult= $("#update-opponent-result").val();
  api.updateMatch(matchIDtoUpdate, updatedOpponentName, updatedMatchDate, updatedMatchResult)
  .done(ui.successUpdateMatch)
  .fail(ui.failure);
};



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#get-matches').on('submit', onGetHistory);
  $('#create-match').on('submit', onCreateMatch);
  $(document).on('click','.deleteButtons', onMaybeDeleteMatch);
  $(document).on('click','.updateButtons', onMaybeUpdateMatch);
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
    })
};
//
module.exports = {
  addHandlers,
};
