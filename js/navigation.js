// Scripts

var navItems = document.getElementsByClassName('nav--ul-li'),
	navItemsMonth = document.getElementsByClassName('nav--ul-li-months'),
	heading = document.getElementById('header--heading-h1'),
	headingIcon = document.getElementById('header--heading-icon'),
	sections = document.getElementsByTagName('section');

function navigate (array) {
	for (var i = 0; i < array.length; i++) {
	    array[i].onclick = function(event) {

	    	// Highlights the active nav icon
	    	for (var i = 0; i < array.length; i++) {
	    		array[i].classList.remove('active');
	    	}
	    	this.classList.add('active');

	    	// If happens on main nav then change the heading as well
	    	if (array == navItems) {
		    	heading.innerHTML = this.getAttribute('data-value');
		    	headingIcon.src = this.getAttribute('source');
		    	var index = this.getAttribute('index');
		    	for (var i = 0; i < sections.length; i++) {
	    			sections[i].classList.add('d-none');
	    		}
	    		sections[index].classList.remove('d-none');
	    		sections[index].classList.add('active');
	    	}
	    }
	}
}

navigate(navItems);
navigate(navItemsMonth);