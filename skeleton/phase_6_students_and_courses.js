function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function() {
  let hash = new Map();
  for (let course of this.courses) {
    let credit = hash.get(course.department) || 0;
    hash.set(course.department, credit + course.numCredits);
  }

  return hash;
};

function Course(name, department, numCredits, daysOfWeek, timeBlock) {
  this.name = name;
  this.department = department;
  this.numCredits = numCredits;
  this.daysOfWeek = daysOfWeek;
  this.timeBlock = timeBlock;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictWith = function(course) {
  
};


let student1 = new Student('John', 'Smith');
let student2 = new Student('Walter', 'Wan');

let course1 = new Course('math', 'math', 5);
let course2 = new Course('american history 4', 'history', 6);

student1.enroll(course1);
student1.enroll(course2);
student1.enroll(course2);

console.log(student1.courseLoad());
