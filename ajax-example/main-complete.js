var btn = document.getElementById('request');
var someDiv = document.getElementById('someDiv');

var sockRequest = new XMLHttpRequest();



sockRequest.onreadystatechange = function() {
  if(sockRequest.readyState === 4) {
    if(sockRequest.status === 200) {
      console.log(sockRequest);
      sockData = JSON.parse(sockRequest.response);
      var sockCount = sockData.length;
      console.log(sockCount);
      console.log(sockData[0])


    } else {
      console.log('An error occurred during your request: ' +  sockRequest.status + ' ' + sockRequest.statusText);
    }
  }
}


btn.addEventListener('click', function() {
  sockRequest.open('Get', '../json-example/socks-complete.json');
  sockRequest.send();
});


/*

Open Graph API
https://graph.facebook.com/?ids=https://www.sockwizard.com
https://graph.facebook.com/?ids=https://www.soxy.com/

https://graph.facebook.com/?ids=http://www.twoscoopgames.com
https://graph.facebook.com/?ids=http://www.twoscoopinteractive.com
https://graph.facebook.com/?ids=http://www.louisvilletech.org

console.log(responseData.og_object.title);
console.log(responseData.og_object.description);

*/
