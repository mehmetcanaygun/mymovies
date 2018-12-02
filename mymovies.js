var actionMoviesArray = [
  ["Action Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Action Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Action Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["actlala", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Action Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

var animationMoviesArray = [
  ["Animation Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Animation Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Animation Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["Animation Name4", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Animation Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

var scifiMoviesArray = [
  ["Scifi Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Scifi Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Scifi Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["Scifi Name4", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Scifi Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

var fantasticMoviesArray = [
  ["Fantastic Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Fantastic Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Fantastic Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["Fantastic Name4", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Fantastic Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

var comedyMoviesArray = [
  ["Comedy Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Comedy Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Comedy Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["Comedy Name4", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Comedy Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

var adventureMoviesArray = [
  ["Adventure Name1", "1991", "Director1", "Actors1", "Summary1", "5.1", "Good1", "trailer1"],
  ["Adventure Name2", "1992", "Director2", "Actors2", "Summary2", "5.2", "Good2", "trailer2"],
  ["Adventure Name3", "1993", "Director3", "Actors3", "Summary3", "5.3", "Good3", "trailer3"],
  ["Adventure Name4", "1994", "Director4", "Actors4", "Summary4", "5.4", "Good4", "trailer4"],
  ["Adventure Name5", "1995", "Director5", "Actors5", "Summary5", "5.5", "Good5", "trailer5"]
];

// Define filter inputs
var movieFilter = document.getElementById("movie-filter");

var chosenGenreItemsArray;


// Specify which array to be displayed with the clicked anchor id
function chooseGenre(clickedGenre) {
  if(clickedGenre == "action") {
    displayMovies(actionMoviesArray);
  } else if(clickedGenre == "animation") {
    displayMovies(animationMoviesArray);
  } else if(clickedGenre == "scifi") {
    displayMovies(scifiMoviesArray);
  } else if(clickedGenre == "fantastic") {
    displayMovies(fantasticMoviesArray);
  } else if(clickedGenre == "comedy") {
    displayMovies(comedyMoviesArray);
  } else if(clickedGenre == "adventure") {
    displayMovies(adventureMoviesArray);
  }
}

// Display the chosen array as list
function displayMovies(arrayName) {
  var movieListDiv = document.getElementById("movie-list-div");
  if(movieListDiv.innerHTML == "") {
    var ul = document.createElement("ul");
    for(var i=0; i<arrayName.length; i++) {
      var li = document.createElement("li");
      li.classList.add("chosen-genre-item");
      li.innerHTML = "<strong>Movie name: </strong>" + arrayName[i][0] + " <strong>Year: </strong>" + arrayName[i][1] + " <strong>Director: </strong> " + arrayName[i][2] + " <strong>Actors/Actresses: </strong> " + arrayName[i][3] + " <strong>Summary: </strong> " + arrayName[i][4] + " <strong>IMDB Rate: </strong> " + arrayName[i][5] + " <strong>My Comment: </strong> " + arrayName[i][6] + " <strong>Trailer: </strong> <a href='" + arrayName[i][7] + "' class='trailer-link'>Trailer</a>";
      ul.appendChild(li);
    }
    movieListDiv.appendChild(ul);
  } else {
    movieListDiv.innerHTML = "";
    displayMovies(arrayName);
  }
  chosenGenreItemsArray = document.getElementsByClassName("chosen-genre-item");
  var itemContent = "";
}

// Get inputs from filter tools
movieFilter.onkeyup = function() {
  // Filter movie names
  var filterInput = movieFilter.value;
  for(var i = 0; i < chosenGenreItemsArray.length; i++) {
    itemContent = chosenGenreItemsArray[i].innerText;
    if((itemContent.toLowerCase()).includes(filterInput.toLowerCase())) {
      chosenGenreItemsArray[i].hidden = false;
    } else {
      chosenGenreItemsArray[i].hidden = true;
    }
  }
}

document.getElementById("random-movie-button").onclick = function() {
  var movieList = document.getElementById("movie-list-div");
  if(movieList.innerHTML == "") {
    alert("Choose a category first.");
  } else {
    var rand = Math.floor(Math.random() * chosenGenreItemsArray.length);
    for(var i=0; i<chosenGenreItemsArray.length; i++) {
      chosenGenreItemsArray[i].hidden = true;
    }
    chosenGenreItemsArray[rand].hidden = false;
  }
}
