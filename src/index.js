import "regenerator-runtime";
import "./images/nopics.jpg";
import "./styles/style.css";
import "./scripts/components/movie-card.js"
import { popularMovies } from "./scripts/getMovies.js";

document.addEventListener("DOMContentLoaded", popularMovies)