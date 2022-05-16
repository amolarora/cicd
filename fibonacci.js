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
        return [0,1];
    }
    else {
        return "Not Implemented!";
    }
}

module.exports = fibonacci;