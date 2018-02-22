// Define simple variables for color and stripes
var sockName = 'Fun Socks';
var sockColor = 'Purple';
var sockStripes = 10;

console.log("Simple Variables:");
console.log(`My new socks called ${sockName} are ${sockColor} and they have ${sockStripes} stripes!`);


// Use an Array because we want multiple colors
var sockColors = [
  'purple',
  'blue'
];
console.log("\nSimple Variable + array for colors:");
// Fun fact: Loging an array will insert commas for you
console.log(`My new socks called ${sockName} are ${sockColors} and they have ${sockStripes} stripes!`);


/*
Cobine everything above to create a single sock object
an object is made of
key : "value"
pairs and each pair is seperated by a comma
*/
var newSocks = {
  name: 'Fun Socks',
  stripes: 10,
  colors: [
    'purple',
    'blue'
  ]
};
console.log("\nSingle sock object:");
console.log(`My new socks called ${sockName} are ${newSocks.colors} and they have ${newSocks.stripes} stripes!`);


// Now create an array of sock objects so we can have multiple pairs of socks!
var socks = [
  {
    name: 'Fun Socks',
    stripes: 10,
    colors: [
      'purple',
      'blue'
    ]
  },
  {
    name : 'hotdog',
    stripes: 15,
    colors: [
      'red',
      'yellow'
    ]
  },
  {
    name: 'roy g biv',
    stripes: 3,
    colors: [
      'red',
      'green',
      'blue'
    ]
  }
];

console.log("\nLooping over a sock array:");
// Loop over the array and log our all of the socks
for(var i = 0; i < socks.length; i++){
  console.log(`My new socks called ${socks[i].name} are ${socks[i].colors} and they have ${socks[i].stripes} stripes!`);
}
