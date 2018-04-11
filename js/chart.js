var chartCircles = document.getElementsByClassName('circle'),
	label = document.getElementById('categorySpentLabel'),
	icon = document.getElementById('categorySpentIcon');

for (var i = 0; i < chartCircles.length; i++) {
		    chartCircles[i].onclick = function(event) {

		    	for (var i = 0; i < chartCircles.length; i++) {
		    		chartCircles[i].classList.remove('active-circle');
		    	}
		    	this.classList.add('active-circle');
		    	label.innerHTML = this.getAttribute('data-value');
		    	icon.src = this.getAttribute('icon-source');
		    }
}