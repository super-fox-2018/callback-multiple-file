const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {

  //Ref: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

  fs.readFile(parent_file, (err, dataParents) => {
    if (err) throw err;
    let parseParent = JSON.parse(dataParents)

    fs.readFile(children_file, (err, data) => {
      if (err) throw err;
      let parseChild = JSON.parse(data)
      sleep.sleep(5)
      cb(parseParent, parseChild)
    });
  });
}


function CombineData(parents, children) {
  for (let i = 0; i < parents.length; i++) {
    let childrenName = []
    let check = false
    for (let j = 0; j < children.length; j++) {

      if (parents[i].last_name === children[j].family) {
        let check = true
        if (childrenName.includes(children[j].full_name) === false) {
          childrenName.push(children[j].full_name)
        }
      }
    }
    if (!check) {
      parents[i].childrens = childrenName
      console.log(parents[i])
    }

  }
}



match_data('./parents.json', './childrens.json', CombineData)
console.log("Notification : Data sedang diproses !");
