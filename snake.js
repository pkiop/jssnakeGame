class Snake {

    constructor() {
        this.snakeTableN = 10;
        this.snakeTable = new Array(this.snakeTableN);
        this.snake = [[0,0]];
        this.snakeDir = 2; 
        this.dx = [0,1,0,-1];
        this.dy = [-1,0,1,0];
        for(var i = 0; i < this.snakeTableN; ++i) {
            this.snakeTable[i] = new Array(this.snakeTableN);
        }	
    }
    printSnake() {
        for(let i=0;i<this.snake.length;++i) {
            this.snakeTable[this.snake[i][1]][this.snake[i][0]] = 1;
        }
    }

    moveSnake() {
        console.log("moveSnake");

        console.log("printSnake");
        console.log(this.snake.length);
        for(let i=0;i<this.snake.length;++i) {
            console.log("i : ", i);
            console.log(this.snake[i][0], this.snake[i][1]);
        }
        for(let i=0;i<this.snake.length;++i) {
            console.log("i : ", i);
            console.log(this.snake[i][0], this.snake[i][1]);
        }
        let nx = this.snake[0][0] + this.dx[this.snakeDir];
        let ny = this.snake[0][1] + this.dy[this.snakeDir];
        console.log("nx : this.snake[0][0] (", this.snake[0][0],") + this.dx[this.snakeDir](",this.dx[this.snakeDir],')');
        console.log("ny : this.snake[0][1] (", this.snake[0][1],") + this.dy[this.snakeDir](",this.dy[this.snakeDir],')');

        console.log(nx, ny);
        if(nx < 0 || nx >= this.snakeTableN || ny < 0 || ny >= this.snakeTableN) return;
        this.snake.unshift([nx, ny]);
        this.snake.pop();
        this.makeTable();
        this.printTable();
    }

    makeTable() {
        console.log("makeTable");
        for(var i = 0; i < this.snakeTableN; ++i) {
            for(var j = 0; j< this.snakeTableN; ++j) {
                this.snakeTable[i][j] = 0;
            }
        }
        this.printSnake();
        this.snakeTable[5][5] = 2;
    }

    printTable() {
        for(var i = 0; i < this.snakeTableN; ++i) {
            for(var j = 0; j < this.snakeTableN; ++j) {

                var makeID = "test" + String(i) + String(j);
                var element = document.getElementById(makeID);

                //console.log("element : ", element);
                if(element === null) {
                    continue;
                };
                let putValue = " ";
                if(this.snakeTable[i][j] == 0) {
                    element.style.backgroundColor = 'white';
                }
                else if(this.snakeTable[i][j] == 1) {
                    element.style.backgroundColor = 'green';
                }
                else if(this.snakeTable[i][j] == 2) {
                    element.style.backgroundColor = 'red';
                }
                element.innerText = putValue;
            }
        }
    }

    snakeDirChange(code) {
        this.snakeDir = code;
    }
}



// below is main 
var snake = new Snake();
snake.makeTable();
snake.printTable();
