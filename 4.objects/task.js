function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty("marks") === false) {
		return "Студент отчислен";
	} else {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") === false || this.marks.length === 0) {
		return 0;
	} else {
		return this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.Subject;
	delete this.marks;
}