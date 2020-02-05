var cats= $("#cats-button")
// var dogs= $("dogs-button")
// var cows= $("cows-button")
// var giphyAPI= "r5BL7uXNQyvsrMYY2vG8rORpbJPHw4zo"


// $("#search-button").on("click", function() {
// alert("You clicked the button");
// console.log(alert);

const api_url = 'https://rapidapi.com/brianiswu/api/cat-facts/'

const requestHeaders = {
    "x-rapidapi-host": "giphy.p.rapidapi.com",
    "x-rapidapi-key": "d7aab0725dmsh852e93d7790b849p1939d3jsnfcdf10768253" 
    
    // 'Host Key' : 'brianiswu-cat-facts-v1.p.rapidapi.com', 
    // 'API Key' : 'd7aab0725dmsh852e93d7790b849p1939d3jsnfcdf10768253'
};

const analyzeComment = (comment, callback) => {
    // Creating an object to send to the server
    const data = {
            text: comment
            , language: 'english'
    };
    // Encoding data for application/x-www-form-urlencoded content type
    const formattedData = Qs.stringify(data);
    // POST request to server
    axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
            .then(response => {
               const data = response.data;
              // Calling a callback function with data from the server
              callback(data)
            })
            .catch(error => console.error(error))
  };

$("#cats-button").on("click", function() {
    //alert("You clicked the button");
    // console.log(alert);
    
    var queryURL = "https://giphy.p.rapidapi.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

    $.ajax({
        url: queryURL,
        method:"GET"  
    })
        .then(function(response) {
            var imageURl = response.data.url;
            var catImage = $("<img>");
            catImage.attr("src", imageURl);
            $("#Column").prepend(catImage);
            // for (var i = 0; i < results.length; i++) {
            //     var gifDiv = $("<div>");
            //     $("gifColumn").prepend(gifDiv);
            // }
        });
    // var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + cats + "&api_key=r5BL7uXNQyvsrMYY2vG8rORpbJPHw4zo"

    //     $.ajax({
    //         url: queryURL,
    //         method:"GET"
    //     })
// });

});
// $("#cows-button").on("click", function() {
//     alert("You clicked the button");
//     console.log(alert);
    
//     var queryURL= "https://api.giphy.com/v1/gifs/random?" + dogs + "&r5BL7uXNQyvsrMYY2vG8rORpbJPHw4zo"
    
//     $.ajax({
//         url: queryURL,
//         method:"GET"
//     })
// });
// $("#dogs-button").on("click", function() {
//     alert("You clicked the button");
//     console.log(alert);
    
//     var queryURL= "https://api.giphy.com/v1/gifs/random?" + cows + "&r5BL7uXNQyvsrMYY2vG8rORpbJPHw4zo"
    
//     $.ajax({
//         url: queryURL,
//         method:"GET"
//     })
// });