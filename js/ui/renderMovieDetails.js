import { handlerMovieClick } from '../ui/renderMovies.js';

const moviesContainer = document.getElementById('movies');

const viewedMovie = [];
const visitedMovieContainer = document.getElementById('visited-movies__container');

function renderMovieDetailes(movie) {
        const cardOfMovie = createMovieDetailesElement(movie);
        moviesContainer.append(cardOfMovie);

        addVisitedMovies(movie);
        renderVisitedMovies(viewedMovie);
}

function createMovieDetailesElement(movie) {
    const cardOfMovie = document.createElement('div');
    cardOfMovie.classList.add('movies__detailes');
    
    cardOfMovie.innerHTML = `
        <img src='${movie.Poster}' alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p><strong>genre:</strong> ${movie.Genre}</p>
        <p><strong>year:</strong> ${movie.Year}</p>
        <p><strong>plot:</strong> ${movie.Plot}</p>
        <p><strong>runtime:</strong> ${movie.Runtime}</p>
        <p><strong>rating:</strong> ${movie.imdbRating}</p>
        <p><strong>director:</strong> ${movie.Director}</p>
        <p><strong>actors:</strong> ${movie.Actors}</p>
    `;

    return cardOfMovie;
}

function addVisitedMovies(movie) {

    const isViewed = viewedMovie.some(
        viewed => viewed.imdbID === movie.imdbID
    );

    if (!isViewed) {
        viewedMovie.push(movie);
    }

    return viewedMovie;
}

function renderVisitedMovies(visitedMovie) {
    visitedMovieContainer.innerHTML = '';

    visitedMovie.forEach(movie => {
        const cardVisitedMovie = document.createElement('div');
        cardVisitedMovie.classList.add('visited-movies__card');

        cardVisitedMovie.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p>${movie.Title}</p>
        `;

        cardVisitedMovie.addEventListener('click', async () => {
            await handlerMovieClick(movie.imdbID);
        });

        visitedMovieContainer.append(cardVisitedMovie);

    });
}

export {renderMovieDetailes}
