const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  fs.readFile(parent_file, "utf8", (err, data)=> {
    if(err){
      throw err;
    }
    sleep.sleep(5);
    let parents_data = JSON.parse(data);

    fs.readFile(children_file, "utf8", (err,data) => {
      if(err) throw err;
      let childrens_data = JSON.parse(data);

      cb(parents_data, childrens_data)
    });
  });
}

function addChildren(parents_data, childrens_data){
  for(let i = 0; i < parents_data.length; i++){
    parents_data[i].children = [];
    for(let k = 0; k < childrens_data.length; k++){
      if(parents_data[i].last_name === childrens_data[k].family){
        parents_data[i].children.push(childrens_data[k].full_name);
      }
    }
    sleep.sleep(5);
  }
  console.log(parents_data);
}

match_data('./parents.json', './childrens.json', addChildren)
console.log("Notification : Data sedang diproses !");
