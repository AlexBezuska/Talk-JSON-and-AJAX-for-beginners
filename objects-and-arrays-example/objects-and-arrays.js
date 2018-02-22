console.log("hello!");

var sockColor = "Purple";
var sockStripes = 10;

var sockColors = [
  "purple",
  "blue"
];

var newSocks = {
  stripes: 10,
  colors: [
    "purple",
    "blue"
  ]
};


var socks = [
  {
    name: "fun socks",
    stripes: 10,
    colors: [
      "purple",
      "blue"
    ]
  },
  {
    name : "hotdog",
    stripes: 15,
    colors: [
      "red",
      "yellow"
    ]
  },
  {
    name: "roy g biv",
    stripes: 3,
    colors: [
      "red",
      "green",
      "blue"
    ]
  }
];


for(var i = 0; i < socks.length; i++){

  console.log(`My new socks called ${socks[i].name} are ${socks[i].colors} and they have ${socks[i].stripes} stripes!`);

}
