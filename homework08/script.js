class Student {
	constructor(university, course, fullName) {
	  this.university = university;
	  this.course = course;
	  this.fullName = fullName;
	  this.isDismissed = false;
	  this._marks = [5, 4, 4, 5];
	}
 
	getInfo() {
	  return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
	}
	get marks() {
	  return this._marks;
	}
	set marks(mark) {
	  if (!this.isDismissed) {
		 this._marks.push(mark);
	  }
	}
	getAverageMark() {
	  const sum = this._marks.reduce((total, mark) => total + mark, 0);
	  const average = sum / this._marks.length;
	  return average.toFixed(1);
	}
	dismiss() {
	  this.isDismissed = true;
	  this._marks = null;
	}
	recover() {
	  this.isDismissed = false;
	  this._marks = [5, 4, 4, 5];
	}
}

const student1 = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");
console.log(student1.getInfo());
console.log(student1.marks);
student1.marks = 5;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.marks);
student1.recover();
console.log(student1.marks);

class BudgetStudent extends Student {
	constructor(university, course, fullName) {
	  super(university, course, fullName);
	  this.scholarshipInterval = null;
	  this.startScholarshipInterval();
	}
 
	getScholarship() {
	  if (this.isDismissed) {
		 console.log("Ви не отримуєте стипендію, так як вас виключено.");
		 return;
	  }
 
	  if (this.getAverageMark() >= 4.0) {
		 console.log("Ви отримали 1400 грн. стипендії");
	  } else {
		 console.log("Ваш середній бал нижче 4.0, тому стипендію не отримуєте");
	  }
	}
 
	startScholarshipInterval() {
	  this.scholarshipInterval = setInterval(() => {
		 this.getScholarship();
	  }, 30000);
	}
 
	stopScholarshipInterval() {
	  clearInterval(this.scholarshipInterval);
	}
}
const budgetStudent = new BudgetStudent(	"Вищої Школи Психотерапії м.Одеса",	1,	"Остап Родоманський Бендер");
