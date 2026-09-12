import { TMDB_API_KEY, BASE_URL, IMG_URL } from "./config.js";

const form = document.getElementById("search-form");
const results = document.getElementById("search-results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = document.getElementById("query").value;
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=vi-VN`);
  const data = await res.json();

  results.innerHTML = data.results.map(movie => `
    <div class="col-6 col-md-3 col-lg-2">
      <div class="card bg-dark text-light h-100">
        <img src="${IMG_URL + movie.poster_path}" class="card-img-top" alt="${movie.title}">
        <div class="card-body p-2">
          <h6 class="card-title">${movie.title}</h6>
          <a href="./info.html?id=${movie.id}" class="btn btn-sm btn-danger">Chi tiết</a>
        </div>
      </div>
    </div>
  `).join("");
}); 