const sum = (...args) => {
    let sum_num = 0;
    for(let i = 0; i < args.length;i++){
      sum_num += args[i];
    }
    return sum_num;
  }