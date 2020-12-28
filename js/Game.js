(function () {
    let that;
    let timerId;
    let run;
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        clearInterval(timerId);
        runSnake();
        bindKey();
    }

    function runSnake() {
        run = function run() {
            that.snake.move(that.food, that.map);
            that.snake.render(that.map);
            let maxX = that.map.offsetWidth / that.snake.width - 1;
            let maxY = that.map.offsetHeight / that.snake.height - 1;
            let headX = that.snake.body[0].x;
            let headY = that.snake.body[0].y;
            if (headX > maxX) {
                that.snake.body[0].x += -40;
            } else if (headX < 0) {
                that.snake.body[0].x += 40;
            } else if (headY < 0) {
                that.snake.body[0].y += 30;
            } else if (headY > maxY) {
                that.snake.body[0].y += -30;
            }
        }    
        timerId = setInterval(run, 100);
    }

    function bindKey() {
        document.onkeydown = function (e) {
            switch (e.key) {
                case 'ArrowUp':
                    if (that.snake.direction == 'down') {
                        break;
                    } else{
                        that.snake.direction = 'top';
                        run();
                    }
                    break;
                case 'ArrowDown':
                    if (that.snake.direction == 'top') {
                        break;
                    } else{
                        that.snake.direction = 'down';
                        run();
                    }
                    break;
                case 'ArrowLeft':
                    if (that.snake.direction == 'right') {
                        break;
                    } else{
                        that.snake.direction = 'left';
                        run();
                    }
                    break;
                case 'ArrowRight':
                    if (that.snake.direction == 'left') {
                        break;
                    } else{
                        that.snake.direction = 'right';
                        run();
                    }
                    break;
            }
        }
    }

    window.Game = Game;
})()

