require(['game'], function(Game) {
    var score1 = document.getElementById('score');
    var map1 = document.getElementById('map');
    var g1 = new Game(map1, score1);
    g1.start();
})