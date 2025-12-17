async function getMovieData(url) {
    try{
        const response = await fetch(url);

        if(!response.ok) {
            console.log('HTTP error');
            return null;
        }
        const data = await response.json();

        if(data.Response === 'True') {
            return data;
        } else {
            console.log('OMDb error', data.Error);
            return null;
        }
    } catch (error) {
        console.log('Fetch error:', error);
        return null;
    }
}

export {getMovieData}
