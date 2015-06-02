var users;

QUnit.module("Infection",{
  beforeEach: function(){
    users = Factory.users();
  }
});

QUnit.test(".totalInfection", function(assert){
  users[0].addStudent(users[1]);
  users[0].addStudent(users[2]);

  users[2].addStudent(users[3]);
  users[2].addStudent(users[4]);
  users[2].addStudent(users[5]);

  users[4].addStudent(users[0]);
  users[4].addStudent(users[1]);

  users[5].addStudent(users[2]);
  users[5].addStudent(users[6]);
  users[5].addStudent(users[8]);
  users[5].addStudent(users[10]);

  users[8].addStudent(users[0]);
  users[8].addStudent(users[5]);

  Infection.totalInfection(users[0], 2);

  var infected = users.reduce(function(sum, user){
    return sum += user.version === 2 ? 1 : 0;
  }, 0);

  assert.equal(infected, 9, "should infect 9 connected users");
});
