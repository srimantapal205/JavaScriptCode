
function animateString(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;
    // Random Color change
    setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.color= "#"+randomColor;
    },500);
    // Text Rotate 
    setInterval(() => {
    text = text[text.length-1] + text.substring(0, text.length-1);
    textNode.data = text; 
    
    },400)
};

