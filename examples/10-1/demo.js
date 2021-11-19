function changeDivCSS() {
    let buttonId = this.id;
    let divs = document.getElementsByTagName('div');
    if(buttonId === 'changeDiv1') {
        divs[0].style.cssText = 'background-color: red; width: 100px; height: 40px';
    }
    else if(buttonId === 'changeDiv2') {
        divs[1].style.cssText = 'background-dolor: black; width: 60px; height: 150px;';
    }
    else {
        divs[2].style.cssText = 'background-dolor: gold; width: 200px; height: 200px;';
    }
};

window.onload = function () {
	if(true) {
        //alert('true!');
	}
	else {
        //alert('false!');
	}

	// Real conditions
	if(1 === 1) {
		//alert('true!');
	}
	else { //else is optional
		//alert('flase!');
	}

    // !== means 'not equivalent to'
	if(1 !== 2){
		//alert('true!');
	}
    
    // Multiple separateconditions
	if(2 === 1){
		//alert('Condition 1 is true!');
	}
	else if('a' === 'a') {
		//alert('Condition 2 is true!');
	}
	else {
		//alert('Neither is true QQ.');
	}

    if (2 === 2 && 15 === 10) { // && emans AND
    	//alert('Condition 1 is true.');
    }
    else if(2 !== 2 || 15 === 10) { // || means OR
    	//alert('Condition 2 is true.');
    }
    else {
    	//alert('Neither is true.');
    }

    document.getElementsById('changeDiv1').addEventListener('click', changeDivCSS);
    document.getElementsById('changeDiv2').addEventListener('click', changeDivCSS);
    document.getElementsById('changeDiv3').addEventListener('click', changeDivCSS);
};