import { data } from "./data.js";
const listTitle = document.querySelectorAll(".title2");
const search = document.querySelector("#search");
const searchBtn = document.querySelector("#submit");

const popularMovies = async () => {
    try {
        const res = await fetch(`${data.baseUrl}/movie/popular?api_key=${data.apiKey}`);
        const resJson = await res.json();
        renderMovies(resJson.results);
    } catch (err) {
        showAlert(`ERROR Can't get data: ${err}`);
    }
    listTitle.forEach(title => title.innerHTML = "Popular");
}

const searchMovies = async () => {
    const keyword = search.value;
    try {
        const res = await fetch(`${data.baseUrl}/search/movie?api_key=${data.apiKey}&query=${keyword}`);
        const resJson = await res.json();
        if (resJson.results.length > 0) {
            renderMovies(resJson.results);
        } else {
            showAlert(`${keyword} tidak ditemukan`);
        }
    } catch (err) {
        showAlert(`ERROR Can't get data: ${err}`);
    }
    listTitle.forEach(title => title.innerHTML = `Search : ${keyword}`);
}

const renderMovies = (movies) => {
    //Resets movie list
    const movieList = document.querySelector("#movie-list");
    movieList.innerHTML = "";

    movies.forEach( async movie => {
        //GET Movie Url
        let movUrl;
        try {
            const res = await fetch(`${data.baseUrl}/movie/${movie.id}?api_key=${data.apiKey}`);
            const movDetails = await res.json();
            if (movDetails.homepage) {
                movUrl = movDetails.homepage;
            } else {
                movUrl = "javascript:showAlert('This Movie does not have a homepage');"
            }
        } catch (err) {
            console.log(err);
        }

        //Make movie-card element
        let poster = '';
        if (movie.poster_path)
            poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        else
            poster = "/src/images/nopics.jpg"
        movieList.innerHTML += `<movie-card
                                class="card hover-float"
                                url="${movUrl}" 
                                img="${poster}"
                                title="${movie.original_title}"
                                date="${movie.release_date}"></movie-card>`
    });
}

searchBtn.addEventListener("click", searchMovies);

export { popularMovies };