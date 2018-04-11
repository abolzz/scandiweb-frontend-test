// Scripts

var navItems = document.getElementsByClassName('nav--ul-li'),
	navItemsMonth = document.getElementsByClassName('nav--ul-li-months'),
	heading = document.getElementById('header--heading-h1'),
	headingIcon = document.getElementById('header--heading-icon'),
	sections = document.getElementsByTagName('section'),
	backButton = document.getElementById('backButton');

function navigate (array) {
		for (var i = 0; i < array.length; i++) {
		    array[i].onclick = function(event) {

		    	// Highlights the active nav icon
		    	for (var i = 0; i < array.length; i++) {
		    		array[i].classList.remove('active');
		    	}
		    	this.classList.add('active');

		    	// If happens on main nav then change the heading
		    	if (array == navItems) {
			    	heading.innerHTML = this.getAttribute('data-value');
			    	headingIcon.src = this.getAttribute('source');
			    	var index = this.getAttribute('index');
			    	for (var i = 0; i < sections.length; i++) {
		    			sections[i].classList.add('d-none');
		    		}
		    		sections[index].classList.remove('d-none');
		    		sections[index].classList.add('active');
		    		setTimeout(function() {
				        document.getElementById('nav').classList.add('d-none');
				    }, 1000);
		    	}
		    }
		}
}

navigate(navItems);
navigate(navItemsMonth);

backButton.onclick = function(event) {
	for (var i = 0; i < sections.length; i++) {
		sections[i].classList.add('d-none');
	}
	sections[4].classList.remove('d-none');
	sections[4].classList.add('active');
	heading.innerHTML = backButton.getAttribute('data-value');
	headingIcon.src = backButton.getAttribute('source');
	for (var i = 0; i < navItems.length; i++) {
		navItems[i].classList.remove('active');
	}
	navItems[4].classList.add('active');

	document.getElementById('nav').classList.remove('d-none');
}