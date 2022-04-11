let random = Math.floor(Math.random() * 752, 919) + 1;
let btn = document.querySelector('#randomBtn');


// let newOpt =

    function card() {
        let random = Math.floor(Math.random() * 752, 919) + 1;
        let movie = `https://api.themoviedb.org/3/movie/${random}?api_key=e279ef38d7322234f5dbce86698431bb&language=US`
        fetch(movie)
            .then(function (response) {
                console.log(response)
                if (response.status === 404) {
                    document.location.reload()
                }
                return response.json()
            })
            .then(function (data) {
                console.log(data)
                document.querySelector('.poster').setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);

            })
    }

function cards() {
    let drinks = 'https://thecocktaildb.com/api/json/v1/1/random.php'
    fetch(drinks)
        .then(function (response) {
            console.log(response)
            if (response.status === 404) {
                document.location.reload()
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            document.querySelector('.beverage').setAttribute('src', data.drinks[0].strDrinkThumb)
        })
}

btn.addEventListener('click', function () {
    cards()
    card()
})