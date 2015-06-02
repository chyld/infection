
$(document).ready(init);

function init(){
  var users = Factory.users();
  drawUsers("#total-infection", users);
  drawUsers("#limited-infection", users);
  $("#total-infection").on("click", "div", totalInfection);
  $("#limited-infection").on("click", "div", limitedInfection);
}

function drawUsers(selector, users){
  $(selector).empty();

  users.forEach(function(u){
    $(selector).append("<div data-id=" + u.id + ">" + u.name  + "</div>");
  });
}

function updateUsers(selector, users, version, color){
  var filtered = users.filter(function(u){
    return u.version === version;
  });

  filtered.forEach(function(u){
    $(selector + "[data-id=" + u.id + "]").css('background-color', color);
  });
}

function totalInfection(){
  var users = Factory.relationships(20);
  var idx = $(this).index();
  drawUsers('#total-infection', users);
  Infection.totalInfection(users[idx], 2);
  updateUsers("#total-infection > div", users, 2, '#FF4136');
}

function limitedInfection(){
  var users = Factory.relationships(20);
  var idx = $(this).index();
  drawUsers('#limited-infection', users);
  Infection.limitedInfection(users, users[idx], 2, 5);
  updateUsers("#limited-infection > div", users, 2, '#FFDC00');
}
