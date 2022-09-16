class Shopping{

	handleClear() {
		ROOT_SHOPPING.innerHTML = " ";
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlKatalog = '';
		let sumKatalog = 0;


		KATALOG.forEach(({ id, name, price  }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlKatalog += `
				<tr>
					 <td class="shopping-element__name">⚡️ ${name}</td>
					 <td class="shopping-element__price">${price.toLocaleString()} Rub</td>
				</tr>
		  `;
				sumKatalog += price;
				
		}
		});
		const html = `
		<div class = "shopping-container">

		<div class = "shopping__close" onclick = "shoppingPage.handleClear(); ">
		   <img  src = "images/closed2.svg">
		</div>
      <table>
		   ${htmlKatalog}
			<tr>
			  <td class="shopping-element__name">⚡️ Сумма: </td>
			  <td class="shopping-element__price">${sumKatalog.toLocaleString()} Rub</td>
	      </tr>
		</table>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}


const shoppingPage = new Shopping();