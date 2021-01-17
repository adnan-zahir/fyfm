import { baseUrl, apiKey } from "./data.js";
const listTitle = document.querySelectorAll(".title2");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#submit");

const popularMovies = async () => {
    const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await res.json();
    renderMovies(data.results);
    listTitle.forEach(title => title.innerHTML = "Popular");
}

// const searchMovies = async () => {
//     const keyword = search.value
//     const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`);
//     const data = await res.json();
//     renderMovies(data.results);
//     listTitle.forEach(title => title.innerHTML = "Popular");
// }

const searchMovies = () => {
    const keyword = search.value;
    fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`)
    .then((res) => res.json())
    .then((data) => {
        if (data.results.length > 0) {
            renderMovies(data.results);  
        } else {
            alert(`${keyword} tidak ditemukan`)
        }
    })
    .catch((err) => alert(err.status_message));
    listTitle.forEach(title => title.innerHTML = `Search : ${keyword}`);
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

searchBtn.addEventListener("click", searchMovies)

export { popularMovies };