// Tell JavaScript about our button
var btn = document.getElementById("request");

// Add an event listener that will run some code when our button is clicked
btn.addEventListener('click', function(){
  console.log("you clicked!");
  // Run the getSocks function
  getSocks();
});

/*
AJAX request (new promise style)
*/
function getSocks (){
  fetch('../json-example/socks.json').then(function(response){
    return response.json();
  }).then(function(data){
    // code in here runs if the request is successful
    displayTheSocks(data);
  }).catch(function(error){
    // code in here runs if the request failed
    console.log("some error happened", error);
  })
};

/*
Loop over all socks in the array of socks returned from the AJAX request
This function needs an array of socks, which is exactly what our JSON is!
*/
function displaySocks(socks) {
  for(var i = 0; i < mySocks.length; i++){
    displaySock(socks[i])
  }
}

// Let JavaScript know about the html div we want to put our content in
var socksContainer = document.getElementById("socksContainer");

/*
Add the html for one sock to the page
This function needs an individual sock object
*/
function displaySock(sock) {
  socksContainer.innerHTML += `
  <div class="col-sm-4">
    <h3>${sock.name}</h3>
    <p><strong>colors</strong>: ${sock.colors}</p>
    <p><strong>stripes</strong>: ${sock.stripes}</p>
  </div>`;
}
