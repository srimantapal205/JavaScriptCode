function truncateString(str, num) {
    //return str.length > num ? str.slice(0, num) + '...' : str;
    if (str.length > num) {
        return str.slice(0, num) + '...'
    } else {
        return str
    }
  }
  
  document.writeln(truncateString("A-tisket a-tasket A green and yellow basket", 8));