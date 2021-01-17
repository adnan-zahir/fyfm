const apiKey = "9b651285bf3fae21dd77597bd249ef3b";
const baseUrl = "https://api.themoviedb.org/3";

const listTitle = document.querySelectorAll(".title2")

const popularMovies = async () => {
    const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await res.json();
    renderMovies(data.results);

}

const renderMovies = (movies) => {
    const movieList = document.querySelector("#movie-list");
    movieList.innerHTML = "";
    movies.forEach(movie => {
        movieList.innerHTML += `<movie-card
                                class="card hover-float"
                                url="" 
                                img="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                                title="${movie.original_title}"
                                date="${movie.release_date}"></movie-card>`
    });
}

export { popularMovies }