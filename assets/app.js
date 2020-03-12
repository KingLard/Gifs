var topics = ['dog', 'gecko', 'snake', 'shark', 'turtle', 'cow', 'chameleon', 'lizard', 'sloth', 'bison'];
var newtopicss = "";
var currentsearch = []
var previoustopic = ""
var offset = 0;

function selectedButton(animal, limitNumber) {

    //This code assures the user to grab 10 items more on each click to the same,
    var add = false;
    if (previoustopic == animal) {
        offset += 10
    }
    else {
        $(".searchresult").remove();
        previoustopic = animal;
        offset = 0
    }

    // this function would grab the information from an existing API
    // It has the parameters defined to search for an specific information.
    var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=mILFHIxcxKF5ArrDsrtbKUGoQBPkjOTO&limit=" + limitNumber + "&offset=" + offset);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        previoustopic = animal;
        var responselist = response.data;
        currentsearch = responselist;

        for (var i = 0; i < responselist.length; i++) {
            responselist[i].still = true;
            var rating = (responselist[i].rating);
            var title = responselist[i].title;
            var mp4 = (responselist[i].images.downsized_still.url);
            var gifCont = $("<div listindex='" + i + "' still='true' class='searchresult'><h5 class='rating'>" + rating + "</h5><img width='200px' height='200px' class='mp4' src='" + mp4 + "'><p class='rating' >" + title + "</p></div>")
            $("#gif-container").append(gifCont);
        }
     
    });
};

// This function will create a new button append to our original array of buttons, prevents the user from repeating an animal

function newButton(value) {
    var found = false;
    for (var i = 0; i < topics.length; i++) {
        if (topics[i] === value) {
            found = true;
        }
    }
    if (found) {
        alert("Repeated Animal");
    }
    else if (value == false) {
        alert("Oops! you should add an Animal");
    }
    else {
        topics.push(value);
        var addedButton = $("<input type='button'class='defined-button' value='" + value + "'></input>");
        $(".col-sm-12").append(addedButton);
    }
}


