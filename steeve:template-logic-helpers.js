if (Meteor.isClient) {
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
  
  Template.registerHelper('got_id', function(){
    if(this._id){
      return true;
    }
  });

  Template.registerHelper('contains', function(list, val){
    if(list && val){
      return _.contains(list, val);
    }
  });
}