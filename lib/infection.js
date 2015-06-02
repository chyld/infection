function Infection(){
}

Infection.totalInfection = function(user, version){
  if(user.version === version){
    return;
  }

  user.version = version;

  user.teachers.forEach(function(teacher){
    Infection.totalInfection(teacher, version);
  });

  user.students.forEach(function(student){
    Infection.totalInfection(student, version);
  });
};

Infection.limitedInfection = function(users, user, version, max){
  if(infections() >= max){
    return;
  }

  user.version = version;

  user.students.forEach(function(student){
    student.version = version;
  });

  user.students.forEach(function(student){
    Infection.limitedInfection(users, student, version, max);
  });

  function infections(){
    return users.reduce(function(sum, user){
      return sum += user.version === 2 ? 1 : 0;
    }, 0);
  }
};
