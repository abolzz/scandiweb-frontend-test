// Scripts

// Highlights the active nav icon
var navItems = document.getElementsByClassName('nav--ul-li'),
	navItemsMonth = document.getElementsByClassName('nav--ul-li-months'),
	heading = document.getElementById('header--heading-h1'),
	headingIcon = document.getElementById('header--heading-icon');

function highlight (array) {
	for (var i = 0; i < array.length; i++) {
	    array[i].onclick = function(event) {
	    	if (array == navItems) {
		    	heading.innerHTML = this.getAttribute('data-value');
		    	headingIcon.src = this.getAttribute('source');
	    	}
	    	else if (array == navItemsMonth) {
	    		this.classList.add("underline");
	    	}
	    	for (var i = 0; i < array.length; i++) {
	    		array[i].classList.remove('active');
	    	}
	    	this.classList.add('active');
	    }
	}
}

highlight(navItems);
highlight(navItemsMonth);