// Tell JavaScript about our text input field and button
var input = document.getElementById("websiteNameInput");
var btn = document.getElementById("request");

// Add an event listener that will run some code when our button is clicked
btn.addEventListener('click', function(){
  console.log("you entered ", input.value);
  // Run the getOpenGraphData function and pass it text from the user input
  getOpenGraphData(input.value);
});

/*
AJAX request (new promise style)
*/
function getOpenGraphData (sitename){
  fetch('https://graph.facebook.com/?ids=' + sitename).then(function(response){
    return response.json();
  }).then(function(data){
    // code in here runs if the request is successful
    displayOpenGraphInfo(sitename, data);
  }).catch(function(error){
    // code in here runs if the request failed
    console.log("some error happened", error);
  })
};

// Let JavaScript know about the html div we want to put our content in
var websiteInformation = document.getElementById("websiteInformation");

/*
Add the html for one sock to the page
This function needs an individual sock object
*/
function displayOpenGraphInfo(sitename, data) {
  websiteInformation.innerHTML = `
  <div style="border: 1px solid grey; padding: 5px">
    <h3>${data[sitename].og_object.title}</h3>
    <p>${data[sitename].og_object.description}</p>
  </div>
  `;
}
