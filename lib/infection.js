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
