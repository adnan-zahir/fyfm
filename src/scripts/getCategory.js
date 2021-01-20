import { data } from "./data.js";
import { renderMovies } from "./getMovies.js";

const listTitle = document.querySelectorAll(".title2");
const genreList = document.querySelectorAll(".genre-list");
genreList.forEach(genre => {
    genre.addEventListener("click", async e => {
        try {
            const res = await fetch(`${data.baseUrl}/discover/movie?api_key=${data.apiKey}&with_genres=${e.target.name}`);
            const resJson = await res.json();
            renderMovies(resJson.results);
        } catch (err) {
            showAlert("Error.", err)
        }
        listTitle.forEach(title => title.innerHTML = `Genre : ${genre.innerHTML}`);
    })
})
