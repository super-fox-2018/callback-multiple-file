const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...

    let parentsFile = fs.readFileSync(parent_file, 'utf8');
        sleep.sleep(5);
    let parents_data = JSON.parse(parentsFile);
    //console.log(parents_data);
    
    let childFile = fs.readFileSync(children_file, 'utf-8');
        sleep.sleep(5);
    let children_data = JSON.parse(childFile);
    

    for(let a = 0; a < parents_data.length; a++){
      parents_data[a].childrens = [];
      var parent = parents_data[a].last_name;
      for(let b = 0; b < children_data.length; b++){
        var childFam = children_data[b].family
        if(parent === childFam){
          parents_data[a].childrens.push(children_data[b].full_name)
        }
       // sleep.sleep(5)  
      }
    }
    console.log(parents_data);
  }
  
  match_data('./parents.json', './childrens.json')
  console.log("Notification : Data sedang diproses !");
  


