var objects, character;

function startGame() {
    var level = [
        new Wall(40, 120),
        new Wall(40, 184),
    ];

    objects = [new Character(10, 120), ...level];
    gameArea.start();
}
  
var gameArea = {
    canvas : document.getElementById("game-area"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            objects.forEach(obj => {
                obj.keyDown(e.key);
            });
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function updateGameArea() {
    gameArea.clear();

    objects.forEach(obj => {
        obj.update();
    });
}