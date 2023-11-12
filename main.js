const iTunesUrl = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let container = document.getElementById("container");


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let term = searchTerm.value;
    console.log(term);
    fetch(iTunesUrl + term).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            let errorMsg = document.createElement ('h2');
            errorMsg.innerText = "API call failed, please try again.";
            results.appendChild(errorMsg);
        }
    }).then((parsedJsonResponse) => {
        console.log(parsedJsonResponse);
        const songs = parsedJsonResponse.results;
        return songs.map(results => {
            const songTile = document.createElement("div"),
            artist = document.createElement('h3'),
            song = document.createElement('h4'),
            img = document.createElement('img'),
            audio = document.createElement('audio'),
            audioSrc = document.createElement('source')

        artist.innerHTML = results.artistName;
        song.innerHTML = results.trackName;
        img.src = results.artworkUrl100;
        audioSrc.src = results.previewUrl;

        songTile.appendChild(img);
        songTile.appendChild(song);
        songTile.appendChild(artist);
    //    songTile.appendChild(audioSrc);

        container.appendChild(songTile);
        })
    })


}) 

// function songTiles (results) {
//     let songName = document.createElement('h4');
//     let artistName = document.createElement('h3');
//     songName.innerHTML = parsedJsonResponse[0]


// }



// Search address should look like: https://itunes.apple.com/search?term=Madonna
// https://itunes.apple.com/search?term=jack+johnson
//https://itunes.apple.com/search?term=madonna&limit=10
//https://itunes.apple.com/search?term=madonna&limit=10&media=music