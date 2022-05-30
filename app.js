// 1. Напишите функцию, которая может преобразовывать строку в число 


function myStr() {
	let myNum1 = '4';
	let myNum2 = '8';
	console.log(Number(myNum1) + Number(myNum2));
}
myStr() // на выходе должен быть 12


// 2. Напишите функцию, которая проверяет число четное или не четное: если четное возвращает true иначе false 

function myNumber (a, b) {
	let oddNumber = 0;
	let evenNumber = 1;
	if (a % b === 0) {
		console.log(true)
	} else {
		console.log(false)
	}
}
myNumber(21, 10)


// 3. Сделайте функцию, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

function isElementInArray(inputArray, searchElement) {
  return inputArray.includes(searchElement)
}

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true

