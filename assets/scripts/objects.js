const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // Clear the existing list before rendering the filtered movies

  const filteredMovies = !filterTerm
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterTerm));

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { info, } = movie; // Destructuring to separate info from other properties
    const { title: movieTitle } = info; // Destructuring to extract the title from info and rename it to movieTitle
    let text = movieTitle + " - "; // Start with the title
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
  };
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

searchButton.addEventListener("click", searchMovieHandler);
addMovieButton.addEventListener("click", addMovieHandler);
