var old = 0;

function random(r) {
  var d = new Date();
  var n = d.getTime();
  return n%r;
  }

function newRand(total) {
  if (total == 0 || total == 1) {
    return 0;
  }

  var d = new Date();
  var n = d.getTime();
  var result = n % total;

    while (old == result) {
    d = new Date();
    n = d.getTime();
    result = n % total;
  }

    old = result;
  return result;
}

var counter = 0
