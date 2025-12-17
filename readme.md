A small web application for real-time movie search using the external OMDb API.
Supports Live Search, viewing movie details, and history of watched movies.

Features:
    Live Search – search results update while typing
    Integration with OMDb API
    Movie details page (plot, genre, rating, actors, etc.)
    Viewed movies history
    Error handling for API & network issues

Technologies Used:
    JavaScript (ES6+)
    Fetch API
    Async / Await
    Promises
    HTML5
    SASS (SCSS)
    Live Server
    OMDb API

API Setup: 
    This project uses the OMDb API.
    Get an API key:
        https://www.omdbapi.com/apikey.aspx
    Add your API key to the project:
        const API_KEY = 'YOUR_API_KEY';
        
Running the Project:
    Compile SASS:
        If you use SASS CLI:
            sass sass/main.scss css/main.css --watch
        Or use a VS Code extension like Live Sass Compiler.

    Start Live Server:
        Open index.html
        Right-click → Open with Live Server
        The app will be available at:
            http://127.0.0.1:5500

Usage:
    Type a movie name into the search input
    Results appear automatically (Live Search)
    Click on a movie card to view detailed information
    Viewed movies are stored and rendered separately
