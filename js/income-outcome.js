var incomeWrapper = document.getElementById('incomeWrapper'),
	outcomeWrapper = document.getElementById('outcomeWrapper'),
	overlay = document.getElementById('overlay'),
	incomeModal = document.getElementById('incomeModal'),
	outcomeModal = document.getElementById('outcomeModal');

incomeWrapper.onclick = function(event) {
	overlay.classList.remove('d-none');
	incomeModal.classList.remove('d-none');

	overlay.onclick = function(event) {
		this.classList.add('d-none');
		incomeModal.classList.add('d-none');
	}
}

outcomeWrapper.onclick = function(event) {
	overlay.classList.remove('d-none');
	outcomeModal.classList.remove('d-none');

	overlay.onclick = function(event) {
		this.classList.add('d-none');
		outcomeModal.classList.add('d-none');
	}
}

var incomeSubmit = document.getElementById('incomeSubmit'),
	incomeInput = document.getElementById('incomeInput'),
	incomeDisplay = document.getElementById('income'),
	outcomeDisplay = document.getElementById('outcome'),
	balance = document.getElementById('balance'),
	income = localStorage.getItem('income'),
	outcome = localStorage.getItem('outcome');

balance.innerHTML = "$" + localStorage.getItem('balance');

incomeSubmit.onclick = function(event) {
	localStorage.setItem('income', incomeInput.value);
	income = localStorage.getItem('income');
	incomeDisplay.innerHTML = "+$" + incomeInput.value;
	incomeModal.classList.add('d-none');
	overlay.classList.add('d-none');
	localStorage.setItem('balance', income - outcome);
	balance.innerHTML = "$" + localStorage.getItem('balance');
}

outcomeSubmit.onclick = function(event) {
	localStorage.setItem('outcome', outcomeInput.value);
	outcome = localStorage.getItem('outcome')
	outcomeDisplay.innerHTML = "-$" + outcomeInput.value;
	outcomeModal.classList.add('d-none');
	overlay.classList.add('d-none');
	localStorage.setItem('balance', income - outcome);
	balance.innerHTML = "$" + localStorage.getItem('balance');
}

if (income !== null) {
	incomeDisplay.innerHTML = "+$" + income;
	outcomeDisplay.innerHTML = "-$" + outcome;
}