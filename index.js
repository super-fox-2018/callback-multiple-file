const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {

  fs.readFile(parent_file, (err, dataParent) => {
    if (err == true) {
      throw err;
    }

    let parseParent = JSON.parse(dataParent)

    fs.readFile(children_file, (err, data) => {
      if (err  == true) {
        throw err;
      }
      let parseChild = JSON.parse(data);
      // sleep.sleep(5) /* error kalo pake sleep. padahal sudah di update npm nya*/
      cb(parseParent, parseChild);
    });
  });
}

function mixedData(parents, children) {

  for (let i = 0; i < parents.length; i++) {
    let childrenName = [];
    let check = false;
    for (let j = 0; j < children.length; j++) {
      if (parents[i].last_name === children[j].family) {
        let check = true;
        if (childrenName.includes(children[j].full_name) === false) {
          childrenName.push(children[j].full_name);
        }
      }
    }

    if (check == false) {
      parents[i].childrens = childrenName;
      console.log(parents[i]);
    }

  }
}

match_data('./parents.json', './childrens.json', mixedData);
console.log("Notification : Data sedang diproses !");