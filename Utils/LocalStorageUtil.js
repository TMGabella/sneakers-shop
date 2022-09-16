class LocalStorageUtil {
	constructor() {
		this.KeyName = 'products';
	}
	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.KeyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
		}
		return [];
	}
	putProducts(id) {
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);
		if (index === -1) {
			products.push(id);
			pushProduct = true;
		} else {
			products.splice(index, 1);
		}
		
		localStorage.setItem(this.KeyName, JSON.stringify(products));
		return { pushProduct, products}
	}
}
const localStorageUtil = new LocalStorageUtil();
