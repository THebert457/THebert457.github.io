// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var i = 0; i <= image.length -1; i++) {
    for (var h = 0; h <= image[i].length -1; h++) {
      rgbString = image[i][h]
      rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][h] = rgbString
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  for (var i = 0; i <= image.length -1; i++) {
    for (var h = 0; h <= image[i].length -1; h++) {
      rgbString = image[i][h]
      rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      if (image[i][h] !== image[0][0]) {
        image[i][h] = rgbString
      }
    }
  }
}

// TODO 5: Create the keepInBounds function

function keepInBounds(number) {
  var test1 = Math.max(number,0)
  return Math.min(test1,255)

}


// TODO 3: Create reddify function

function reddify(array) {
  array[RED] = 200
}

// TODO 6: Create more filter functions

function decreaseBlue(array) {
  array[BLUE] = keepInBounds(BLUE - 50)
}

function increaseGreenByBlue(array) { 
  array[GREEN] = keepInBounds(GREEN += BLUE)
}


// CHALLENGE code goes below here
