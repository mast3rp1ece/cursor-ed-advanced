const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
	math: [4, 4, 3, 4],
	algorithms: [3, 3, 3, 4, 4, 4],
	data_science: [5, 5, 3, 4]
	}
	}, {
	name: "Victor",
	course: 4,
	subjects: {
	physics: [5, 5, 5, 3],
	economics: [2, 3, 3, 3, 3, 5],
	geometry: [5, 5, 2, 3, 5]
	}
	}, {
	name: "Anton",
	course: 2,
	subjects: {
	statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
	english: [5, 3],
	cosmology: [5, 5, 5, 5]
	}
	}];
//////////////////////////////////////////////////////////////////
function getSubjects(student) {
	const subjects = Object.keys(student.subjects);
	const formattedSubjects = subjects.map(subject => {
		return subject.charAt(0).toUpperCase() + subject.slice(1).replace('_', ' ');
	});
	return formattedSubjects;
}
// 
function getAverageMark(student) {
	const marks = Object.values(student.subjects).flat();
	const sum = marks.reduce((total, mark) => total + mark, 0);
	const average = sum / marks.length;
	return average.toFixed(2);
}
// 
function getStudentInfo(student) {
	const course = student.course;
	const name = student.name;
	const averageMark = getAverageMark(student);
	return {
		course,
		name,
		averageMark: parseFloat(averageMark)
	};
}
// 
function getStudentsNames(students) {
	const names = students.map(student => student.name);
	return names.sort();
}
// 
function getBestStudent(students) {
	let bestAverage = 0;
	let bestStudent = '';

	for (let i = 0; i < students.length; i++) {
		const student = students[i];
		const averageMark = parseFloat(getAverageMark(student));
		if (averageMark > bestAverage) {
			bestAverage = averageMark;
			bestStudent = student.name;
		}
	}
	return bestStudent;
}
// 
function calculateWordLetters(word) {
	const letters = {};

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (letters[letter]) {
			letters[letter]++;
		} else {
			letters[letter] = 1;
		}
	}
	return letters;
}
// 

console.log('Function 1: ', getSubjects(students[1]));
console.log('Function 2: ', getAverageMark(students[1]));
console.log('Function 3: ', getStudentInfo(students[2]));
console.log('Function 4: ', getStudentsNames(students));
console.log('Function 5: ', getBestStudent(students));
console.log('Function 6: ', calculateWordLetters('calculated'));
