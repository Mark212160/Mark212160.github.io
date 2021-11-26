window.onload = function() {
	// Add an event listener using on() to all matched elements
    /*$('body > button').on('click', function() {
    	alert('Button clicked!');
    });*/
    $('body > button').eq(1).on('click', function() {
    	alert('Button clicked!');
    });

    $('body > input').eq(0).on('keypress', function() {
    	let inputVal = $(this).val(); // val() = value
    	let textarea = $('body > textarea').eq(0);
    	textarea.html(inputVal);
    })
};;