

var theData = [];

var runSimulator = function(){

var sanScore = [
"e4",
"e5",
"Sf3",
"Sc6",
"Lb5",
"Sf6",
"d3",
"Lc5",
"c3",
"O-O",
"O-O",
"Te8",
"Te1",
"a6",
"La4",
"b5",
"Lb3",
"d6",
"Lg5",
"Le6",
"Sbd2",
"h6",
"Lh4",
"Lxb3",
"axb3",
"Sb8",
"h3",
"Sbd7",
"Sh2",
"De7",
"Sdf1",
"Lb6",
"Se3",
"De6",
"b4",
"a5",
"bxa5",
"Lxa5",
"Shg4",
"Lb6",
"Lxf6",
"Sxf6",
"Sxf6+",
"Dxf6",
"Dg4",
"Lxe3",
"fxe3",
"De7",
"Tf1",
"c5",
"Kh2",
"c4",
"d4",
"Txa1",
"Txa1",
"Db7",
"Td1",
"Dc6",
"Df5",
"exd4",
"Txd4",
"Te5",
"Df3",
"Dc7",
"Kh1",
"De7",
"Dg4",
"Kh7",
"Df4",
"g6",
"Kh2",
"Kg7",
"Df3",
"Te6",
"Dg3",
"Txe4",
"Dxd6",
"Txe3",
"Dxe7",
"Txe7",
"Td5",
"Tb7",
"Td6",
"f6",
"h4",
"Kf7",
"h5",
"gxh5",
"Td5",
"Kg6",
"Kg3",
"Tb6",
"Tc5",
"f5",
"Kh4",
"Te6",
"Txb5",
"Te4+",
"Kh3",
"Kg5",
"Tb8",
"h4",
"Tg8+",
"Kh5",
"Tf8",
"Tf4",
"Tc8",
"Tg4",
"Tf8",
"Tg3+",
"Kh2",
"Kg5",
"Tg8+",
"Kf4",
"Tc8",
"Ke3",
"Txc4",
"f4",
"Ta4",
"h3",
"gxh3",
"Tg6",
"c4",
"f3",
"Ta3+",
"Ke2",
"b4",
"f2",
"Ta2+",
"Kf3",
"Ta3+",
"Kf4",
"Ta8",
"Tg1"
];

var index = 0;

 var interval = setInterval(function(){

    $('.next-move').trigger('click');

    var whitePercent = $('.white-percent').text();
    var wP = whitePercent.substr(0, whitePercent.length-1);

    var blackPercent = $('.black-percent').text();
    var bP = blackPercent.substr(0, blackPercent.length-1);



    var theMoveData = {
      move : sanScore[index],
      white: parseInt(wP),
      black : parseInt(bP)
    };

    theMoveData.suggestions = [];

    var harvestSugg = $(".pv");

    for(var i=0;i<harvestSugg.length;i++){
    theMoveData.suggestions.push({
         move : $(".pv")[i].innerHTML,
         chance : parseInt(($(".chance")[i].innerHTML).substr(5,2))});
    }

    //console.log(JSON.stringify(theMoveData));

    theData.push(theMoveData);

    index += 1;

    if (index==sanScore.length){
      clearInterval(interval);
      console.log(JSON.stringify(theData));
    }

  }, 200)
}
