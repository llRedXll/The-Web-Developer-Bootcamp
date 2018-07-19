const movies = [{
        title: "The Hangover",
        hasWatched: true,
        rating: 4.5
    },
    {
        title: "3 Ninjas",
        hasWatched: true,
        rating: 4
    },
    {
        title: "Tag",
        hasWatched: false,
        rating: 3.5
    }
]

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += '"' + movie.title + '" - ';
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));    
});


