class Snake {

    constructor() {
        this.interval;
        this.enum = {
            emptySpace : 0,
            snakeSpace : 1,
            appleSpace : 2
        }
        this.snakeTableN = 10;
        this.snakeTable = new Array(this.snakeTableN);
        this.snake = [[0,0]];
        this.apple = [[5,5]];
        this.snakeDir = 2; 
        this.dx = [0,1,0,-1];
        this.dy = [-1,0,1,0];
        this.score = 0;
        for(var i = 0; i < this.snakeTableN; ++i) {
            this.snakeTable[i] = new Array(this.snakeTableN);
        }	
    }

    gameOverCheck(nx, ny) {
        if(nx < 0 || nx >= this.snakeTableN || ny < 0 || ny >= this.snakeTableN) return true;
        if(this.snakeTable[ny][nx] == this.enum.snakeSpace) return true;
        return false;
    }

    clearGame() {
        console.log("this is clear game. it predict to do new constructor process");
        clearInterval(this.interval);
        this.constroc
    }

    gameOverProcess() {
        alert("game over, score is ", this.score);
        this.clearGame();
    }

    printSnake() {
        for(let i=0;i<this.snake.length;++i) {
            this.snakeTable[this.snake[i][1]][this.snake[i][0]] = this.enum.snakeSpace;
        }
    }
    printApple() {
        for(let i=0;i<this.apple.length;++i) {
            this.snakeTable[this.apple[i][1]][this.apple[i][0]] = this.enum.appleSpace;
        }
    }

    makeNewApple() {
        this.score += 1;
        this.apple.pop();
        let x = 0;
        let y = 0;
        do {
            x = parseInt(Math.random() * 10);
            y = parseInt(Math.random() * 10); 
        } while(this.snakeTable[y][x] == this.enum.snakeSpace);
        this.apple.push([x, y]);
    }

    eatApple(x, y) {
        if(this.snakeTable[y][x] != this.enum.appleSpace) return false;
        this.snakeTable[y][x] = 0;
        this.makeNewApple();
        this.updateScore();
        
        return true;
    }

    moveSnake() {
        console.log("moveSnake");
        console.log("snake length : ", snake.length);
        let nx = this.snake[0][0] + this.dx[this.snakeDir];
        let ny = this.snake[0][1] + this.dy[this.snakeDir];
        if(this.gameOverCheck(nx, ny)) {
            this.gameOverProcess();
            return;
        }
        this.snake.unshift([nx, ny]);
        if(!this.eatApple(nx, ny)) {
            this.snake.pop();
        }

        this.makeTable();
        this.printTable();
    }

    makeTable() {
        console.log("makeTable");
        for(var i = 0; i < this.snakeTableN; ++i) {
            for(var j = 0; j< this.snakeTableN; ++j) {
                this.snakeTable[i][j] = this.enum.emptySpace;
            }
        }
        this.printSnake();
        this.printApple();
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

    updateScore() {
        var element = document.getElementById("scoreBoard");
        if(element === null) return;
        element.innerText = "Score : " + this.score;
    }
}

// below is main 
/*
var snake = new Snake();
snake.makeTable();
snake.printTable();*/
