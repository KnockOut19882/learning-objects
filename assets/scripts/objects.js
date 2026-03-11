const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return; // Exit the function early if there are no movies to display
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = ""; // Clear the existing list before rendering the filtered movies

  const filteredMovies = !filterTerm
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterTerm));

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { info } = movie; // Destructuring to separate info from other properties
    // const { title: movieTitle } = info; // Destructuring to extract the title from info and rename it to movieTitle
    // let { formattedTitle } = movie; // Destructuring to extract the formattedTitle method from info and rename it to formattedTitle
    // formattedTitle = formattedTitle.bind(movie); // Bind the formattedTitle method to the movie object to ensure it has the correct context when called
    let text = info._title + " - "; // Start with the title, 
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
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
    // title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(value) {
        // this._title = value.trim() === "" ? "DEFAULT" : value; // Use a ternary operator to set the title to "DEFAULT" if the value is empty after trimming, otherwise set it to the provided value
        if(value.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = value; // Use the setter to set the title, which will handle the validation and default value logic
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    formattedTitle: function () {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };
  newMovie.info.title = title; // Use the setter to set the title, which will handle the validation and default value logic
  console.log(newMovie.info.title); // Log the title to the console to verify that it has been set correctly
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

searchButton.addEventListener("click", searchMovieHandler);
addMovieButton.addEventListener("click", addMovieHandler);
