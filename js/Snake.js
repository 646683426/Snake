(function () {
    let position = 'absolute';
    let elements = [];
    function Snake(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.direction = options.direction || 'right';
        this.body = [
            { x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'pink' },
            { x: 1, y: 2, color: 'pink' }
        ]
    }
    Snake.prototype.render = function (map) {
        remove();
        for (i = 0, len = this.body.length; i < len; i++) {
            let object = this.body[i];
            let div = document.createElement('div');
            map.appendChild(div);
            elements.push(div)
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }

    Snake.prototype.search = function (obj) {
        for (let i = 3, len = this.body.length; i < len; i++) {
            if (this.body[i].x == obj.x && this.body[i].y == obj.y) {
                alert('Game Over!' + '你的得分是:'+(len-3));
                let map = document.getElementById('map');
                let game = new Game(map);
                game.start();
            }
        }
    }

    Snake.prototype.move = function (food, map) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        let head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
        }
        this.search(head, this.body);
        let headX = head.x * this.width;
        let headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            let last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            food.render(map)
        }
    }

    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }

    window.Snake = Snake;
})()