import { getMovieData } from './api/api.js';
import { renderMovies } from './ui/renderMovies.js';

export const API_KEY = '30f62d0c'; //const API_KEY = 'YOUR_API_KEY';
export const moviesContainer = document.getElementById('movies');

const inputElement = document.getElementById('search');
let inputValue = '';

inputElement.addEventListener('input', async (event) => {
    inputValue = event.target.value;

    if(inputValue !== '' && inputValue.length > 3) {
        const movies = await getMovieData(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`);

        if(movies) {
            renderMovies(movies.Search);
        } else {
            moviesContainer.innerHTML = '<p class="failed">No movies found!</p>'
        }

    } else {
        moviesContainer.innerHTML = '';
        return;
    } 
});
