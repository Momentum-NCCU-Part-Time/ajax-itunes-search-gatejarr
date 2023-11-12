const iTunesUrl = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let container = document.getElementById("container");
let preview = document.getElementById("preview");


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
                <a hfref=${results.previewUrl}>Preview</a>
                `
        })
    })


}) 



        // Old way of displaying results on index.html; switched to template literal

        //     const songTile = document.createElement("div"),
        //     artist = document.createElement('h3'),
        //     song = document.createElement('h4'),
        //     img = document.createElement('img'),
        //     audio = document.createElement('audio'),
        //     audioSrc = document.createElement('source')

        // artist.innerHTML = results.artistName;
        // song.innerHTML = results.trackName;
        // img.src = results.artworkUrl100;
        // audioSrc.src = results.previewUrl;
        // //audio.controls = true;

        // songTile.appendChild(img);
        // songTile.appendChild(song);
        // songTile.appendChild(artist);
        // songTile.appendChild(audio);
        // songTile.appendChild(audioSrc);

        // container.appendChild(songTile);

// Search address should look like: https://itunes.apple.com/search?term=Madonna
// https://itunes.apple.com/search?term=jack+johnson
//https://itunes.apple.com/search?term=madonna&limit=10
//https://itunes.apple.com/search?term=madonna&limit=10&media=music