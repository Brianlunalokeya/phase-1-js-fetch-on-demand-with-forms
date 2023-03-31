const init = () => {
    const form = document.querySelector('form');
    const searchInput = document.querySelector('#searchByID');
    const movieDetails = document.querySelector('#movieDetails');
  
    form.addEventListener('submit', event => {
      event.preventDefault();
      const id = searchInput.value.trim();
      if (id) {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Movie not found');
            }
            return response.json();
          })
          .then(data => {
            movieDetails.innerHTML = `
              <h4>${data.title}</h4>
              <p>${data.description}</p>
            `;
          })
          .catch(error => {
            movieDetails.innerHTML = `<p>${error.message}</p>`;
          });
      } else {
        movieDetails.innerHTML = '';
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  