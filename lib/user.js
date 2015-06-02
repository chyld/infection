function User(name, version){
  this.id = User.counter++;
  this.createdAt = Date.now();
  this.name = name;
  this.version = version;
  this.teachers = [];
  this.students = [];
}

User.counter = 1;

User.prototype.addStudent = function(user){
  var isFound = this.students.some(function(student){
    return user.id === student.id;
  });

  if(!isFound){
    user.teachers.push(this);
    this.students.push(user);
  }
};
