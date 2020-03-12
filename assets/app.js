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

     
    });
};


