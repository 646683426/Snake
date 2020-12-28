(function () {
    let position = 'absolute';
    // 记录上一次创建的食物，为删除食物做准备
    let elements = [];
    // 为食物对象创建构造函数
    function Food(options) {
        options = options || {};
        this.x = this.x || 0;
        this.y = this.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = this.color || '#bfa';
    }

    // 在父容器中渲染出食物对象
    Food.prototype.render = function (map) {
        remove();
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
        let div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    }

    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }
    window.Food = Food;
})()