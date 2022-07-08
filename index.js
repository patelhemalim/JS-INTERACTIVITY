console.log('MOVIE PAGE');





function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', deleteMovie);
    movie.appendChild(deleteButton);

    let list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value = '';
    movieTitle.addEventListener('click', crossOffMovie);
}


let elementForm = document.querySelector('form')
elementForm.addEventListener('submit', addMovie);
console.log(addMovie)


function deleteMovie(event) {
    event.target.parentNode.remove()
}
console.log(deleteMovie)

function crossOffMovie(event) {
    console.log(event)
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'watched movie'
    } else {
        message.textContent = 'movie added'
    }
}








