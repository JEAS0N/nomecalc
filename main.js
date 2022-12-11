const cherOtdel = document.getElementById('cher-otdel');
const chistOtdel = document.getElementById('chist-otdel');
const plastWin = document.getElementById('plast-win');
const alumWin = document.getElementById('alum-win');
const ytep = document.getElementById('ytep');
const fasad = document.getElementById('fasad');
const inCom = document.getElementById('in-com');
const foundation = document.getElementById('foundation');

const houseType = document.getElementById('type');
const result = document.querySelector('.result');

let price = 10;
const priceCherOtdel = 50;
const priceChistOtdel = 100;
const pricePlastWin = 150;
const priceAlumWin = 200;
const priceYtep = 250;
const priceFoundation = 300;
const priceInCom = 350;
const priceFasad = 400;
result.value = `${price} рублей`;
houseType.value = 'Эконом';

const reset = () => {
	cherOtdel.checked = false;
	chistOtdel.checked = false;
	plastWin.checked = false;
	alumWin.checked = false;
	ytep.checked = false;
	fasad.checked = false;
	inCom.checked = false;
	foundation.checked = false;
}

reset();

houseType.addEventListener('change', () => {
	if (houseType.value == 'Эконом') {
		price = 10;
		reset();
	}
	if (houseType.value == 'Комфорт') {
		price = 20;
		reset();
	}
	if (houseType.value == 'Premium') {
		price = 30;
		reset();
	}
	result.value = `${price} рублей`;
})

cherOtdel.addEventListener('change', () => {
	if (cherOtdel.checked) {
		price = price + priceCherOtdel;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceCherOtdel;
		result.value = `${price} рублей`;
	}
})

chistOtdel.addEventListener('change', () => {
	if (chistOtdel.checked) {
		price = price + priceChistOtdel;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceChistOtdel;
		result.value = `${price} рублей`;
	}
})

plastWin.addEventListener('change', () => {
	if (plastWin.checked) {
		price = price + pricePlastWin;
		result.value = `${price} рублей`;
	}
	else {
		price = price - pricePlastWin;
		result.value = `${price} рублей`;
	}
})

alumWin.addEventListener('change', () => {
	if (alumWin.checked) {
		price = price + priceAlumWin;
		result.value = `${price} рублей`;
	}
	else {
		price -= priceAlumWin;
		result.value = `${price} рублей`;
	}
})

ytep.addEventListener('change', () => {
	if (ytep.checked) {
		price = price + priceYtep;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceYtep;
		result.value = `${price} рублей`;
	}
})

fasad.addEventListener('change', () => {
	if (fasad.checked) {
		price = price + priceFasad;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceFasad;
		result.value = `${price} рублей`;
	}
})

inCom.addEventListener('change', () => {
	if (inCom.checked) {
		price = price + priceInCom;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceInCom;
		result.value = `${price} рублей`;
	}
})

foundation.addEventListener('change', () => {
	if (foundation.checked) {
		price = price + priceFoundation;
		result.value = `${price} рублей`;
	}
	else {
		price = price - priceFoundation;
		result.value = `${price} рублей`;
	}
})


