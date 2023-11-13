const iTunesUrl = "https://itunes.apple.com/search?term=";
const limit = "&limit=10";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let container = document.getElementById("container");
let preview = document.getElementById("preview");

 searchForm.addEventListener('submit', (event) => {
     event.preventDefault();
     let term = searchTerm.value;
     console.log(term);
     fetch(iTunesUrl + term + limit, {
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
              </div>
                 `
         })
     })
 }) 

//  songElement.addEventListener("click", function (event) {
//     if (event.target.textContent.includes(song.trackName)) {
//         audioPlayer.src = event.target.nextElementSibling.innerText
//     }
// })




// DIFFERENT WAY OF FORMATING JS

// const app = {
//     data: {
//         url: "https://itunes.apple.com/search?term=Madonna",
//         songTiles: []
//     },

//     searchForm.addEventListener('submit', (event) => {

//     })

//     getSongs: function () {
//         this.data.songTiles = []
//         fetch(this.data.url + term, {
//             method: "GET",
//             headers: {"Content-Type": "application/json"},
//         })
//         .then(r => r.json())
//         .then(response => {
//             this.data.songTiles = []
//            for (let songs of response.results){ 
//             this.data.songTiles.push(songs)
//            }
//            this.generateTilesHTML();
//         });
//     },

//     generateTilesHTML: function () {
//         let container = document.getElementById("container");
//         for (let songs of this.data.songTiles) {
//             container.innerHTML += `
//             <div class ="songTile">
//                 <img src=${songs.artworkUrl100}
//                 <h6>${songs.trackName}</h6>
//                 <h3>${songs.artistName}</h3>
//                 </div>`
//         }
//     },

//     main: function () {
//         this.searchButton();
//     },
// };

// app.main();
