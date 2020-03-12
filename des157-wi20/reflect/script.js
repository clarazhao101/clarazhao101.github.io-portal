(function(){
  "use strict";


// listen for the submission of the form
document.getElementById("myform").addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    const formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    const words = [];

    //loop through the fields and add the words to the array, one at a time.
    for( var i=0; i<formData.length; i++){
        words.push(formData[i].value);
    }
    //view the array in the console.
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);
    showChoices();

});

//This function takes an array input, then constructs the madlib, adding
//in the user's words where necessary.
function makeMadLib(theWords){
    const madlib = `Today I talked to ${theWords[0]}.<br><br> ${theWords[0]} is my ${theWords[1]}.<br><br> ${theWords[0]} talked about ${theWords[2]}, ${theWords[3]}, ${theWords[4]}.<br><br> I talked about ${theWords[5]},${theWords[6]}, ${theWords[7]}`;

    //Get the madlib container
    const mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so it becomes visible.
    mlContainer.setAttribute("class", "visible");
}

function showChoices(){
  const choicebtn = document.getElementById('endchoice');
  choicebtn.setAttribute("class", "visible");
}

}());
