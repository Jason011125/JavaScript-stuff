function uniteUnique(arr) {
    let resarr = [];
    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < arguments[i].length; j++){
            if(resarr.indexOf(arguments[i][j])<0){
                resarr.push(arguments[i][j]);

            }
        }

    }
    return resarr;
  }
  
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));