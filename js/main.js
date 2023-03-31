customSelect('select');

//  Подключение стилей для календаря
const picker = new easepick.create({
	lang: 'ru-Ru',
	element: document.getElementById('date'),
	css: [
		'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
	],
	format: 'DD.MM.YY',
});

// input subscribe__label
const inputSubscribe = document.querySelector('.subscribe__input');
const label  = document.querySelector('.subscribe__label ');

inputSubscribe.addEventListener('input', () => {
	// console.log(1);
	if (inputSubscribe.value.trim() !== '') {
		label.classList.add('subscribe__label--top');
	} else {
		label.classList.remove('subscribe__label--top');
	}
});