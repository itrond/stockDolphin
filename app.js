var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser());

var ch =  require('./chess.js/chess.js');
var chess = new ch.Chess();


app.post('/moveSuggestions', function(req,res){

  /* post a fen-string and get

      "top quality" suggestions from stockDolphin

      */

  var data = req.body;

  var chess = new ch.Chess(data.fen);

  var pm = chess.moves(); //possible moves

  var suggestions = [
     {m:pm[0], w:20, d:70, b:10},
     {m:pm[1], w:18, d:72, b:10},
     {m:pm[2], w:12, d:80, b:8}
  ];



  var ret = {
    text: "Suggested moves for " + (chess.turn()=="b" ? "black" : "white"),
    suggestedMoves: suggestions
      }

  res.send(ret);

})

// Others ... might usefull...

app.get('/openingfen', function(req, res){
  res.send(chess.fen());
});



app.listen(3000);
