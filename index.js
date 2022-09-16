function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();
}

spinnerPage.render();

let KATALOG = [];

// https://api.myjson.com/bins/esicc
fetch('server/katalog.json')
	.then(res => res.json())
	.then(body => {
		 KATALOG = body;

		 setTimeout(() => {
			spinnerPage.handleClear();
			  render();
		 }, 1000);

	})
	.catch(error => {
		spinnerPage.handleClear();
		errorPage.render();
	});
