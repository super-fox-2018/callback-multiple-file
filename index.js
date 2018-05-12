const fs = require('fs');
// var sleep = require('sleep');


function match_data(parent_file, children_file) {
  var parents;
  var childrens;
  fs.readFile('parents.json', function(err, dataP) {
    // sleep.sleep(5)
    if (err) {
      throw err
    }
    parents = JSON.parse(dataP)
    for (var i = 0; i < parents.length; i++) {
      parents[i].Childrens = []
    }


    fs.readFile('childrens.json', function(err, dataC) {
      if (err) {
        throw err
      }
      childrens = JSON.parse(dataC)
      // console.log(typeof childrens);
      for (var i = 0; i < parents.length; i++) {
        for (var j = 0; j < childrens.length; j++) {
          if (parents[i].last_name === childrens[j].family) {
            parents[i].Childrens.push(childrens[j].full_name)
          }
        }
        console.log(parents[i]);
      }
    })

  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
