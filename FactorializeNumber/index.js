function factorialize(num) {
    let fact = 1
    if (num == 0 || num == 1) {
        return fact
    }else{
        for (let i = num; i >= 1 ; i--) {
            fact = fact * i
            console.log(fact)
        }
        return fact
    }
    
  }
  
  document.writeln(factorialize(4));
