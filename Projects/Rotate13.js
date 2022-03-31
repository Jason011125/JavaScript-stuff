function rot13(str) {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    str = str.split('');
    for(let i = 0; i < str.length; i++){
      let index = alphabet.indexOf(str[i]);
      if(index >= 0){
  
        str[i] = alphabet[(index+13)%26];
      }
    }
    return str.join('');
  }
  
  