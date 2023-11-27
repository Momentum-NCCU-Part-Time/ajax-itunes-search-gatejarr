const iTunesUrl = "https://itunes.apple.com/search?term=";
const limit = "&limit=10";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let container = document.getElementById("container");
let preview = document.getElementById("preview");

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let field = [];
    field = searchField.value;
  fetch(iTunesUrl +field + "&media=music" + limit).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    else {
      let errorMsg = document.createElement ('h2');
             errorMsg.innerText = "API call failed, please try again.";
             container.appendChild(errorMsg);
    }
  }).then((parsedJsonResponse) => {
    if(parsedJsonResponse.resultCount === 0) {
      alert('No Results found. Please try again.')
   }else {
    console.log(parsedJsonResponse);
    const songs = parsedJsonResponse.results;
    songs.innerHTML = [];
    return songs.map(results => {
      const songCard = document.createElement('div');
      artist = document.createElement('h3');
      songTitle = document.createElement('p');
      albumArt = document.createElement('img');
      let previewButton = document.createElement('button');
      
      //Song Preview
      previewButton.innerText = "Play Preview";
      previewButton.addEventListener('click', (e) => {
        e.preventDefault();
        preview.src = results.previewUrl;
      });

      artist.innerHTML = results.artistName;
      songTitle.innerHTML = results.trackName;
      albumArt.src = results.artworkUrl100;

      songCard.appendChild(albumArt);
      songCard.appendChild(songTitle);
      songCard.appendChild(artist);
      songCard.appendChild(previewButton);

      container.appendChild(songCard);
    })
   }
  })
})