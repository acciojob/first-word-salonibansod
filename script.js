function firstWord(s) {
  
  
  
  if (s === "") {
    return "";
  }

 
  const firstSpaceIndex = s.indexOf(" ");

  
  return firstSpaceIndex === -1 ? s : s.slice(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
