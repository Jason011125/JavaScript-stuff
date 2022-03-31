function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '');
  console.log(str);
  str = str.toLowerCase();
  str = str.split("");
  console.log(str.length);
  for(let i = 0; i < str.length; i++){
    console.log(str[i]);
    console.log(str[str.length-1-i]);
    if(str[i]!=str[str.length-1-i]){
      return false;
    }
  }
  return true;
}

console.log(palindrome("_eye"));