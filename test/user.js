var users;

QUnit.module("User",{
  beforeEach: function(){
    users = Factory.users();
  }
});

QUnit.test("new", function(assert){
  assert.ok(users[0] instanceof User, "should be a User");
  assert.ok(users[0].id, "should have a user id");
  assert.ok(users[0].createdAt, "should have a createdAt time");
  assert.equal(users[0].name, "A", "should have name A");
  assert.equal(users[0].version, 1, "should be version 1");
  assert.equal(users[0].teachers.length, 0, "should have no teachers");
  assert.equal(users[0].students.length, 0, "should have no students");
});

QUnit.test("#addStudent", function(assert){
  users[0].addStudent(users[1]);
  users[0].addStudent(users[1]);
  users[0].addStudent(users[1]);
  users[0].addStudent(users[2]);
  assert.equal(users[0].students.length, 2, "should have 2 students");
  assert.equal(users[0].teachers.length, 0, "should have no teachers");
  assert.equal(users[1].teachers.length, 1, "should have 1 teacher");
  assert.equal(users[2].teachers.length, 1, "should have 2 teachers");
});
