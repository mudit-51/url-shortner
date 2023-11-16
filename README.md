# URL Shortner
This is the front-end for a URL-shortner I built.

The application is live at: https://mudit-51-url-shortner.netlify.app/

Built using React.
## How does it work?
Using the website to create a URL: 
1. The user inputs the URL into the text box. The application checks whether it is a valid URL or not. One con currently is that every URL is required to be prefaced by `https://` or `http://`. I hope to fix this in the near future.
2. If a valid URL is entered, the appliation makes a `POST` request to the backend. The `POST`  request body contains the input URL.
3. The backend queries the database if a Base62 "hash" for the given website exists. This application uses **MongoDB**.
4. If hash exists, then it is returned, and the shortened URL is displayed. If it does not exist, it is generated and then returned to the user. The database is then updated with the hash for that particular website.  

Using a shortened URL generated by the website:
1. The application takes everything entered after the domain as the hash, and then sends a `GET` request with that hash to the backend. 
2. The backend queries the database for that hash.
3. If a website associated with that hash exists, then the `GET` request is redirected to that website URL. Otherwise the user is redirected to an error page. 
## Dependencies
* Node.js (>=0.10.0)
* Node Packet Manger (npm) 
* React Router 
* Tailwind CSS

## Running Locally
1. Clone the project.
2. Install dependencies using `npm install`
3. You have two choices now: 
    * Start a development server to view the application using `npm start`
    * Build the application using `npm build` and then serve it using a static server

    Note: 
    * This only runs the front-end of the application. The application will not be functional, ie. it will not give an output for any input.
    * Cloning and running the backend is necessary to run the entire application locally. 
    * You will have to change the fetch URL target in `Root.jsx` and `Redirect.jsx` to a `localhost` address to run the entire application locally.

readme still a wip