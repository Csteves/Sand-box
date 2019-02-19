function mazeRunner(maze, directions) {
    let result = "Dead"
    if(directions && directions[0] && maze.length === maze[0].length){
    let position = {
        arr:0,
        index:0
        }
    for(let i = 0; i < maze.length; i++) {
        let index = maze[i].includes(2) ? i : null;
        if(index){
            position.arr = index
            position.index = maze[index].indexOf(2);
        }
    };
    directions.forEach((item,i) => {
        if(item === "N" || item === "S" || item === "E" || item === "W"){
        if(maze[position.arr][position.index] === 3){
            result = "Finish";
            return
        }else if(maze[position.arr][position.index] === 1){
            result = "Dead";
            return
        }
        switch(item){
            case "N":
            if(position.arr === 0){
                result = "Dead"
                return
            }
                position.arr -= 1;
                break;
            case "S":
            if(position.arr === maze.length - 1){
                result = "Dead"
                return
            }
                position.arr += 1;
                break;
            case "E":
                if(position.index === maze[position.arr].length - 1){
                    result = "Dead";
                    return
                }
                position.index += 1;
                break;
            case "W":
            if(position.index === 0){
                result = "Dead";
                return
            }
            position.index -= 1;
            break;
        }
        if(maze[position.arr][position.index] === 3){
            result = "Finish";
            return
        }else if(maze[position.arr][position.index] === 1){
            result = "Dead";
            return
        }else{
            result = "Lost";
            return
        }
       }
    })
    }
    return result
    }