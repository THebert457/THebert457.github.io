/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }
  
  // Game Item Objects
  
  var walker = {
    xCord:  215,
    yCord: 215,
    xSpeed: 0,
    ySpeed: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown)
  $(document).on('keyup', handleKeyUp)

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.xSpeed = -5
    } if (event.which === KEY.RIGHT) {
      walker.xSpeed = 5
    } if (event.which === KEY.DOWN) {
      walker.ySpeed = 5
    } if (event.which === KEY.UP) {
      walker.ySpeed = -5
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.xSpeed = 0
    } else if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.ySpeed = 0
    }
  }

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 
  function newFrame() {
    wallCollision()
    repositionGameItem()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.xCord += walker.xSpeed
    walker.yCord += walker.ySpeed
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.xCord);
    $("#walker").css("top", walker.yCord);
  }

  function wallCollision() {
    if (walker.xCord >= $("#board").width() - 50) {
      walker.xCord = $("#board").width() - 55
    } if (walker.xCord <= 0) {
      walker.xCord += 5
    } if (walker.yCord >= $("#board").height() - 50) {
      walker.yCord = $("#board").height() - 55
    } if (walker.yCord === 0) {
      walker.yCord += 5
    }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
