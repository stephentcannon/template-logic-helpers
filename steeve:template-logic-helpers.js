Template.registerHelper('isEqual', function(x, y) {
  if(x === y){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('isNotEqual', function(x, y) {
  if(x != y){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('isGT', function(x, y) {
  if(Number(x) > Number(y)){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('isGTE', function(x, y) {
  if(Number(x) >= Number(y)){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('isLT', function(x, y) {
  if(Number(x) < Number(y)){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('isLTE', function(x, y) {
  if(Number(x) <= Number(y)){
    return true;
  } else {
    return false;
  }
});