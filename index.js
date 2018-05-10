const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file, callback){
  fs.readFile(parent_file, (error, data) => {
    // sleep.sleep(5);
    let parents = JSON.parse(data)
    let childrens = fs.readFileSync(children_file)
    childrens = JSON.parse(childrens)

    for(var i = 0; i < parents.length; i++){
      let arrChildrens = [];
      for(var j = 0; j < childrens.length; j++){
        if(childrens[j].family === parents[i].last_name){
          arrChildrens.push(childrens[j].full_name);
        }
        parents[i].childrens = arrChildrens
      }
    }
    callback(parents)
  })
}

match_data('./parents.json', './childrens.json', function(data){
  console.log(data)
})
console.log("Notification : Data sedang diproses !");

/*
NOTE:
sleep dimatiin sementara karena nggak tau kenapa nggak mau jalan "can't find module"
tapi udh install npm
*/