# HOW TO USE THE API

# How to install dependencied
* Install dependencies by running npm install in the root directory of the project.

# Setting up environment variables
* Define a .env file that contains your environment variable
    * PORT => port the server should listen on
    * MYSQL_DB => Your mysql database, Create it manually.
    * MYSQL_USER => Mysql user
    * MYSQL_PASSWORD => Mysql password of the user
    * MYSQL_HOST => Mysql host

# How to run
* Run npm start in the project root directory

# How to use
# POST REQUEST => e.g http//localhost:5000/api
    * to create a new user:
    * The endpint expects an attribute "name" from the body of the request
    * The value of name can only be a String
    * Returns a json response => 'User created Successfully' with the id . If the user was created in the database
    * Else returns an error message.

# GET REQUEST => e.g http//localhost:5000/api/:user_id
    * To get a user replace, replace :user_id with an integer representing the id of a user created
    * If no user is found, The API returns 'User not found!'
    * Else, returns the name of the user with the corresponding id.

# PUT REQUEST => e.g http//localhost:5000/api/:user_id
    * To update a user information, replace the :user_id with an integer representing the id of the user.
    * Send the new 'name' in the body of the request
    * If not user found with the id, 'User not found!' is returned
    * Else the user information in the database is update (name). and a response 'User updated successfully is returned'

# DELETE REQUEST => e.g http//localhost:5000/api/:user_id
    * To delete a user, replace :user_id with an integer representing the id of the user.
    * if no user with the id is found, the API returns 'No user found!'
    * Else deletes the user with the if and returns 'User deleted successfully!'.