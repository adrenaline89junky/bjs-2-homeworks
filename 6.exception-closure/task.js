//Напишите функцию parseCount
//Для парсинга воспользуйтесь функцией Number.parseInt.
//Если результатом парсинга является значение NaN, то выбрасывайте исключение с ошибкой "Невалидное значение".

function parseCount(value) { //Аргументом функции является значение, которое необходимо распарсить.
	let res = Number.parseInt(value);
	if (isNaN(res)) {
		throw new Error('Невалидное значение');
	}

	return res; //Верните результат парсинга из функции.
}

function validateCount(value) {

	try {
		return parseCount(value);
	} catch (e) {
		return e;
	}
}

//Задача 2

class Triangle {
	constructor(a, b, c) { //3 стороны треугольника.
		this.a = a;
		this.b = b;
		this.c = c;

		if ((a + b) < c || (a + c) < b || (b + c) < a) { //В случае нарушения правила существования треугольника (сумма двух сторон меньше третьей) выбрасывайте исключение с ошибкой "Треугольник с такими сторонами не существует".
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimeter() { // периметр треугольника
		return this.a + this.b + this.c;
	}

	getArea() { //площадь треугольника 
		let S = this.getPerimeter() / 2;
		return +Math.sqrt((S * (S - this.a) * (S - this.b) * (S - this.c))).toFixed(3);
	}
}

function getTriangle(a, b, c) { //3 значения длин сторон
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return new class SimpleClass {
			getArea = () => 'Ошибка! Треугольник не существует';
			getPerimeter = () => 'Ошибка! Треугольник не существует';
		}
	}
}