// Titles: https://omdbapi.com/?s=thor&page=1&apikey=39fdc95
// details: http://www.omdbapi.com/?i=tt3896198&apikey=39fdc95

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

// load movies from API
function findMovies(){
    const searchContent=(movieSearchBox.value).trim();
    if(searchContent.length >0){
        getMovieList(searchContent);
    }
    
}

async function getMovieList(movieName){
    const url=`https://omdbapi.com/?s=${movieName}&page=1&apikey=39fdc95`;
    const res= await fetch(url);
    const data= await res.json();
    if(data.Response === true){

    }
     
}

