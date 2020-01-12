document.addEventListener('DOMContentLoaded', () => {
	
	const form = document.forms[0];
	const int = form.querySelector('input');
	const btn = form.querySelector('button');

	const url = 'https://api.cryptonator.com/api/full/btc-usd'

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		let val = +int.value;
		if (isNaN(val) || !int.value.trim()) {
			alert('Невозможно!')
		} else {
			document.querySelector('.container-block__name_count').textContent = val;
			fetch(url, {
				method: 'GET'
			})
				.then(resp => resp.json())
				.then(info => {
					let usd = (+info.ticker.price).toFixed(2)
					document.querySelector('.container-block__name_usd').textContent = (usd*val).toFixed(2);
					document.querySelector('.container-block__name_rub').textContent = parseInt(usd*66)*val;
				})

		}
	})

})