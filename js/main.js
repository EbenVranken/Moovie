$(document).ready(() => {
    getMovies("the matrix");
    $("#movieSearch").on("change paste keyup", (e) => {
        let search = $('#movieSearch').val();
        getMovies(search);
        e.preventDefault();
    });
});

function getMovies(search) {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=590d89af&s=' + search)
        .then((response) => {
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                if (movie.Poster !== "N/A") {
                    output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <a href="https://www.imdb.com/title/${movie.imdbID}/" target=_blank><img src="${movie.Poster})"></a>
                    </div>
                </div>
            `;
                }
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        })
}