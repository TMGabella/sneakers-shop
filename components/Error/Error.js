class Error {
	render() {
		const html = `
		<div class = "error-message">
		<h3>Этот далбаеб сделал где-то ошибку</h3>
		<p>напиши ему пусть исправит и зайди позже!!!</p>
		</div>
		`;

		ROOT_ERROR.innerHTML = html;
	}
}


const errorPage = new Error();