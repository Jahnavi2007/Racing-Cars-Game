var canvas,backgroundImage
var gameState = 0
var playerCount,database
var form,player,game

function setup(){
  canvas = createCanvas(400,400)
  database = firebase.database()
}