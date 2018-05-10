const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,callback) {
  // your code here...
  fs.readFile(parent_file,'utf-8',(err,data)=>{
    sleep.sleep(5)
    if(err) throw err;
    let parent_data = JSON.parse(data)
    fs.readFile(children_file,'utf-8',(err,data)=>{
      if(err) throw err;
      let children_data = JSON.parse(data)
      callback(parent_data,children_data)
    })
  })
}

function showData(parent_data,children_data){
  for(let i = 0; i < parent_data.length; i++){
    parent_data[i]['children'] = []
    for(let j = 0; j < children_data.length; j++){
      if(parent_data[i]['last_name'] === children_data[j]['family']){
        parent_data[i]['children'].push(children_data[j]['full_name'])
      }
    }
  }
  console.log(parent_data)
}

match_data('./parents.json', './childrens.json',showData)
console.log("Notification : Data sedang diproses !");
