stockDolphin
============

**Ask the dolphins about chess moves, not the fish(they don't have a clue)!**

(The dolpins says "Thank you to chess.js": https://github.com/jhlywa/chess.js)


Send the fen-string and the time they can think about it, and they send you suggested moves back!


usage:

```javascript
POST suggestmoves

      {  "fen": "the fen string goes here", // the fen string, describing the situation on the chess board
        "maxTime": 5000 // milliseconds the dolpins can crank out move suggestions (in milliseconds)
        }
        
```        
        
result:
```javascript
{ 
  "text" : "The dolphins suggest these moves for white: ",
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
  
```  
             
**you can even ask the dolpins in the cloud!!**

like this: 
```
curl -d '{"fen":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", "time":5000}' 
    -H "Content-Type: application/json" http://stockdolphin.azurewebsites.net/suggestmoves
```
