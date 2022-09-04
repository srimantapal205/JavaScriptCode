function repeatStringNumTimes(str, num) {
    let repet="";
    for(let i=0; i<num; i++){
      repet += str;
    }
    return repet;
  }
  
document.writeln(repeatStringNumTimes("*", 10));