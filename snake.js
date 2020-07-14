class Snake {
    
    constructor() {
        this.snakeTableN = 10;
        this.snakeTable = new Array(this.snakeTableN);
        for(var i = 0; i < this.snakeTableN; ++i) {
            this.snakeTable[i] = new Array(this.snakeTableN);
        }
    }

    makeTable() {
        console.log("makeTable");
        for(var i = 0; i < this.snakeTableN; ++i) {
            for(var j = 0; j< this.snakeTableN; ++j) {
                this.snakeTable[i][j] = 10*i + j;
            }
        }
    }

    printTable() {
        console.log("printTable");
        for(var i = 0; i < this.snakeTableN; ++i) {
            let temp = [];
            for(var j = 0; j< this.snakeTableN; ++j) {
                var makeID = "test" + String(i) + String(j);
                var element = document.getElementById(makeID);
                console.log("makeID : ", makeID);
                console.log(element);
                if(element === null) continue;
                temp.push(this.snakeTable[i][j]);
                element.innerText = this.snakeTable[i][j];
                document.write(element.innerText);
            }
            console.log(temp);
        }
    }
}

// below is main 
var snake = new Snake();
snake.makeTable();
snake.printTable();
