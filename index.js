const moviesContainer = document.querySelector('#movies-container');
const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const title = input.value;
    const baseUrl = 'https://www.omdbapi.com/?s=batman&apikey=dd3a1236'
    const movieUrl = 'https://www.omdbapi.com/?s=batman&apikey=dd3a1236';
    

    fetch(movieUrl)
    .then((response) => response.json())
    .then((data) => {
      let list = data.Search;
      list.map( (item) => {
        showMovie(item)
      })
    });
});

function showMovie (item){
 let moviesContainer = document.getElementById('movies-container');
 let movieDiv = document.createElement('div');
 let image = document.createElement('img');
 let title = document.createElement('title');
 image.src = item.Poster;
 title.innerHTML = item.Title;
 movieDiv.appendChild(image);
 movieDiv.appendChild(title);
 moviesContainer.appendChild(movieDiv);
}





//   fetch(movieUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
      
//       // Bring it to life here
//     });
// });

