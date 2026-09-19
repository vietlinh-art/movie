import { TMDB_API_KEY, BASE_URL, IMG_URL } from "./config.js";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

// Lấy chi tiết phim
async function getMovieDetail() {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=vi-VN`);
  const movie = await res.json();
  document.getElementById("movie-detail").innerHTML = `
    <div class="col-md-4">
      <img src="${IMG_URL + movie.poster_path}" class="img-fluid rounded" />
    </div>
    <div class="col-md-8">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
      <p><b>Ngày phát hành:</b> ${movie.release_date}</p>
      <p><b>Điểm TMDB:</b> ${movie.vote_average}</p>
    </div>
  `;
}
getMovieDetail();


// Bình luận
const form = document.getElementById("comment-form");
const list = document.getElementById("comment-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.getElementById("comment").value;
  const comments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
  comments.push(comment);
  localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));
  renderComments(comments);
  form.reset();
});

function renderComments(comments) {
  list.innerHTML = comments.map(c => `<li class="list-group-item bg-dark text-light">${c}</li>`).join("");
}
renderComments(JSON.parse(localStorage.getItem(`comments_${movieId}`)) || []);