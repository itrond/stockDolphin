var port = process.env.PORT || 3000;

var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser());

var ch =  require('./chess.js/chess.js');

app.post('/suggestmoves', function(req,res){

  /* post a fen-string and get

      "top quality" suggestions from stockDolphin
  */


  console.log("we got the problem... have to think...");

  var fen = req.body.fen;
  var maxTime = req.body.maxTime;

  console.log("The fen:" + fen);
  console.log("The time we got: " + maxTime / 1000 + "seconds");


  setTimeout(function(){

    var chess = new ch.Chess(fen);

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
    console.log("yepp. Found some gooood moves...");
    console.log(JSON.stringify(ret));
    res.send(ret);

  }, maxTime);

});

app.post('/suggestmoves', function(req,res){
  res.send("Sorry, you have to use POST");
});

// Others ... might usefull...

app.get('/openingfen', function(req, res){
  var chess = new ch.Chess();
  res.send(chess.fen());
});


console.log("give us some chess challenges (or some fish)...");
app.listen(port);
