document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        snake.snakeDirChange(3);
        snake.moveSnake();
    }
    else if(event.keyCode == 39) {
        snake.snakeDirChange(1);
        snake.moveSnake();

    }
    else if(event.keyCode == 38) {
        snake.snakeDirChange(0);
        snake.moveSnake();

    }
    else if(event.keyCode == 40) {
        snake.snakeDirChange(2);
        snake.moveSnake();

    }
});