stockDolphin
============

**Ask the dolphins about chess moves, not the fish(the don't have a clue)**

Send the fen-string and the time they can think about it, and they send you suggested moves back!


usage:

POST suggestmoves

      {  "fen": "the fen string goes here", // the fen string, describing the situation on the chess board
        "maxTime": 5000 // milliseconds the dolpins can crank out move suggestions (in milliseconds)
        }
        
result:

{ 
  "text" : "The dolpins suggest these moves for white: ",
  "suggestedMoves" : [
        { "m": "e4", // the move
          "w": 70, // the chance for white to win if this move is played
          "d": 20, // the probability for game to end in a draw (if this move is used)
          "b": 10  // the probability for black to win if this move is played
          },
          {
             "m":"a3",
             "w": 69,
             "d": 21,
             "b": 10
             },
          {
             "m":"h3",
             "w": 60,
             "d": 10,
             "b": 30
             },
          {
             "m":"h3",
             "w": 60,
             "d": 10,
             "b": 30
             }
          ]
}
             
**you can even ask the dolpins in the cloud!!*

like this: curl -d '{"fen":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0application/json" http://stockdolphin.azurewebsites.net/movesuggestions

