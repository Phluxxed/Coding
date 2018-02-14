var movies = [{
        name: "Equilibrium",
        rating: 7.5,
        haveWatched: true
    },
    {
        name: "Bladerunner 2049",
        rating: 8.2,
        haveWatched: true
    },
    {
        name: "Jumanji",
        rating: 7.2,
        haveWatched: false
    }
];

movies.forEach(function(e) {
    if(e.haveWatched === true) {
        console.log("You have watched " + e.name + " - Rating: " + e.rating);
    } else {
        console.log("You have not seen " + e.name + " - Rating: " + e.rating);
    }
});


