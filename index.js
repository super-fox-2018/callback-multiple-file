const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  getFile(parent_file, function (parentData) {
    getFile(children_file, function (childrenData) {
      for (let i = 0; i < parentData.length; i++) {
        let arrChildren = []
        for (let j = 0; j < childrenData.length; j++) {
          if (parentData[i].last_name === childrenData[j].family) {
            arrChildren.push(childrenData[j].full_name)
          }
        }
        parentData[i].children = arrChildren;
      }
      sleep.sleep(5)
      console.log(parentData)
    })
  })
}

function getFile(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    let arrObj = JSON.parse(data);
    callback(arrObj)
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
