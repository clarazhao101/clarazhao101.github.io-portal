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

});

//This function takes an array input, then constructs the madlib, adding
//in the user's words where necessary.
function makeMadLib(theWords){
    const madlib = `In a world ruled by ${theWords[0]} ${theWords[1]} , one ${theWords[2]} will rise above the odds and change everything. But first, she must learn to ${theWords[3]} and become more ${theWords[4]} than anyone could ever imagine`;

    //Get the madlib container
    const mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so it becomes visible.
    mlContainer.setAttribute("class", "visible");
}

}());
