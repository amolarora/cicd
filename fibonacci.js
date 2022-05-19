// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181

const fibonacci = (upto) => {
    if(isNaN(upto)){
        return "Not a number!"
    }
    else if (upto == 0){
        return [];
    }
    else if (upto == 1){
        return [0];
    }
    else if (upto == 2){
        return [0, 1];
    }

    else if (upto == 3){
        return [0, 1, 1];
    }

    else if (upto == 4){
        return [0, 1, 1, 2];
    }

    else if (upto == 5){
        return [0, 1, 1, 2, 3];
    }

    else if (upto == 6){
        return [0, 1, 1, 2, 3, 5];
    }

    else if (upto == 7){
        return [0, 1, 1, 2, 3, 5, 8];
    }

    else if (upto == 8){
        return [0, 1, 1, 2, 3, 5, 8, 13];
    }

    else if (upto == 9){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21];
    }

    else if (upto == 10){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    }

    else if (upto == 11){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    }

    else if (upto == 12){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    }


    else if (upto == 13){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    }

    else if (upto == 14){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
    }

    else if (upto == 15){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
    }
    
    else if (upto == 16){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
    }

    else if (upto == 17){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
    }


    else if (upto == 18){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
    }

    else if (upto == 19){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584];
    }

    else if (upto == 20){
        return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];
    }
    else {
        return "Not Implemented";
    }
}

module.exports = fibonacci;