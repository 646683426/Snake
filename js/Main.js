(function(){
    let btn = document.getElementById('btn');
    btn.onclick = function () {
        btn.hidden = true;
        let map = document.getElementById('map');
        let game = new Game(map);
        game.start();
    }
})()

