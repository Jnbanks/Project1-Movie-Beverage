
let btn = document.querySelector('#randomBtn');

let action = document.querySelector('#action');
let adventure = document.querySelector('#adventure');
let animation = document.querySelector('#animation');
let comedy = document.querySelector('#comedy');
let drama = document.querySelector('#drama');
let fantasy = document.querySelector('#fantasy');
let horror = document.querySelector('#horror');
let romance = document.querySelector('#romance');
let scienceFriction = document.querySelector('#science-friction');
let thriller = document.querySelector('#thriller');
let btn1 = document.querySelector('.btn2')



function card() {
    let random = Math.floor(Math.random() * 752, 919) + 1;
    let movie = `https://api.themoviedb.org/3/movie/${random}?api_key=e279ef38d7322234f5dbce86698431bb&language=US$region=US`
    fetch(movie)
        .then(function (response) {
            console.log(response)
            if (response.status === 404) {
                card()
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            document.querySelector('.poster').setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
            document.querySelector('.title').textContent = data.original_title;
        })
}

function cards() {
    let drinks = 'https://thecocktaildb.com/api/json/v1/1/random.php'
    fetch(drinks)
        .then(function (response) {
            console.log(response)
            if (response.status === 404) {
                cards()
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            document.querySelector('.beverage').setAttribute('src', data.drinks[0].strDrinkThumb)
            document.querySelector('.name-drink').textContent = data.drinks[0].strDrink;
            if (data.drinks[0].strIngredient1 === null) {
                document.querySelector('li .ingredient1').style.display = 'none'
            } else {
                document.querySelector('li .ingredient1').textContent = data.drinks[0].strIngredient1
            }
            if (data.drinks[0].strIngredient2 === null) {
                document.querySelector('li .ingredient2').style.display = 'none'
            } else {
                document.querySelector('li .ingredient2').textContent = data.drinks[0].strIngredient2
            }
            if (data.drinks[0].strIngredient3 === null) {
                document.querySelector('li .ingredient3').style.display = 'none'
            } else {
                document.querySelector('li .ingredient3').textContent = data.drinks[0].strIngredient3
            }
            if (data.drinks[0].strIngredient4 === null) {
                document.querySelector('li .ingredient4').style.display = 'none'
            } else {
                document.querySelector('li .ingredient4').textContent = data.drinks[0].strIngredient4
            }
            if (data.drinks[0].strIngredient5 === null) {
                document.querySelector('li .ingredient5').style.display = 'none'
            } else {
                document.querySelector('li .ingredient5').textContent = data.drinks[0].strIngredient4
            }
            if (data.drinks[0].strIngredient6 === null) {
                document.querySelector('li .ingredient6').style.display = 'none'
            } else {
                document.querySelector('li .ingredient6').textContent = data.drinks[0].strIngredient6
            }
            if (data.drinks[0].strIngredient7 === null) {
                document.querySelector('li .ingredient7').style.display = 'none'
            } else {
                document.querySelector('li .ingredient7').textContent = data.drinks[0].strIngredient7
            }
            if (data.drinks[0].strIngredient8 === null) {
                document.querySelector('li .ingredient8').style.display = 'none'
            } else {
                document.querySelector('li .ingredient8').textContent = data.drinks[0].strIngredient8
            }
            if (data.drinks[0].strIngredient9 === null) {
                document.querySelector('li .ingredient9').style.display = 'none'
            } else {
                document.querySelector('li .ingredient9').textContent = data.drinks[0].strIngredient9
            }
            if (data.drinks[0].strIngredient10 === null) {
                document.querySelector('li .ingredient10').style.display = 'none'
            } else {
                document.querySelector('li .ingredient10').textContent = data.drinks[0].strIngredient10
            }
            if (data.drinks[0].strIngredient11 === null) {
                document.querySelector('li .ingredient11').style.display = 'none'
            } else {
                document.querySelector('li .ingredient11').textContent = data.drinks[0].strIngredient11
            }
            if (data.drinks[0].strIngredient12 === null) {
                document.querySelector('li .ingredient12').style.display = 'none'
            } else {
                document.querySelector('li .ingredient12').textContent = data.drinks[0].strIngredient12
            }
            if (data.drinks[0].strIngredient13 === null) {
                document.querySelector('li .ingredient13').style.display = 'none'
            } else {
                document.querySelector('li .ingredient13').textContent = data.drinks[0].strIngredient13
            }
            if (data.drinks[0].strIngredient14 === null) {
                document.querySelector('li .ingredient14').style.display = 'none'
            } else {
                document.querySelector('li .ingredient14').textContent = data.drinks[0].strIngredient14
            }
            if (data.drinks[0].strIngredient15 === null) {
                document.querySelector('li .ingredient15').style.display = 'none'
            } else {
                document.querySelector('li .ingredient15').textContent = data.drinks[0].strIngredient15
            }
        })
}



btn.addEventListener('click', function () {
    cards()
    card()
})


    
   




/* 
we want to select an action film
if action box is checked && submit is clicked...
pull a random film
check if it has the genre action joined to it
if yes, display
if no, grab a new film/run the function again
]

Action
Adventure
Animation
Comedy
Fantasy
Drama
Horror
Romance
Science Fiction
Thriller

*/

function buildSelection () {
    if (action) {
        selection.push("Action")
    }
    if (adventure) {
        selection.push("Adventure")
    }
    if (anim) {
        selection.push("Animation")
    }
    if (comedy) {
        selection.push("Comedy")
    }
    if (drama) {
        selection.push("Drama")
    }
    if (fantasy) {
        selection.push("Fantasy")
    }
    if (horror) {
        selection.push("Horror")
    }
    if (romance) {
        selection.push("Romance")
    }
    if (sciencefic) {
        selection.push("Science Fiction")
    }
    if (thriller) {
        selection.push("Thriller")
    }
}





function pickGenres() {
    let random = Math.floor(Math.random() * 9000) + 1;
    let movie = `https://api.themoviedb.org/3/movie/${random}?api_key=e279ef38d7322234f5dbce86698431bb&language=US$region=US`
    fetch(movie)
        .then(function (response) {
            console.log(response)
            if (response.status === 404) {
                pickGenres()
          }
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            for (let i = 0; i < 5; i++) {
                let element = data.genres[i];
                if(action.value === 'action' && element.id == 28 ){
                    document.querySelector('.poster').setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
                    document.querySelector('.title').textContent = data.title;
                    document.querySelector('.genre1').textContent = data.genres[0].name;
                    document.querySelector('.genre2').textContent = data.genres[1].name;
           }else if (element.id !== 28) {
                    break;
           }
                 return pickGenres()
            }
          

        })
}
btn1.addEventListener('click', function (){
    pickGenres()
   
    
})



