const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
// 
function getMyTaxes(salary) {
	return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 1850));
// 
function getMiddleTaxes() {
	return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(litva));
// 
function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(latvia));
// 
function getMySalary() {
	const minSalary = 1500;
	const maxSalary = 2000;
	const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
	const taxes = +(this.tax * salary).toFixed(2);
	const profit = +(salary - taxes).toFixed(2);
	console.log({ salary, taxes, profit});
}
setInterval(getMySalary.bind(ukraine), 10000);
// 