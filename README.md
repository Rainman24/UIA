# User Information App

This Node.js application has three main functionalities:

- Displaying the list of users
- Adding new users
- Searching for the existing ones

Each user is defined by his or her firstname, lastname and an email address.  
The user information is stored in a JSON file.  
JSON API is handled through the Express back-end framework. 

### Searchbar

The searchbar post requst is handled both on the server and client-side.  
Due to Ajax implementation, user suggestions are dynamically rendered on the keyup event.  
A selected suggestion on submit, redirects to the specific window location of the user in the userlist url. 

