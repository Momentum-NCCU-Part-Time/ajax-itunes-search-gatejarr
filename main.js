const iTunesUrl = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let container = document.getElementById("container");
let preview = document.getElementById("preview");
let newSearch = false;

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let term = searchTerm.value;
    console.log(term);
    fetch(iTunesUrl + term, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            let errorMsg = document.createElement ('h2');
            errorMsg.innerText = "API call failed, please try again.";
            container.appendChild(errorMsg);
        }
    }).then((parsedJsonResponse) => {
        console.log(parsedJsonResponse);
        const songs = parsedJsonResponse.results;
        if (newSearch = true) {
        return songs.map(results => {
            preview.innerHTML = `
            <figure>
                <figcaption>Preview:</figcaption>
                <audio controls src=""></audio>
            </figure>`,
            container.innerHTML += `
            <div class="songTile">
                <img src=${results.artworkUrl100} />
                <button class="preview">${results.trackName}</button>
                <h3>${results.artistName}</h3>
                `
        })
    }
    })


}) 
