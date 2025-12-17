import { renderMovieDetailes } from '../ui/renderMovieDetails.js';
import { getMovieData } from '../api/api.js';
import { API_KEY } from '../main.js';
import { moviesContainer } from '../main.js';

function renderMovies(movies) {
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const cardOfMovie = createMovieCard(movie);
        moviesContainer.append(cardOfMovie);

        cardOfMovie.addEventListener('click', async () => {
            await handlerMovieClick(movie.imdbID);
        });
    });
}

function createMovieCard(movie) {
        const cardOfMovie = document.createElement('div');
        cardOfMovie.classList.add('movies__card');
        cardOfMovie.setAttribute('data-id', movie.imdbID);

        cardOfMovie.innerHTML = `
            <img src='${movie.Poster}' alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <span><strong>type:</strong>  ${movie.Type}</span><br>
            <span><strong>year:</strong>  ${movie.Year}</span>
        `;
        return cardOfMovie;
}

async function handlerMovieClick(id) {
    try{
        const movieDetails = await getMovieData(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);

        if(movieDetails) {
            moviesContainer.innerHTML = '';
            renderMovieDetailes(movieDetails);
        } else {
            console.lod('cann\'t find movie details by ID:', id);
            moviesContainer.innerHTML = '<p class="failed">Failed to load movie details.</p>';
        }

    } catch (error) {
        console.log('Error fetching movie details:', error);
    }
}

export {renderMovies, handlerMovieClick}
