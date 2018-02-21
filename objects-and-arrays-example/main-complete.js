var sockStripes = 10;

var sockColor = 'purple';

console.log(sockStripes);
console.log(sockColor);

console.log("My socks are " + sockColor + ", and have " + sockStripes + " stripes!");

var stripedSocks = {
  stripes: 10,
  color: 'purple'
}

console.log(stripedSocks);
console.log(stripedSocks.stripes);
console.log(stripedSocks.color);

console.log("My socks are " + stripedSocks.color + ", and have " + stripedSocks.stripes + " stripes!");


var colors = [
  'purple',
  'green',
  'blue'
];

console.log(colors);

var stripedSocks = {
  stripes: 10,
  colors: [
    'purple',
    'green',
    'blue'
  ]
};

console.log(stripedSocks.colors);

var someDiv = document.getElementById('someDiv');

someDiv.innerHTML = "My socks are " + stripedSocks.colors + ", and have " + stripedSocks.stripes + " stripes!";

var socks = [
  {
    name: "Fancy Socks",
    stripes: 10,
    colors: [
      'purple',
      'green',
      'blue'
    ]
  },
  {
    name: "Complicated Socks",
    stripes: 150,
    colors: [
      'purple',
      'green',
      'blue',
      'orange',
      'yellow'
    ]
  },
  {
    name: "RGB Socks",
    stripes: 3,
    colors: [
      'red',
      'green',
      'blue'
    ]
  }
];


for(var i = 0; i < socks.length; i++){
  someDiv.innerHTML += "<p>" + socks[i].name + " are " + socks[i].colors + ", and have " + socks[i].stripes + " stripes!</p>";
}
