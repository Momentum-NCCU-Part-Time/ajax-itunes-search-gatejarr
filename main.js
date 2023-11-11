const iTunesUrl = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let results = document.getElementById("results");

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