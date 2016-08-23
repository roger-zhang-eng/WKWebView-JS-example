var button = document.getElementById("clickMeButton");
button.addEventListener("click", function() {
            var messgeToPost = {'ButtonId':'clickMeButton'};
            window.webkit.messageHandlers.buttonClicked.postMessage(messgeToPost);
        },false);

function redHeader() {
    console.log("Here is redHeader func")
    document.querySelector('h1').style.color = "red";
}

function alertFunction() {
    var person = prompt("Please enter your name", "Harry Potter");
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}