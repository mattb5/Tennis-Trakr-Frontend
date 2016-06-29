Succinctly put, this app allows a user to log-in to his account and retrieve his personal tennis match history statistics.  The user can also add new matches to this history as well as delete matches and update matches with new information.

First in building the app, I made a one-to-many table in our rails database which migrated into it
a user_id (column from the user table) as well as columns of tennis match opponent, date matched was played,
and resulting score of match.

From there, I made sure the database was set up properly by seeding it with data. From there, I made sure the tables routes, controller and model was properly setup by successfully sending it curl requests to get data from it, post data to it, delete table rows, and also update table rows.

From there, I incorporated the current_user defined variable which was (sort of) given to us in the example controller.  This ensured that, from the curl requests, it was only the current user's data that was being CRUD upon.

From there, I built a front end website to send AJAX requests for the USER to signup, signin, logout, and change password.  Then, I made ajax functions that, upon a user being logged in, it would perform the approriate CRUD actions to create a new match, delete a match, get match history, and also update a match's data.  These forms and buttons were appropriately inserted into the UI with HTML buttons and forms.

I used CSS and HTML and personal styling to make the site appealing to the user.

The app's backend github repo can be found here : https://github.com/mattb5/Tennis-Trakr-BackEnd

User stories for my app include
- as a user, I want to be able to retrieve just MY personal tennis match history.
- as a user, I want to be able to add new matches to my tennis match history.
- as a user, I want a password-protected account so that only I can see my tennis match history (I lose a lot of matches, so I don't want   to let others see my losing streaks).
- as a user, I want simplicity in design so that I don't need to search hard and long to find my match history.

Link To WireFrame:

http://imgur.com/a/lTGWX

Link to Live Application:

https://mattb5.github.io/Tennis-Trakr-Frontend/
