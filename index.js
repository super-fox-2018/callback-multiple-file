const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, data)=>{
    sleep.sleep(5);
    let parents     = JSON.parse(data)
    let children    = JSON.parse(fs.readFileSync(children_file, 'utf8'));

    for(var i = 0; i < parents.length; i++){
      let arrChildren = [];
      for(var j = 0; j < children.length; j++){
        if(parents[i].last_name === children[j].family){
          arrChildren.push(children[j].full_name);
        }
        parents[i].childrens = arrChildren;
      }
    }
    callback(parents);
  })

}

match_data('./parents.json', './childrens.json', function(data){
  console.log(data);
})
console.log("Notification : Data sedang diproses !");
