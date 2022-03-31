function translatePigLatin(str) {
  let regex = /^[aeiou]/i;
  if(regex.test(str)){
    return str+"way";
  }
  str = str.split('');
  let consonant = [];
  regex = /[aeiou]/i;
  while(true){
    if(regex.test(str[0])){
        break;
    }
    consonant.push(str[0]);
    str.shift();
  }
  return str.join("")+ consonant.join("") +"ay";
}

console.log(translatePigLatin("bhi"));