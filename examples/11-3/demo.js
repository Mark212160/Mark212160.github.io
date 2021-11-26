window.onload = function() {
    // Mixed jQuery codes woth JavaSript codes
    let ps = $('body > p');
    //console.log(ps[0]);
    
    // Get the last element in JavaScript nad jQuery
    let psJS = document.querrySelectorAll('body > p');
    let emLengthJS = psJS.length;
    let lastPosJS = emLength - 1;
    //console.log(psJS[lastPosJS]);

    //jQuery
    let psJQ = $('body > p');
    //console.log(psJQ.eq(-1)); // -1 means the last position, -2 means the last second position, etc...
    //console.log(psJQ.eq(0)); // 0 or Positiive number = counting from the beginning
    
    // Get HTML from an element: innerHTML vs. html()
    //console.log(psJS[lastPosJS].innerHTML); // Plain JavaScript
    //console.log(posJQ.eq(-1).html()); // jQuery
    //console.log(psJQ.eq(-1).innerHTML); // Mixing jQuery with JavaScript = 'undefined'

    // Change the HTML contents of an element
    //psJS[lastPosJS].innerHTML = 'Content Changed!'; // Plain JavaScript
    psJQ.eq(-1).html('Content Changed!'); // jQuery
    
};