const fs = require('fs');
var sleep = require('sleep');

// setTimeout()
function match_data(parent_file, children_file, parent_children) {
  // your code here...
  setTimeout(function(){
    var parent_data = [];
    for (var i = 0; i < parent_file.length; i++) {
      var childrens = [];
      var parent_Lname = parent_file[i].last_name;
      for (var j = 0; j < children_file.length; j++) {
        var child_family = children_file[j].family;
        var child_Fname = children_file[j].full_name;
        if(parent_Lname===child_family){
          childrens.push(child_Fname);
        }
      }
      parent_file[i].childrens = childrens;
      parent_data.push(parent_file[i]);
    }
    for (var i = 0; i < parent_data.length; i++) {
      sleep.sleep(5);
      console.log(parent_data[i]);
    }
  })
  // console.log(children_file);
}


var dataParent = fs.readFileSync('parents.json','utf8');
let listParent = JSON.parse(dataParent);

var dataChildren = fs.readFileSync('childrens.json','utf8');
let listChildren = JSON.parse(dataChildren);

match_data(listParent, listChildren, function(){});
console.log("Notification : Data sedang diproses !");
