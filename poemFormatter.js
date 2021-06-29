function formatPoem(poem) {
    
    let dotSpace = ". ";
    let newLine = "." + "\n";
    //let splittedPoem = poem.split(".").join(".");
    
    let splittedPoem = poem.replaceAll(dotSpace, newLine);
    
    return splittedPoem;

}

console.log(formatPoem("Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."));