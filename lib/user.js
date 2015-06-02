function User(name, version){
  this.id = User.counter++;
  this.createdAt = Date.now();
  this.name = name;
  this.version = version;
  this.teachers = [];
  this.students = [];
}

User.counter = 1;
