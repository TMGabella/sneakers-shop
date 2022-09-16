class Spinner {
	handleClear() {
		 ROOT_SPINNER.innerHTML = '';
	}

	render() {
		 const html = `
			  <div class="spinner-container">
			       <p  class = " text-spinner"> Вика, ты лучшая !!!</p>
					 <img class="spinner__img" src="images/spinner.svg" />
					 <img class="spinner__img" src="images/vika.jpg" />
			  </div>
		 `;

		 ROOT_SPINNER.innerHTML = html;
	}
}

const spinnerPage = new Spinner();