const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function getPairs(students) {
	const pairs = [];
	const maleStudents = students.filter(student => student.endsWith("ндр") || student.endsWith("ор") || student.endsWith("ій"));
	const femaleStudents = students.filter(student => student.endsWith("на") || student.endsWith("ра"));
	const minPairsCount = Math.min(maleStudents.length, femaleStudents.length);
	for (let i = 0; i < minPairsCount; i++) {
	  pairs.push([maleStudents[i], femaleStudents[i]]);
	}
	return pairs;
}
 const pairs = getPairs(students);
 console.log(pairs);

function assignThemes(pairs, themes) {
	const pairsWithThemes = [];
	for (let i = 0; i < pairs.length; i++) {
	  pairsWithThemes.push([pairs[i].join(" і "), themes[i]]);
	}
	return pairsWithThemes;
}
const pairsWithThemes = assignThemes(pairs, themes);
console.log(pairsWithThemes);

function assignMarks(students, marks) {
	const studentMarks = [];
	for (let i = 0; i < students.length; i++) {
	  studentMarks.push([students[i], marks[i]]);
	}
	return studentMarks;
}
const studentMarks = assignMarks(students, marks);
console.log(studentMarks);

function assignProjectMarks(pairsWithThemes) {
	const projectMarks = [];
	for (let i = 0; i < pairsWithThemes.length; i++) {
	  const randomMark = Math.floor(Math.random() * 5) + 1;
	  projectMarks.push([...pairsWithThemes[i], randomMark]);
	}
	return projectMarks;
}
const projectMarks = assignProjectMarks(pairsWithThemes);
console.log(projectMarks);