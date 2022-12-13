var request = new XMLHttpRequest();

request.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=sTdF2n7y8wUcMa7x5uOo9uSdySawdPn3&tag=puppy&rating=g");
var imageTag = "";
request.onload = function() {



    //Add your code here.



    document.getElementById("holder").innerHTML = imageTag;
};

request.send();