// create a div with an h1 and input and button inside of it.
var div = document.createElement("div");
div.innerHTML =
  "<h1>Color Picker</h1><input type='text' id='color' value='#000000'><button>Generate random color</button>";
document.body.appendChild(div);

// center the div.
div.style.position = "absolute";
div.style.left = "50%";
div.style.top = "50%";
div.style.transform = "translate(-50%, -50%)";

// center the input
div.querySelector("input").style.position = "absolute";
div.querySelector("input").style.left = "50%";
div.querySelector("input").style.transform = "translate(-50%, 0)";
// style input field
div.querySelector("input").style.backgroundColor = "#fff";
div.querySelector("input").style.border = "1px solid #ccc";
div.querySelector("input").style.padding = "5px";
div.querySelector("input").style.borderRadius = "5px";

// align the button under the input
div.querySelector("button").style.position = "absolute";
div.querySelector("button").style.left = "-50%";
div.querySelector("button").style.transform = "translate(66%, 150%)";

// style the button
div.querySelector("button").style.backgroundColor = "#fff";
div.querySelector("button").style.border = "1px solid #ccc";
div.querySelector("button").style.padding = "5px";
div.querySelector("button").style.borderRadius = "5px";
// set cursor to pointer
div.querySelector("button").style.cursor = "pointer";

// on click the button
div.querySelector("button").addEventListener("click", function () {
  // get the value of the input
  var color = div.querySelector("input").value;
  // set the background color of the body to the value of the input
  document.body.style.backgroundColor = color;
});

// add input event listener to the input
div.querySelector("input").addEventListener("input", function (e) {
  // store the input value in a variable
  var input = e.target.value;
  // check if the input value is a color
  if (input.match(/^#[0-9a-f]{6}$/i)) {
    // if it is, Set the background color of the body to the input value
    document.body.style.backgroundColor = input;
    // set the h1 to a new color
    div.querySelector("h1").style.color = getContrastingColor(input);
    // if it is not, set the background color of the body to white
  } else {
    document.body.style.backgroundColor = "white";
    // set the h1 to black
    div.querySelector("h1").style.color = "black";
  }
});

// take a color and returns white if it is dark, or black if it is light
function getContrastingColor(color) {
  // convert a hex color to rgb
  var rgb = hexToRgb(color);
  // determine if the color is light or dark
  var isLight = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186;
  // return the ooposite color
  return isLight ? "black" : "white";
}

function hexToRgb(hex) {
  // convert a hex color to rgb
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function getRandomColor() {
  // generate a random hex color
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// add a click event listener to the button
div.querySelector("button").addEventListener("click", function () {
  // set the input value to a random hex color
  div.querySelector("input").value = getRandomColor();
  // trigger the input event listener
  div.querySelector("input").dispatchEvent(new Event("input"));
});
