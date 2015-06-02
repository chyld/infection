function Factory(){
}

Factory.users = function(){
  var a = new User("A", 1);
  var b = new User("B", 1);
  var c = new User("C", 1);
  var d = new User("D", 1);
  var e = new User("E", 1);
  var f = new User("F", 1);
  var g = new User("G", 1);
  var h = new User("H", 1);
  var i = new User("I", 1);
  var j = new User("J", 1);
  var k = new User("K", 1);
  var l = new User("L", 1);
  var m = new User("M", 1);
  var n = new User("N", 1);
  var o = new User("O", 1);
  var p = new User("P", 1);
  var q = new User("Q", 1);
  var r = new User("R", 1);
  var s = new User("S", 1);
  var t = new User("T", 1);
  var u = new User("U", 1);
  var v = new User("V", 1);
  var w = new User("W", 1);
  var x = new User("X", 1);
  var y = new User("Y", 1);
  var z = new User("Z", 1);

  var users = [];
  users.push(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z);
  return users;
};

Factory.relationships = function(rounds){
  var users = Factory.users();

  for(var i = 0; i < rounds; i++){
    var a = Math.floor(Math.random() * 26);
    var b = Math.floor(Math.random() * 26);
    if(a !== b){
      users[a].addStudent(users[b]);
    }
  }

  return users;
};
